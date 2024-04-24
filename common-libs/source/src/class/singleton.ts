import { EnvironmentHelper } from "../helpers/environment.helper";

const UNIPOLSAI_INSTANCES_KEY = "__UNIPOLSAI_INSTANCES__" as any;

export class Singleton {
  static _instance: any;

  static className = "Singleton";

  static getInstance() {
    if (
      EnvironmentHelper.isClientSide() &&
      !EnvironmentHelper.isRunningTest()
    ) {
      const className = this.className as any;
      if (!window[UNIPOLSAI_INSTANCES_KEY]) {
        window[UNIPOLSAI_INSTANCES_KEY] = {} as any;
      }
      if (!!window[UNIPOLSAI_INSTANCES_KEY][className]) {
        return window[UNIPOLSAI_INSTANCES_KEY][className] as any;
      } else {
        window[UNIPOLSAI_INSTANCES_KEY][className] = new this() as any;
        return window[UNIPOLSAI_INSTANCES_KEY][className] as any;
      }
    } else if (!!this._instance) {
      return this._instance;
    } else {
      this._instance = new this();
      return this._instance;
    }
  }
}
