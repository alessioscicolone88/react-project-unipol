var fs = require("fs");
const CommonLibs = require("@tpd-web-common-libs/nodejs-library");

CommonLibs.Scripts.generateImportMapFiles(
  "packages/core-remotes/tpd-remotes-importer/src/import-map",
  true,
  {fs}
)