import {
  getWebComponentMFENameBy,
  generateChildrenRemotesDependencies,
} from "../../utils";
import {
  TReactClientRenderDeps,
  TReactDeps,
  TReactRemoteDependency,
  TReactServerRenderDeps,
} from "./types";
import {
  TClientSideOptions,
  TClientSideRoot,
  TProps,
  TRemote,
  TImportMFE,
  TServerSideRemote,
} from "../common-mfe/types/general.types";
import {
  TRemoteDependenciesMap,
  TChildrenRemoteDeps,
} from "../common-mfe/types/remote.types";
import { CommonMFE } from "../../main";
import { ConsoleHelper } from "../../helpers/Console.helper";
import { initializeComponent } from "../common-mfe";

export function clientSideMountFactory(
  { createRoot, hydrateRoot, createElement }: TReactClientRenderDeps,
  App: any,
  roots: TClientSideRoot
) {
  return (el: HTMLElement, props: TProps, options: TClientSideOptions = {}) => {
    return new Promise((resolve, reject) => {
      const { isMounting = false } = options;
      const { id, __serverSideHtml__ } = props;
      if (isMounting) {
        if (__serverSideHtml__) {
          roots[id] = hydrateRoot(el, createElement(App, props), {
            identifierPrefix: id,
            onRecoverableError: () => {
              // do nothing
            },
          });
        } else {
          roots[id] = createRoot(el, { identifierPrefix: id });
          roots[id].render(createElement(App, props));
        }
        resolve({});
      } else if (id in roots && typeof roots[id].render === "function") {
        roots[id].render(createElement(App, props));
        resolve({});
      } else {
        reject(
          new Error(
            `[Client Side Mount] Error: Cannot update a not mounted component`
          )
        );
      }
    });
  };
}

export function clientSideUnmountFactory(roots: TClientSideRoot) {
  return (_: any, props: TProps) => {
    const { id } = props;
    return new Promise((resolve) => {
      if (!!id && !!roots[id]) {
        roots[id].unmount();
        delete roots[id];
      }
      resolve({});
    });
  };
}

export function useDisableEditContent(
  { useEffect }: any = {},
  ref: any,
  parentId: string,
  name?: string
) {
  useEffect(() => {
    if (window) {
      const handleInlineRichText = (event: any) => {
        const editModeSettingsIconColl = document.getElementsByClassName(
          "edit-mode-settings-icon"
        ) as HTMLCollectionOf<HTMLDivElement>;
        const editModeDeleteIconColl = document.getElementsByClassName(
          "edit-mode-delete-icon"
        ) as HTMLCollectionOf<HTMLDivElement>;
        const boilerPlateColl = document.getElementsByClassName(
          "boilerplate-container "
        ) as HTMLCollectionOf<HTMLDivElement>;
      };

      // Remove event listener when the component unmounts
      return () => {

      };
    }
  }, []);
}

export function getAllRemoteDependenciesFrom(
  childrenRemoteDeps: TChildrenRemoteDeps = {},
  containerProps: TProps
): TReactRemoteDependency[] {
  return Object.entries(childrenRemoteDeps)
    .map(([__mfeName__, { getRemoteDependencies }]) => {
      try {
        return getRemoteDependencies && getRemoteDependencies(containerProps);
      } catch (error) {
        return null;
      }
    })
    .flat()
    .filter((el) => !!el) as TReactRemoteDependency[];
}

export function serverSideMountFactory(
  { renderToString, createElement }: TReactServerRenderDeps,
  Component: any,
  childrenRemoteDeps: TChildrenRemoteDeps = {}
) {
  return (props: TProps) => {
    const allRemoteDependencies: TReactRemoteDependency[] =
      getAllRemoteDependenciesFrom(childrenRemoteDeps, props);
    return importReactRemote(props, allRemoteDependencies).then(
      (newProps: TProps) => {
        const html: string = renderToString(createElement(Component, newProps));
        return { html };
      }
    );
  };
}

export function initializeWebComponent(
  __mfeName__: string,
  clientSideMount: any,
  childrenRemoteDeps: TChildrenRemoteDeps = {}
) {
  const selector = getWebComponentMFENameBy(__mfeName__);
  return initializeComponent(
    selector,
    __mfeName__,
    clientSideMount,
    childrenRemoteDeps
  );
}

// Used served side only
export function importReactRemote(
  props: TProps,
  allRemoteDependencies: TReactRemoteDependency[] = []
) {
  const importMFE: TImportMFE = CommonMFE.importMFEFactory(props);

  const childrenRemotesDependencies = generateChildrenRemotesDependencies(
    allRemoteDependencies
  );
  return Promise.allSettled(
    Object.entries(childrenRemotesDependencies).map(
      ([remoteName, remoteDependenciesMap]) => {
        return importMFE(remoteName).then((remote: TRemote | null) => {
          return renderMFE(remoteDependenciesMap, importMFE, remote);
        });
      }
    )
  ).then(() => props);
}

export function renderMFE(
  remoteDependenciesMap: TRemoteDependenciesMap,
  importMFE: any,
  remote: TRemote | null = null
) {
  return Promise.allSettled(
    Object.entries(remoteDependenciesMap).map(([_, remoteDependency]) => {
      const { props: remoteProps } = remoteDependency as TReactRemoteDependency;
      return (remote as TServerSideRemote)
        .serverSideMount({
          ...remoteProps,
          __host__: { importMFEBy: importMFE },
        })
        .then((module: any) => {
          remoteProps.__serverSideHtml__ = module.html.replaceAll("\x3C", "<");
        });
    })
  );
}

export function bootstrapClient(
  __ReactDeps__: TReactClientRenderDeps,
  __mfeName__: string,
  App: any
) {
  const roots: TClientSideRoot = {};
  return {
    __mfeName__,
    clientSideMount: clientSideMountFactory(__ReactDeps__, App, roots),
    clientSideUnmount: clientSideUnmountFactory(roots),
  };
}

export function bootstrapServer(
  __ReactDeps__: TReactServerRenderDeps,
  __mfeName__: string,
  App: any,
  childrenRemoteDeps: TChildrenRemoteDeps = {}
) {
  return {
    __mfeName__,
    serverSideMount: serverSideMountFactory(
      __ReactDeps__,
      App,
      childrenRemoteDeps
    ),
    childrenRemoteDeps,
  };
}

export function LazyLoadingFactory(
  { useEffect, useState, createElement }: TReactDeps,
  importFunc: () => Promise<any>
) {
  return (props: any) => {
    const [Component, setComponent] = useState(
      () => () => createElement("div", {}, "Loading...")
    );

    useEffect(() => {
      importFunc()
        .then((res: any) => {
          setComponent(() => res.default);
        })
        .catch((err: any) => {
          ConsoleHelper.error(err);
        });
    }, []);

    return createElement(Component, props);
  };
}
