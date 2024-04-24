import bootstrapClient from "./bootstrapClient";
import { MFE_NAMES, ReactMFE } from "@tpd-web-common-libs/nodejs-library";

ReactMFE.initializeWebComponent(
  MFE_NAMES.richText,
  bootstrapClient.clientSideMount
);
