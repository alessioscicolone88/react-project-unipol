import React, { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./app/App";
import { MFE_NAMES, ReactMFE } from "@tpd-web-common-libs/nodejs-library";

export default ReactMFE.bootstrapServer(
  { renderToString, createElement },
  MFE_NAMES.tpdImage,
  App
);
