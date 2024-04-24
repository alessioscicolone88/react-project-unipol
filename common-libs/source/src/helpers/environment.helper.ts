import { COMMON_ENV_CONFIG } from "../envConfig";

export const EnvironmentHelper = {
  isClientSide() {
    return (
      typeof window === "object" &&
      window != null &&
      typeof document === "object" &&
      document != null
    );
  },
  isServerSide() {
    return !EnvironmentHelper.isClientSide();
  },
  isLocalDevelopmentEnvironment() {
    return COMMON_ENV_CONFIG.ENV_NAME === "local_development";
  },
  isLocalProductionEnvironment() {
    return COMMON_ENV_CONFIG.ENV_NAME === "local_production";
  },
  isProductionEnvironment() {
    return COMMON_ENV_CONFIG.ENV_NAME === "production";
  },
  isLocalEnvironment() {
    return (
      this.isLocalDevelopmentEnvironment() ||
      this.isLocalProductionEnvironment()
    );
  },
  isRunningTest() {
    return COMMON_ENV_CONFIG.NODE_ENV === "test";
  },
};
