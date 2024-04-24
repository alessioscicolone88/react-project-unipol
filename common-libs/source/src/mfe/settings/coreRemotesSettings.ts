import { addFixSettingsIn } from "./settingsUtils";
import { MFE_TYPES, TMFE_SETTINGS } from "./types";

const settings: TMFE_SETTINGS = addFixSettingsIn(
  {
    type: MFE_TYPES.core,
    skipImportingInCMS: false,
  },
  {
    tpdRemotesImporter: {
      __mfeName__: "tpdRemotesImporter",
      devClientPort: 2999,
      devServerPort: 2999,
    },
    richText: {
      __mfeName__: "richText",
      devClientPort: 3002,
      devServerPort: 3002,
    },
    tpdImage: {
      __mfeName__: "tpdImage",
      devClientPort: 3005,
      devServerPort: 3005,
    },
  }
);

// ******* EXCEPTIONS
settings.tpdRemotesImporter.skipImportingInCMS = true;

export const CORE_REMOTES_SETTINGS = settings;
