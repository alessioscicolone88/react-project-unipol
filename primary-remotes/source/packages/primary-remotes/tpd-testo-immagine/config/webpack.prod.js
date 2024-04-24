const { ReactMFE } = require("@tpd-web-common-libs/nodejs-library");
const common = require("./webpack.common");


module.exports = async () => ReactMFE.generateWebpackPROD(
  common.options,
  common.deps
)
