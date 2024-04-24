import { EnvConfigManager } from "./EnvConfigManager";

export const ENV_CONFIG_KEYS = {
  DEPLOY_ENV_NAME: "DEPLOY_ENV_NAME",
  NPM_PACKAGE_VERSION: "npm_package_version",
  NODE_ENV: "NODE_ENV",
};

export const ENV_CONFIG_KEYS_LIST = {
  [ENV_CONFIG_KEYS.DEPLOY_ENV_NAME]: "",
  [ENV_CONFIG_KEYS.NPM_PACKAGE_VERSION]: "",
  [ENV_CONFIG_KEYS.NODE_ENV]: "",
};

export class COMMON_ENV_CONFIG extends EnvConfigManager {
  static get DEPLOY_ENV_NAME() {
    return `${process.env.DEPLOY_ENV_NAME}`;
  }

  static get npm_package_version() {
    return `${process.env.npm_package_version}`;
  }

  static get NODE_ENV() {
    return `${process.env.NODE_ENV}`;
  }
}
