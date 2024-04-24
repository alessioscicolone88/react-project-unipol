import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./app/App";
import { ReactMFE, MFE_NAMES } from "@tpd-web-common-libs/nodejs-library";

export default ReactMFE.bootstrapServer(
  { renderToString, createElement },
  MFE_NAMES.tpdRemotesImporter,
  App
);
