import {EnvConfigManager} from "@tpd-web-common-libs/nodejs-library";
export default class ENV_CONFIG extends EnvConfigManager{
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