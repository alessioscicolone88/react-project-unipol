import {
  ConsoleHelper,
  EnvironmentHelper,
  ModuleFederationHelper,
  TwebpackLoadRemoteClientSide,
} from "../helpers";
import { Helpers, TENV_CONFIG_MANAGER } from "../main";
import { MFE_NAMES, MFE_SETTINGS } from "../mfe";

import {
  TClientSideRemote,
  TExecImportRemoteEntry,
  TRemote,
  TServerSideRemote,
} from "../mfe/common-mfe/types/general.types";

import {
  TChildrenRemoteDeps,
  TRemotesMap,
} from "../mfe/common-mfe/types/remote.types";

import { RemotesImporterService } from "./RemotesImporter.service";

type TClientRemoteImportMap = {
  import: () => any;
};

export class RemoteService extends RemotesImporterService {
  static className = "RemoteService";
  remotesMap: TRemotesMap;
  isInitialized: boolean;
  waitingList: any[];
  MAX_ATTEMPTS = Helpers.EnvironmentHelper.isLocalEnvironment() ? 1 : 3;

  constructor() {
    super();
    this.isInitialized = false;
    this.remotesMap = {};
    this.waitingList = [];
  }

  initRemotesMapOnlyClient(ENV_CONFIG: TENV_CONFIG_MANAGER): void {
    const mfeNames = Object.values(MFE_NAMES);
    return this.initRemotesMapOnlyClientSideByMfeNames(
      mfeNames,
      ModuleFederationHelper.initWebpackLoadRemoteClientSide(ENV_CONFIG)
    );
  }

  initRemotesMapOnlyClientSideByMfeNames(
    mfeNames: string[],
    webpackLoadRemoteClientSide: TwebpackLoadRemoteClientSide
  ): void {
    const newRemoteMap = this.getRemotesMapOnlyClientSideFromMfeNamesList(
      mfeNames,
      webpackLoadRemoteClientSide
    );
    return this.initRemotesMap(newRemoteMap);
  }

  getRemotesMapOnlyClientSideFromMfeNamesList(
    mfeNames: string[],
    webpackLoadRemoteClientSide: TwebpackLoadRemoteClientSide
  ): TRemotesMap {
    return mfeNames.reduce((acc, mfeName) => {
      const remotes = this.getRemotesMapOnlyClientSideFromMfeName(
        mfeName,
        webpackLoadRemoteClientSide
      );
      return {
        ...acc,
        ...remotes,
      };
    }, {});
  }

  getRemotesMapOnlyClientSideFromMfeName(
    __mfeName__: string,
    webpackLoadRemoteClientSide: TwebpackLoadRemoteClientSide
  ) {
    return {
      [__mfeName__]: this.getRemoteMapOnlyClientSide(
        __mfeName__,
        webpackLoadRemoteClientSide
      ),
    };
  }

  getRemoteMapOnlyClientSide(
    __mfeName__: string,
    webpackLoadRemoteClientSide: TwebpackLoadRemoteClientSide
  ): TClientRemoteImportMap {
    return {
      import: webpackLoadRemoteClientSide(__mfeName__),
    };
  }

  initRemotesMap(newRemoteMap: TRemotesMap = {}) {
    if (!this.isInitialized) {
      this.remotesMap = newRemoteMap;
      this.isInitialized = true;
    }
    this.waitingList.forEach((resolveInstance) => resolveInstance());
    this.waitingList = [];
  }

  resetRemotesMap() {
    this.remotesMap = {};
    this.isInitialized = false;
  }

  afterInitialized(): Promise<void> {
    return new Promise((resolve) => {
      if (this.isInitialized) {
        resolve();
      } else {
        this.waitingList.push(resolve);
      }
    });
  }

  updateChildrenDependencies(
    ContainerMfeName: string,
    newChildrenRemoteDeps: TChildrenRemoteDeps
  ) {
    if (this.remotesMap[ContainerMfeName]) {
      this.remotesMap[ContainerMfeName].childrenRemoteDeps =
        newChildrenRemoteDeps;
    }
  }

  isAvailableRemote(__mfeName__: string | null | undefined) {
    return __mfeName__ && __mfeName__ in this.remotesMap;
  }

  getRemote(__mfeName__: string, isClientSideImport: boolean): TRemote | null {
    let remote;
    if (this.isAvailableRemote(__mfeName__)) {
      if (
        isClientSideImport &&
        "clientSideRemote" in this.remotesMap[__mfeName__]
      ) {
        remote = this.remotesMap[__mfeName__].clientSideRemote;
      } else if (
        !isClientSideImport &&
        "serverSideRemote" in this.remotesMap[__mfeName__]
      ) {
        remote = this.remotesMap[__mfeName__].serverSideRemote;
      }
    }
    return remote || null;
  }

  setRemote(remote: TRemote, isClientSideImport: boolean) {
    this.remotesMap[remote.__mfeName__].execImport = undefined;
    if (isClientSideImport) {
      this.remotesMap[remote.__mfeName__].clientSideRemote =
        remote as TClientSideRemote;
    } else {
      this.remotesMap[remote.__mfeName__].serverSideRemote =
        remote as TServerSideRemote;
    }
  }

