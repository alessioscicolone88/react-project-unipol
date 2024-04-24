import { WebpackHelper } from "../../../helpers";
import { generateReactCommonConfig } from "./webpack.common";
import {
  MOCK_REACT_WEBPACK_DEPS,
  MOCK_REACT_WEBPACK_OPTIONS,
} from "./webpack.mock.spec";

describe("webpack common", () => {
  // Generates a common config object with default plugins and fallbacks
  it("should generate a common config object with default plugins and fallbacks when options and deps are provided", () => {
    // Act
    const commonConfig = generateReactCommonConfig(
      MOCK_REACT_WEBPACK_OPTIONS,
      MOCK_REACT_WEBPACK_DEPS
    );

    // Assert
    expect(commonConfig.config.plugins).toEqual(
      WebpackHelper.getPluginsFrom({
        webpack: MOCK_REACT_WEBPACK_DEPS.webpack,
      })
    );
    expect(commonConfig.config.resolve.fallback).toEqual(
      WebpackHelper.getFallbackFrom({
        require: MOCK_REACT_WEBPACK_DEPS.require,
      })
    );
  });
});
