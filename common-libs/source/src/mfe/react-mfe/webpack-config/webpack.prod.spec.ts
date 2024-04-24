import {
  MOCK_REACT_WEBPACK_DEPS,
  MOCK_REACT_WEBPACK_OPTIONS,
} from "./webpack.mock.spec";
import { generateWebpackPROD } from "./webpack.prod";

describe("webpack prod", () => {
  // Generates a common config object with default plugins and fallbacks
  it("should generate a common config object with default plugins and fallbacks when options and deps are provided", async () => {
    // Act
    const [clientResult, serverResult] = await generateWebpackPROD(
      {
        ...MOCK_REACT_WEBPACK_OPTIONS,
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
          getRemoteEndpointBy: () => "https://www.unipolsai.it",
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
      },
      MOCK_REACT_WEBPACK_DEPS
    );

    expect(clientResult.target).toBe("web");
    expect(clientResult.output.uniqueName).toBe(
      "tpdCtaAreaRiservataReactProdClient"
    );
    expect(clientResult.output.publicPath).toBe(
      "/primary-remotes/tpdCtaAreaRiservata/client/"
    );
    expect(clientResult.output.clean).toBe(true);
    expect(clientResult.output.asyncChunks).not.toBeDefined();
    expect(clientResult.plugins.length).toBe(2);

    expect(serverResult.target).toBe("async-node");
    expect(serverResult.output.uniqueName).toBe(
      "tpdCtaAreaRiservataReactProdServer"
    );
    expect(serverResult.output.publicPath).toBe(
      "/primary-remotes/tpdCtaAreaRiservata/server/"
    );
    expect(serverResult.output.clean).toBe(true);
    expect(serverResult.output.asyncChunks).toBe(false);
    expect(serverResult.plugins.length).toBe(2);
  });
});
