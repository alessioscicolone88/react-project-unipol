import { ModuleFederationHelper } from "../../../helpers";
import { Polyfills } from "../../../main";
import {
  TReactWebpackDeps,
  TReactWebpackOptions,
  generateReactCommonConfig,
} from "./webpack.common";

export async function generateWebpackDEV(
  options: TReactWebpackOptions,
  deps: TReactWebpackDeps
) {
  const { ENV_CONFIG } = options;

  const {
    webpack: {
      container: { ModuleFederationPlugin },
    },
    HtmlWebpackPlugin,
    webpackMerge: { merge },
    nodeFetch,
  } = deps;

  const common = generateReactCommonConfig(options, deps);

  const devCommonConfig = merge(common.config, {
    mode: "development",
  });

  await Polyfills.fetchNodePolyfill(nodeFetch);

  const { clientConfig, serverConfig } =
    ModuleFederationHelper.buildRemoteModuleFederationConfigs(
      common.__mfeName__,
      common.sharedModuleFederationDeps(),
      ENV_CONFIG
    );

  const devClientConfig = merge(devCommonConfig, {
    target: "web",
    entry: {
      main: "./src/index",
    },
    output: {
      uniqueName: common.__mfeName__ + "ReactDevClient",
      path: common.distPath + common.remotePath + "client",
      publicPath: `${ENV_CONFIG.getRemoteEndpointBy(common.type)}:${
        common.devClientPort
      }/client/`,
      clean: true,
    },
    devServer: {
      port: common.devClientPort,
      historyApiFallback: {
        index: "/client/index.html",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
    plugins: [
      new ModuleFederationPlugin(clientConfig),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  });

  const devServerConfig = merge(devCommonConfig, {
    target: "async-node",
    output: {
      uniqueName: common.__mfeName__ + "ReactDevServer",
      path: common.distPath + common.remotePath + "server",
      publicPath: `${ENV_CONFIG.getRemoteEndpointBy(common.type)}:${
        common.devServerPort
      }/server/`,
      clean: true,
      asyncChunks: false,
    },
    plugins: [new ModuleFederationPlugin(serverConfig)],
  });

  return [devClientConfig, devServerConfig];
}
