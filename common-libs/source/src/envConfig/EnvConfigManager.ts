import {
  TALL_ENV_CONFIG,
  TENV_CONFIG,
  TREMOTES_ENTRIES,
} from "./EnvConfig.types";
import DEV_CONFIG from "../../config/envConfig/DEV_CONFIG";
import LOCAL_DEV_CONFIG from "../../config/envConfig/LOCAL_DEV_CONFIG";
import LOCAL_PROD_CONFIG from "../../config/envConfig/LOCAL_PROD_CONFIG";
import PROD_CONFIG from "../../config/envConfig/PROD_CONFIG";
import QA_CONFIG from "../../config/envConfig/QA_CONFIG";
import SIT_CONFIG from "../../config/envConfig/SIT_CONFIG";
import HOTFIX_CONFIG from "../../config/envConfig/HOTFIX_CONFIG";
import { MFE_GENERAL_SETTINGS, MFE_SETTINGS } from "../mfe/mfeSettings";
import { __isEvoEnvBy } from "../../config/envConfig/shared/EvoConfigHelper";

export class EnvConfigManager {
  static ALL_ENV_NAME_TYPES = {
    // local envs
    LOCAL_DEVELOPMENT: "local_development",
    LOCAL_PRODUCTION: "local_production",
    LOCAL_TEST: "local_test",
    // NO-PROD envs
    DEVELOPMENT: "development",
    INTEGRATION: "integration",
    HOTFIX: "hotfix",
    QUALITY: "quality",
    // PROD envs
    PRODUCTION: "production",
  };

  static ALL_ENV_BRANCH_TYPES = {
    MAINTENANCE: "maintenance",
    EVOLUTION: "evolution",
  };

  static get config() {
    let environment = this.ALL_ENV_NAME_TYPES.PRODUCTION; // DEFAULT for PROD ENVS
    if (
      this.NODE_ENV != "test" &&
      !!typeof window &&
      typeof window !== "undefined"
    ) {
      environment =
        {
          localhost: `local_${this.NODE_ENV}`,
          "dev.unipolsai.it": this.ALL_ENV_NAME_TYPES.DEVELOPMENT,
          "sit.unipolsai.it": this.ALL_ENV_NAME_TYPES.INTEGRATION,
          "qa.unipolsai.it": this.ALL_ENV_NAME_TYPES.QUALITY,
          "fix.unipolsai.it": this.ALL_ENV_NAME_TYPES.HOTFIX,
          "unipolsai.it": this.ALL_ENV_NAME_TYPES.PRODUCTION,
          "www.unipolsai.it": this.ALL_ENV_NAME_TYPES.PRODUCTION,
          "authoring-inte.unipolsai.it": this.ALL_ENV_NAME_TYPES.INTEGRATION,
          "authoring-svil.unipolsai.it": this.ALL_ENV_NAME_TYPES.DEVELOPMENT,
          "authoring-coll.unipolsai.it": this.ALL_ENV_NAME_TYPES.QUALITY,
          "authoring.unipolsai.it": this.ALL_ENV_NAME_TYPES.PRODUCTION,
          "svil.unipolsai.it": this.ALL_ENV_NAME_TYPES.DEVELOPMENT,
          "inte.unipolsai.it": this.ALL_ENV_NAME_TYPES.INTEGRATION,
          "coll.unipolsai.it": this.ALL_ENV_NAME_TYPES.QUALITY,
          "evo-dev.unipolsai.it": this.ALL_ENV_NAME_TYPES.DEVELOPMENT,
          "evo-sit.unipolsai.it": this.ALL_ENV_NAME_TYPES.INTEGRATION,
        }[window.location.hostname] || environment;
    } else if (this.isEnvConfigAvailableBy(this.DEPLOY_ENV_NAME)) {
      environment = this.DEPLOY_ENV_NAME;
    } else if (this.DEPLOY_ENV_NAME === "local") {
      environment = `local_${this.NODE_ENV}`;
    } else if (
      this.npm_package_version &&
      this.npm_package_version.includes("-SNAPSHOT")
    ) {
      environment = this.ALL_ENV_NAME_TYPES.DEVELOPMENT;
    }

    return this.ALL_ENV_CONFIG[environment];
  }

  static get ALL_ENV_CONFIG(): TALL_ENV_CONFIG {
    return {
      [this.ALL_ENV_NAME_TYPES.LOCAL_DEVELOPMENT]: LOCAL_DEV_CONFIG,
      [this.ALL_ENV_NAME_TYPES.LOCAL_PRODUCTION]: LOCAL_PROD_CONFIG,
      [this.ALL_ENV_NAME_TYPES.LOCAL_TEST]: LOCAL_DEV_CONFIG,
      [this.ALL_ENV_NAME_TYPES.DEVELOPMENT]: DEV_CONFIG,
      [this.ALL_ENV_NAME_TYPES.INTEGRATION]: SIT_CONFIG,
      [this.ALL_ENV_NAME_TYPES.QUALITY]: QA_CONFIG,
      [this.ALL_ENV_NAME_TYPES.HOTFIX]: HOTFIX_CONFIG,
      [this.ALL_ENV_NAME_TYPES.PRODUCTION]: PROD_CONFIG,
    };
  }

