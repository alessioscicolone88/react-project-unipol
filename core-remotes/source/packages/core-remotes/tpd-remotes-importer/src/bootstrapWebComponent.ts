import {
  Helpers,
  MFE_NAMES,
  Providers,
  ReactMFE,
} from "@tpd-web-common-libs/nodejs-library";
import bootstrapClient from "./bootstrapClient";
import ENV_CONFIG from "../../../../config/envConfig/esm";

// ************    INIT SESSION STORAGE AND IMPORT ALL REMOTES FOR HCL    ************************* //
const SESSION_KEY = "persist:session";

const setDataInSessionListener: EventListener = ({ detail }: CustomEvent) => {
  const { resolve, key, value } = detail;
  const session = {
    ...JSON.parse(localStorage.getItem(SESSION_KEY) || "{}"),
    [key]: JSON.stringify(value),
  };

  localStorage.setItem(
    key,
    !!value && typeof value === "object" ? JSON.stringify(value) : value
  );
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  resolve(session);
};

const deleteDataInSessionListener: EventListener = ({
  detail,
}: CustomEvent) => {
  const { resolve, key } = detail;
  const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "{}");
  delete session[key];
  localStorage.removeItem(key);
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  resolve(session);
};

const deleteAllDataInSessionListener: EventListener = ({
  detail,
}: CustomEvent) => {
  const { resolve } = detail;
  const session = {};
  localStorage.clear();
  resolve(session);
};

const getDataFromSessionListener: EventListener = ({ detail }: CustomEvent) => {
  const { resolve, key } = detail;
  const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "{}");
  resolve(session[key] ? JSON.parse(session[key]) : null);
};

Helpers.SessionHelper.subscribeSetDataInSession(setDataInSessionListener);
Helpers.SessionHelper.subscribeDeleteDataInSession(deleteDataInSessionListener);
Helpers.SessionHelper.subscribeDeleteAllDataInSession(
  deleteAllDataInSessionListener
);
Helpers.SessionHelper.subscribeGetDataFromSession(getDataFromSessionListener);

Providers.RemoteService.getInstance().initRemotesMapOnlyClient(ENV_CONFIG);

// ************************************************ //

export default ReactMFE.initializeWebComponent(
  MFE_NAMES.tpdRemotesImporter,
  bootstrapClient.clientSideMount
);
