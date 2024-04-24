import { ConsoleHelper, ModuleFederationHelper } from "../../../helpers";
import { MFE_GENERAL_SETTINGS, Polyfills } from "../../../main";
import {
  TReactWebpackDeps,
  TReactWebpackOptions,
  generateReactCommonConfig,
} from "./webpack.common";

export async function generateWebpackPROD(
  options: TReactWebpackOptions,
  deps: TReactWebpackDeps
) {
  const { ENV_CONFIG } = options;

  const {
    webpack: {
      container: { ModuleFederationPlugin },
    },
    TerserPlugin,
    MiniCssExtractPlugin,
    webpackMerge: { merge },
    nodeFetch,
  } = deps;

  const common = generateReactCommonConfig(options, deps);

  const prodCommonConfig = merge(common.config, {
    devtool: "source-map",
    mode: "production",
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: "async",
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.sa?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
  });

  await Polyfills.fetchNodePolyfill(nodeFetch);

  const { clientConfig, serverConfig } =
    ModuleFederationHelper.buildRemoteModuleFederationConfigs(
      common.__mfeName__,
      common.sharedModuleFederationDeps(),
      ENV_CONFIG
    );

  const publicBasePath = !!ENV_CONFIG.ENV_NAME.match("local")
    ? ENV_CONFIG.getRemoteEndpointBy(common.type)
    : "/" + MFE_GENERAL_SETTINGS[common.type].basePath;

  const prodClientConfig = merge(prodCommonConfig, {
    target: "web",
    entry: {
      main: "./src/index",
    },
    output: {
      uniqueName: common.__mfeName__ + "ReactProdClient",
      filename: "[name].js",
      path: common.distPath + common.remotePath + "client",
      publicPath: `${publicBasePath}${common.remotePath}client/`,
      clean: true,
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new ModuleFederationPlugin(clientConfig),
    ],
  });

  const prodServerConfig = merge(prodCommonConfig, {
    target: "async-node",
    output: {
      uniqueName: common.__mfeName__ + "ReactProdServer",
      path: common.distPath + common.remotePath + "server",
      publicPath: `${publicBasePath}${common.remotePath}server/`,
      clean: true,
      asyncChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin(serverConfig),
      new MiniCssExtractPlugin(),
    ],
  });

  return [prodClientConfig, prodServerConfig];
}