  static get ENV_NAME(): string {
    return this.config.ENV_NAME;
  }

  static get CMS_PROXY_ENDPOINT(): string {
    return this.config.CMS_PROXY_ENDPOINT;
  }

  static get CMS_PROXY_NO_APIC_ENDPOINT(): string {
    return this.config.CMS_PROXY_NO_APIC_ENDPOINT;
  }

  static get HOST_ENDPOINT(): string {
    return this.config.HOST_ENDPOINT;
  }

  static get ENV_BRANCH_TYPE(): string {
    return __isEvoEnvBy()
      ? this.ALL_ENV_BRANCH_TYPES.EVOLUTION
      : this.ALL_ENV_BRANCH_TYPES.MAINTENANCE;
  }

  static getRemoteEndpointBy(mfeType: string): string {
    let remoteEndpoint = "";
    const { localProdPort, basePath } = MFE_GENERAL_SETTINGS[mfeType];
    switch (this.ENV_NAME) {
      case this.ALL_ENV_NAME_TYPES.LOCAL_DEVELOPMENT:
        remoteEndpoint = `http://localhost`;
        break;
      case this.ALL_ENV_NAME_TYPES.LOCAL_PRODUCTION:
        remoteEndpoint = `http://localhost:${localProdPort}/${basePath}`;
        break;
      default:
        remoteEndpoint = `${this.HOST_ENDPOINT}/${basePath}`;
        break;
    }
    return remoteEndpoint;
  }

  static get REVALIDATE_TOKEN(): TENV_CONFIG["REVALIDATE_TOKEN"] {
    return this.config.REVALIDATE_TOKEN;
  }

  static get REMOTES_ENTRIES(): TREMOTES_ENTRIES {
    let remotesEntries = {};
    switch (this.ENV_NAME) {
      case this.ALL_ENV_NAME_TYPES.LOCAL_DEVELOPMENT:
        remotesEntries = Object.values(MFE_SETTINGS).reduce(
          (acc, mfeSettings) => {
            const remoteEndpoint = this.getRemoteEndpointBy(mfeSettings.type);

            let clientPort;
            let serverPort;
            if (mfeSettings.devClientPort === mfeSettings.devServerPort) {
              clientPort = `${mfeSettings.devClientPort}/client`;
              serverPort = `${mfeSettings.devServerPort}/server`;
            } else {
              clientPort = mfeSettings.devClientPort;
              serverPort = mfeSettings.devServerPort;
            }

            return {
              ...acc,
              [mfeSettings.__mfeName__]: {
                client: `${remoteEndpoint}:${clientPort}/remoteEntry.js`,
                server: `${remoteEndpoint}:${serverPort}/remoteEntry.js`,
              },
            };
          },
          {}
        );
        break;
      case this.ALL_ENV_NAME_TYPES.LOCAL_PRODUCTION:
        remotesEntries = Object.values(MFE_SETTINGS).reduce(
          (acc, mfeSettings) => {
            const remoteEndpoint =
              this.getRemoteEndpointBy(mfeSettings.type) || "";

            return {
              ...acc,
              [mfeSettings.__mfeName__]: {
                client: `${remoteEndpoint}/${mfeSettings.__mfeName__}/client/remoteEntry.js`,
                server: `${remoteEndpoint}/${mfeSettings.__mfeName__}/server/remoteEntry.js`,
              },
            };
          },
          {}
        );
        break;
      default:
        remotesEntries = Object.values(MFE_SETTINGS).reduce(
          (acc, mfeSettings) => {
            const remoteEndpoint = this.getRemoteEndpointBy(mfeSettings.type);

            return {
              ...acc,
              [mfeSettings.__mfeName__]: {
                client: `${remoteEndpoint}/${mfeSettings.__mfeName__}/client/remoteEntry.js`,
                server: `${remoteEndpoint}/${mfeSettings.__mfeName__}/server/remoteEntry.js`,
              },
            };
          },
          {}
        );
        break;
    }
    return remotesEntries;
  }

  static get PRODOTTO_UNICO_ACTIVE(): TENV_CONFIG["PRODOTTO_UNICO_ACTIVE"] {
    return this.config.PRODOTTO_UNICO_ACTIVE;
  }

  static get NETWORK_CONFIG(): TENV_CONFIG["NETWORK_CONFIG"] {
    return this.config.NETWORK_CONFIG;
  }

  static get DEPLOY_ENV_NAME(): string {
    throw new Error("method DEPLOY_ENV_NAME not defined");
  }

  static get npm_package_version(): string {
    throw new Error("method npm_package_version not defined");
  }

  static get NODE_ENV(): string {
    throw new Error("method NODE_ENV not defined");
  }

  static isEnvConfigAvailableBy(configKey: string | null | undefined) {
    return (
      configKey &&
      Object.keys(this.ALL_ENV_CONFIG).findIndex((key) => key === configKey) >
        -1
    );
  }
}
