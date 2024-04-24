import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./app/App";
import { ReactMFE, MFE_NAMES } from "@tpd-web-common-libs/nodejs-library";
import REMOTES_MAP from "./remotesMap";

export default ReactMFE.bootstrapServer(
  { renderToString, createElement },
  MFE_NAMES.tpdTestoImmagine,
  App,
  REMOTES_MAP
);
