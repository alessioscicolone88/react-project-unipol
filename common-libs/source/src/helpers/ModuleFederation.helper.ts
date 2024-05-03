import { MFE_NAMES, MFE_SETTINGS } from "../main";

import { TENV_CONFIG_MANAGER } from "../envConfig";
import { EnvironmentHelper } from "./environment.helper";

type TRemotesEntriesResponse = {
  [key: string]: {
    client: string;
    server: string;
  };
};

type TModuleFederationShared = {
  eager: boolean;
  requiredVersion?: string;
  singleton: boolean;
};

type TModuleFederationsConfigs = {
  clientConfig: TModuleFederationsConfig;
  serverConfig: TModuleFederationsConfig;
};

type TModuleFederationsConfig = {
  name: string;
  library: any;
  filename: string;
  exposes: {
    "./bootstrap": string;
  };
  remotes: TModuleFederationRemotes;
  shared: TModuleFederationShared;
};

type TModuleFederationRemotes = {
  [__mfeName__: string]: string;
};

export type TwebpackLoadRemoteClientSide = (
  __mfeName__: string,
  module?: string
) => () => Promise<any>;

const EAGER_DEPS = {
  COMMON_LIBS: "@tpd-web-common-libs/nodejs-library",
  ANGULAR_LIBS: "@tpd-web-angular-libs/angular-library",

  REACT: "react",
  REACT_DOM: "react-dom",
  EMOTION_STYLED: "@emotion/styled",
  EMOTION_REACT: "@emotion/react",
  EMOTION_CACHE: "@emotion/cache",

  ANGULAR_CORE: "@angular/core",
  ANGULAR_COMMON: "@angular/common",
  ANGULAR_COMMON_HTTP: "@angular/common/http",
  ANGULAR_COMPILER: "@angular/compiler",
  ANGULAR_PLATFORM_SERVER: "@angular/platform-server",
};

function buildReactSharedModuleFederationDeps(
  PACKAGE: any,
  eagerDeps: string[],
  getPackageVersion: (key: string) => string
) {
  return () => {
    return Object.keys(PACKAGE.dependencies).reduce((acc, depKey) => {
      if (eagerDeps.includes(depKey)) {
        const version = getPackageVersion(depKey);
        return {
          ...acc,
          [depKey]: {
            eager: true,
            requiredVersion: version, // TODO - need to test if it works
            singleton: true,
          },
        };
      } else {
        return acc;
      }
    }, PACKAGE.dependencies);
  };
}

function buildAngularSharedModuleFederationDeps(
  PACKAGE: any,
  eagerDeps: string[],
  getPackageVersion: (key: string) => string
) {
  return (share: any, sharedMappings: any) => {
    const deps: any = Object.keys(PACKAGE.dependencies).reduce(
      (acc, depKey) => {
        if (eagerDeps.includes(depKey)) {
          return {
            ...acc,
            [depKey]: {
              eager: true,
              singleton: true,
              // strictVersion: true,
              requiredVersion: getPackageVersion(depKey), // TODO - need to test if it works
            },
          };
        } else {
          return acc;
        }
      },
      {}
    );

    return share({
      ...deps,
      ...sharedMappings.getDescriptors(),
    });
  };
}
function buildRemoteModuleFederationConfigs(
  __mfeName__: string,
  shared: TModuleFederationShared,
  ENV_CONFIG: TENV_CONFIG_MANAGER
): TModuleFederationsConfigs {
  let remotesEntries = {};
  if (
    __mfeName__ === MFE_NAMES.tpdRemotesImporter ||
    __mfeName__ === MFE_NAMES.tpdLoginHeaderContainer
  ) {
    remotesEntries = ENV_CONFIG.REMOTES_ENTRIES;
    remotesEntries = Object.entries(remotesEntries).reduce((acc, el) => {
      const [__mfeName__, mapEntries] = el;
      if (!MFE_SETTINGS[__mfeName__].skipImportingInCMS) {
        return {
          ...acc,
          [__mfeName__]: mapEntries,
        };
      } else {
        return acc;
      }
    }, {});
  }

  return {
    clientConfig: ModuleFederationHelper.buildRemoteModuleFederationConfig(
      __mfeName__,
      remotesEntries,
      shared,
      false
    ),
    serverConfig: ModuleFederationHelper.buildRemoteModuleFederationConfig(
      __mfeName__,
      remotesEntries,
      shared,
      true
    ),
  };
}

function buildRemoteModuleFederationConfig(
  __mfeName__: string,
  remotesEntries: TRemotesEntriesResponse,
  shared: TModuleFederationShared,
  isServer: boolean
): TModuleFederationsConfig {
  return {
    name: __mfeName__,
    library: { type: "var", name: __mfeName__ },
    filename: "remoteEntry.js",
    exposes: {
      "./bootstrap":
        "./src/bootstrap" + (isServer ? "Server" : "Client") + ".ts",
    },
    remotes: ModuleFederationHelper.getRemotesFrom(remotesEntries, isServer),
    shared,
  };
}

function getRemotesFrom(
  remotesEntries: TRemotesEntriesResponse,
  isServer: boolean
): TModuleFederationRemotes {
  return Object.entries(remotesEntries).reduce((acc, [__mfeName__, uri]) => {
    return {
      ...acc,
      [__mfeName__]: isServer
        ? ModuleFederationHelper.buildServerSideRemote(
            __mfeName__,
            uri["server"]
          )
        : `${__mfeName__}@${uri["client"]}`,
    };
  }, {});
}

function buildServerSideRemote(
  __mfeName__: string,
  remoteUrlEndpoint: string,
  shared = {}
) {
  return `${__mfeName__}@${remoteUrlEndpoint}`;
}

