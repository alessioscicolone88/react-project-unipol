const path = require('path');
const { MFE_SETTINGS } = require("@tpd-web-common-libs/nodejs-library");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  options: {
    mfeSettings: MFE_SETTINGS.tpdRemotesImporter, // TODO - NEED TO CHECK IF IT IS CORRECT
    ENV_CONFIG: require("../../../../config/envConfig"),
    PACKAGE: require('../package.json'),
    distPath: path.resolve(__dirname, "..", "..", "..", "..", "dist"),
    getPackageVersion: (depKey) => require('../../../../node_modules/' + depKey + '/package.json').version,
  },
  deps: {
    require: require,
    HtmlWebpackPlugin,
    webpackMerge,
    webpack,
    nodeFetch: () => import('node-fetch'),
    TerserPlugin,
    MiniCssExtractPlugin
  }
};