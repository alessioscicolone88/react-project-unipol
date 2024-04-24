import { EnvironmentHelper } from "./environment.helper";

export const ConsoleHelper = {
  log(...attrs: any) {
    if (
      (EnvironmentHelper.isLocalEnvironment() &&
        !EnvironmentHelper.isRunningTest()) ||
      this.isClientLogsEnabled()
    ) {
      console.log(...attrs);
    }
  },
  info(...attrs: any) {
    if (
      (!EnvironmentHelper.isProductionEnvironment() &&
        !EnvironmentHelper.isRunningTest()) ||
      this.isClientLogsEnabled()
    ) {
      console.info(...attrs);
    }
  },
  warn(...attrs: any) {
    if (
      (!EnvironmentHelper.isProductionEnvironment() &&
        !EnvironmentHelper.isRunningTest()) ||
      this.isClientLogsEnabled()
    ) {
      console.warn(...attrs);
    }
  },
  error(...attrs: any) {
    if (!EnvironmentHelper.isRunningTest() || this.isClientLogsEnabled()) {
      console.error(...attrs);
    }
  },
  isClientLogsEnabled() {
    return (
      EnvironmentHelper.isClientSide() &&
      "isClientLogsEnabled" in window &&
      !!(window as any).isClientLogsEnabled
    );
  },
};
