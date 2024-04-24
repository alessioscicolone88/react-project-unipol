import { TENV_CONFIG_MANAGER } from "../../../envConfig";
import { ModuleFederationHelper, WebpackHelper } from "../../../helpers";
import { TMFE_SETTINGS_PROPS } from "../../settings/types";

export type TReactWebpackOptions = {
  mfeSettings: TMFE_SETTINGS_PROPS;
  ENV_CONFIG: TENV_CONFIG_MANAGER;
  PACKAGE: any;
  distPath: string;
  getPackageVersion: () => string;
};

export type TReactWebpackDeps = {
  require: any;
  HtmlWebpackPlugin: any;
  webpackMerge: {
    merge: any;
  };
  webpack: any;
  nodeFetch: () => Promise<any>;
  TerserPlugin: any;
  MiniCssExtractPlugin: any;
};

export function generateReactCommonConfig(
  options: TReactWebpackOptions,
  deps: TReactWebpackDeps
): any {
  const { mfeSettings, PACKAGE, distPath, getPackageVersion } =
    options;

  const { webpack, require } = deps;

  const commonConfig = {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules|dist/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules|dist/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                "@babel/preset-env",
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },
      ],
    },
    plugins: [...WebpackHelper.getPluginsFrom({ webpack })],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      fallback: WebpackHelper.getFallbackFrom({ require }),
    },
  };

  return {
    ...mfeSettings,
    distPath,
    remotePath: "/" + mfeSettings.__mfeName__ + "/",
    config: commonConfig,
    sharedModuleFederationDeps:
      ModuleFederationHelper.buildReactSharedModuleFederationDeps(
        PACKAGE,
        ModuleFederationHelper.BASE_REACT_EAGER_DEPS,
        getPackageVersion
      ),
  };
}
