import bootstrapClient from "./bootstrapClient";
import { MFE_NAMES, ReactMFE } from "@tpd-web-common-libs/nodejs-library";
import REMOTES_MAP from "./remotesMap";

export default ReactMFE.initializeWebComponent(
  MFE_NAMES.tpdTestoImmagine,
  bootstrapClient.clientSideMount,
  REMOTES_MAP
);
