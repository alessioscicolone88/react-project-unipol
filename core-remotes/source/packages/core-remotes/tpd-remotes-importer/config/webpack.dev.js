const { ReactMFE } = require("@tpd-web-common-libs/nodejs-library");
const common = require("./webpack.common");

module.exports = () => ReactMFE.generateWebpackDEV(
  common.options,
  common.deps
)
