const express = require("express");
const path = require("path");
const cors = require("cors");
var compression = require("compression");
var CommonLibs = require("@tpd-web-common-libs/nodejs-library");
const fs = require("fs");

CommonLibs.Utils.RemoteServerUtils.runRemoteServer(
  CommonLibs.MFE_TYPES.primary, // change the type if you are migrating the repo
  {
    dirname: __dirname,
    port: process.env["PORT"],
    deploy_env_name: process.env["DEPLOY_ENV_NAME"],
  },
  {
    express,
    path,
    cors,
    compression,
    fs,
  }
);
