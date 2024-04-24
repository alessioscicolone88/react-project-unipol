import { TENV_CONFIG_MANAGER } from "./EnvConfig.types";

export const MOCK_ENV_CONFIG: TENV_CONFIG_MANAGER = {
  ALL_ENV_NAME_TYPES: {
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
  },
  ALL_ENV_BRANCH_TYPES: {
    MAINTENANCE: "maintenance",
    EVOLUTION: "evolution",
  },
  ENV_BRANCH_TYPE: "maintenance",
  NODE_ENV: "production",
  DEPLOY_ENV_NAME: "local",
  npm_package_version: "1.0.0",
  getRemoteEndpointBy: () => "http://localhost",
  ENV_NAME: "",
  CMS_PROXY_ENDPOINT: "",
  CMS_PROXY_NO_APIC_ENDPOINT: "",
  HOST_ENDPOINT: "",
  REVALIDATE_TOKEN: "",
  REMOTES_ENTRIES: {},
  PRODOTTO_UNICO_ACTIVE: "",
  NETWORK_CONFIG: {
    clientId: "",
    clientSecret: "",
    apiKey: "",
  },
};

describe("EnvConfigManager", () => {
  it("should MOCK_ENV_CONFIG exist", () => {
    expect(MOCK_ENV_CONFIG).toBeDefined();
  });
});
