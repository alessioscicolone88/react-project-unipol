import { MFE_NAMES } from "../../mfeSettings";
import { TReactWebpackDeps, TReactWebpackOptions } from "./webpack.common";

class EnvironmentPlugin {
  constructor() {
    // do nothing
  }
}

class ProvidePlugin {
  constructor() {
    // do nothing
  }
}

class ModuleFederationPlugin {
  constructor() {
    // do nothing
  }
}

class webpack {
  static EnvironmentPlugin: typeof EnvironmentPlugin;
  static ProvidePlugin: typeof ProvidePlugin;
  static container: { ModuleFederationPlugin: typeof ModuleFederationPlugin };
  constructor() {
    // do nothing
  }
}

class HtmlWebpackPlugin {
  constructor() {
    // do nothing
  }
}

class MiniCssExtractPlugin {
  constructor() {
    // do nothing
  }
}

webpack.EnvironmentPlugin = EnvironmentPlugin;
webpack.ProvidePlugin = ProvidePlugin;
webpack.container = {
  ModuleFederationPlugin,
};

export const MOCK_REACT_WEBPACK_DEPS: TReactWebpackDeps = {
  webpack,
  require: {
    resolve: jest.fn(),
  },
  webpackMerge: {
    merge: (a: any, b: any) => ({ ...a, ...b }),
  },
  TerserPlugin: jest.fn(),
  nodeFetch: jest.fn().mockReturnValue({
    default: null,
  }),
  HtmlWebpackPlugin,
  MiniCssExtractPlugin,
};

export const MOCK_REACT_WEBPACK_OPTIONS: TReactWebpackOptions = {
  mfeSettings: {
    __mfeName__: MFE_NAMES.tpdCtaAreaRiservata,
    type: "primary",
    devServerPort: 8000,
    devClientPort: 8000,
  },
  PACKAGE: {
    dependencies: {
      react: "18.0.0",
    },
  },
  distPath: "./dist",
  getPackageVersion: () => "1.0.0",
  ENV_CONFIG: {
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
  },
};

describe("WEBPACK MOCK", () => {
  it("test mock existance", () => {
    expect(MOCK_REACT_WEBPACK_DEPS).toBeDefined();
    expect(MOCK_REACT_WEBPACK_OPTIONS).toBeDefined();
  });
});
