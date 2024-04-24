import { generateWebpackDEV } from "./webpack.dev";
import {
  MOCK_REACT_WEBPACK_DEPS,
  MOCK_REACT_WEBPACK_OPTIONS,
} from "./webpack.mock.spec";

describe("webpack dev", () => {
  // Generates a common config object with default plugins and fallbacks
  it("should generate a common config object with default plugins and fallbacks when options and deps are provided", async () => {
    // Act
    const [clientResult, serverResult] = await generateWebpackDEV(
      MOCK_REACT_WEBPACK_OPTIONS,
      MOCK_REACT_WEBPACK_DEPS
    );

    expect(clientResult.target).toBe("web");
    expect(clientResult.output.uniqueName).toBe(
      "tpdCtaAreaRiservataReactDevClient"
    );
    expect(clientResult.output.publicPath).toBe(
      "http://localhost:8000/client/"
    );
    expect(clientResult.output.clean).toBe(true);
    expect(clientResult.output.asyncChunks).not.toBeDefined();
    expect(clientResult.plugins.length).toBe(2);

    expect(serverResult.target).toBe("async-node");
    expect(serverResult.output.uniqueName).toBe(
      "tpdCtaAreaRiservataReactDevServer"
    );
    expect(serverResult.output.publicPath).toBe(
      "http://localhost:8000/server/"
    );
    expect(serverResult.output.clean).toBe(true);
    expect(serverResult.output.asyncChunks).toBe(false);
    expect(serverResult.plugins.length).toBe(1);
  });
});