  getExecImport(__mfeName__: string): TExecImportRemoteEntry | undefined {
    return this.remotesMap[__mfeName__].execImport;
  }
  setExecImport(__mfeName__: string, execPromise: TExecImportRemoteEntry) {
    this.remotesMap[__mfeName__].execImport = execPromise;
  }

  isAlreadyImported(
    componentName: string,
    isClientSideImport: boolean
  ): boolean {
    const remote = this.getRemote(componentName, isClientSideImport);
    return !!remote && remote.__mfeName__ === componentName;
  }

  getPagesFromTotalItems(totalItems: string): number {
    return Math.ceil(parseInt(totalItems) / 10);
  }

  async dynamicImportClientSideMFE(__mfeName__: string) {
    return this.dynamicImportMFE(__mfeName__, true);
  }

  dynamicImportServerSideMFE(__mfeName__: string) {
    return this.dynamicImportMFE(__mfeName__, false);
  }

  /**
   * Recupera la prioriorità del microFE
   * @param __mfeName__ Nome del microFE di cui generare la priorità
   * @param isClientSideImport Flag discriminante per l'import client side
   * @private
   */
  public getMfePriority(
    __mfeName__: string,
    isClientSideImport: boolean
  ): number {
    let priority = 0;
    if (MFE_SETTINGS[__mfeName__]) {
      const settings = MFE_SETTINGS[__mfeName__];
      /*
       * Se il remote è già stato importato allora la sua priorità rispetto ai remotes mai importati senza priorità è più alta,
       * Se il remote ha una priorità avrà sempre priorità superiore ad un widget già importato senza priorità
       */
      priority =
        (this.isAlreadyImported(__mfeName__, isClientSideImport) ||
        settings.mfePriority !== undefined
          ? this.MfeAlreadyImportedBasePriority
          : 0) + (settings.mfePriority ?? 0);
    }
    return priority;
  }

  dynamicImportMFE(__mfeName__: string, isClientSideImport = false) {
    return new Promise((resolve, reject) => {
      if (this.isAvailableRemote(__mfeName__)) {
        if (this.isAlreadyImported(__mfeName__, isClientSideImport)) {
          ConsoleHelper.info(
            "[RemoteService] dynamicImportMFE with already imported of ",
            __mfeName__
          );
          resolve(this.getRemote(__mfeName__, isClientSideImport));
        } else {
          ConsoleHelper.info(
            "[RemoteService] dynamicImportMFE with a NEW remote of ",
            __mfeName__
          );
          this.addInExecQueue({
            __mfeName__,
            isClientSideImport,
            resolve,
            reject,
            priority: this.getMfePriority(__mfeName__, isClientSideImport),
          });
        }
      } else {
        reject(`MFE with name ${__mfeName__} is not defined in REMOTES_MAP!`);
      }
    });
  }

  async importRemoteBy(__mfeName__: string, attempts = 1): Promise<any> {
    let remote;

    try {
      ConsoleHelper.info(
        `[importRemoteBy] [${__mfeName__}] Importing `,
        __mfeName__
      );
      const remoteJS = await this.remotesMap[__mfeName__].import();
      ConsoleHelper.info(
        `[importRemoteBy] [${__mfeName__}] DONE - Importing `,
        __mfeName__
      );

      if (remoteJS) {
        if (remoteJS.default && "__mfeName__" in remoteJS.default) {
          if (remoteJS.default.__mfeName__ === __mfeName__) {
            remote = remoteJS.default;
          } else {
            throw new Error(
              `[importRemoteBy] [${__mfeName__}] Error: Mismatch with requested mfeName ${__mfeName__} and the returned mfeName ${
                remoteJS.default.__mfeName__
              } with RemoteJS ${JSON.stringify(remoteJS.default || {})}`
            );
          }
        } else {
          throw new Error(
            `[importRemoteBy] [${__mfeName__}] Error: exporting RemoteJS default of ${__mfeName__} is ${JSON.stringify(
              remoteJS.default || {}
            )}`
          );
        }
      } else {
        throw new Error(
          `[importRemoteBy] [${__mfeName__}] Error: import RemoteJS of ${__mfeName__} is ${remoteJS}`
        );
      }
    } catch (error) {
      if (
        attempts <= this.MAX_ATTEMPTS &&
        !`${error}`.match(/Container missing/)
      ) {
        ConsoleHelper.error(
          `[importRemoteBy] [${__mfeName__}] Error attempts ${attempts}`,
          error
        );
        await new Promise((res) => {
          const waitingTime = EnvironmentHelper.isRunningTest()
            ? 100
            : 500 * attempts;
          ConsoleHelper.info(
            `[importRemoteBy] [${__mfeName__}] Waiting `,
            waitingTime,
            "ms"
          );
          setTimeout(res, waitingTime);
        });
      } else {
        throw error;
      }
    }

    if (!remote) {
      return this.importRemoteBy(__mfeName__, attempts + 1);
    } else {
      ConsoleHelper.info("[importRemoteBy] SUCCESS - Importing ", __mfeName__);
      return remote;
    }
  }

  dynamicImportAllMFE(mfeNames: string[] = [], isClientSideImport = false) {
    return Promise.allSettled(
      mfeNames.map((__mfeName__) =>
        this.dynamicImportMFE(__mfeName__, isClientSideImport)
      )
    );
  }
}
