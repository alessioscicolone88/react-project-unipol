import { createElement } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./app/App";
import { ReactMFE, MFE_NAMES } from "@tpd-web-common-libs/nodejs-library";

export default ReactMFE.bootstrapClient(
  { createRoot, createElement, hydrateRoot },
  MFE_NAMES.tpdTestoImmagine,
  App
);