function buildClientSideRemote(
  __mfeName__: string,
  remoteUrlEndpoint: string,
  shared = {}
) {
  return `promise new Promise((resolveImportFunc) => {
    function evalCode(scriptContent, moduleName) {
      const scriptContentParsed = '(()=>{ \\n' + scriptContent + '\\n  try{ return ' + moduleName + '}catch(e) { return null; }; \\n})()';
      return eval.call(this, scriptContentParsed);
    }

    function rpcLoad(url, cb) {
      return fetch(url).then(res => res.text());
    }

    function rpcPerform(moduleName = "", originalScriptUrl = "") {
      let scriptUrl = originalScriptUrl;
      if (!window.location.origin.match("http://localhost")) {
        const [a, b, c, ...slugs] = scriptUrl.split("/");
        const path = slugs.join("/");
        scriptUrl = window.location.origin + "/" + path;
      }
      return rpcLoad(scriptUrl).then(scriptContent => {
        const remote = evalCode(scriptContent, moduleName);
        if (!!remote) {
          if (typeof remote === "object" && "init" in remote && "get" in remote) {
            return remote;
          } else {
            throw new Error("remote library " + moduleName + " is not an object!");
          }
        } else {
          throw new Error("remote library " + moduleName + " is not found at " + scriptUrl);
        }
      });
    }

    function rpcProcess(remote) {
      return {
        get: (request) => {
          return remote.get(request)
        },
        init: (arg) => {
          try {
            return remote.init(arg)
          } catch(e){
            console.error('remote container already initialized');
            return null;
          }
        }
      }
    }

    window["__remotes__"] = window["__remotes__"] || {};
    window["__remotes__"]["${__mfeName__}"] = rpcPerform("${__mfeName__}", "${remoteUrlEndpoint}")
      .then(remote => rpcProcess(remote))
      .catch(err => {
        console.error('======== TPD_REMOTES_IMPORTER - MODULE FEDERATION ERROR =============');
        console.error('${__mfeName__} not loaded');
        console.error('=====================');
        return {
          get: () => null,
          init: () => null
        };
      })

    window["__remotes__"]["${__mfeName__}"].then(resolveImportFunc);
  })
  `;
}

function initWebpackLoadRemoteClientSide(
  envConfig: TENV_CONFIG_MANAGER
): TwebpackLoadRemoteClientSide {
  return (__mfeName__: string, module = "./bootstrap") => {
    return async () => {
      if (EnvironmentHelper.isClientSide()) {
        let remoteScriptUrl = envConfig.REMOTES_ENTRIES[__mfeName__].client;
        if (!envConfig.ENV_NAME.match("local")) {
          remoteScriptUrl = new URL(remoteScriptUrl).pathname;
        }
        await ModuleFederationHelper.loadRemoteClientScript(remoteScriptUrl);
        // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
        await __webpack_init_sharing__("default");
        const container = (window as any)[__mfeName__] as any; // or get the container somewhere else

        // Initialize the container, it may provide shared modules
        await container.init(__webpack_share_scopes__.default);
        const factory = await container.get(module);
        const Module = factory();
        return Module;
      } else {
        throw new Error(
          "[initWebpackLoadRemoteClientSide] Can't load the remote Server Side"
        );
      }
    };
  };
}

function loadRemoteClientScript(url: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (!EnvironmentHelper.isClientSide()) {
      reject(
        `[loadRemoteClientScript] Error: Can't load the remote Server Side`
      );
    } else if (!url) {
      reject(`[loadRemoteClientScript] Error: url is not defined ${url}`);
    } else {
      const elementScript = document.querySelector(`head script[src='${url}']`);
      if (elementScript) {
        // it's already loaded
        return resolve(true);
      } else {
        const element = document.createElement("script");
        element.src = url;
        element.type = "text/javascript";
        element.async = true;

        element.onload = () => {
          resolve(true);
        };

        element.onerror = (error) => {
          reject(
            `[loadRemoteClientScript] Error: Loading Remote script\n ${error}`
          );
        };

        document.head.appendChild(element);
      }
    }
  });
}

export const ModuleFederationHelper = {
  EAGER_DEPS,
  NEXT_EAGER_DEPS: [
    EAGER_DEPS.COMMON_LIBS, // TODO - need to test if it works
    EAGER_DEPS.EMOTION_STYLED,
    EAGER_DEPS.EMOTION_REACT,
    EAGER_DEPS.EMOTION_CACHE,
  ],
  BASE_REACT_EAGER_DEPS: [
    EAGER_DEPS.COMMON_LIBS,
    EAGER_DEPS.REACT,
    EAGER_DEPS.REACT_DOM,
    EAGER_DEPS.EMOTION_STYLED,
    EAGER_DEPS.EMOTION_REACT,
    EAGER_DEPS.EMOTION_CACHE,
  ],
  BASE_ANGULAR_EAGER_DEPS: [
    EAGER_DEPS.COMMON_LIBS,
    EAGER_DEPS.ANGULAR_LIBS,
    EAGER_DEPS.ANGULAR_CORE,
    EAGER_DEPS.ANGULAR_COMMON,
    EAGER_DEPS.ANGULAR_COMMON_HTTP,
    EAGER_DEPS.ANGULAR_COMPILER,
    EAGER_DEPS.ANGULAR_PLATFORM_SERVER,
  ],
  buildReactSharedModuleFederationDeps,
  buildAngularSharedModuleFederationDeps,
  buildRemoteModuleFederationConfigs,
  buildRemoteModuleFederationConfig,
  getRemotesFrom,
  buildServerSideRemote,
  buildClientSideRemote,
  initWebpackLoadRemoteClientSide,
  loadRemoteClientScript,
};

declare const __webpack_init_sharing__: any;
declare const __webpack_share_scopes__: any;
