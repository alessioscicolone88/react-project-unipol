import { __isEvoEnvBy } from "../../config/envConfig/shared/EvoConfigHelper";
import { CORE_REMOTES_SETTINGS } from "./settings/coreRemotesSettings";
import { PRIMARY_REMOTES_SETTINGS } from "./settings/primaryRemotesSettings";
import {
  MFE_TYPES,
  TMFE_GENERAL_SETTINGS,
  TMFE_SETTINGS,
} from "./settings/types";

export { MFE_TYPES } from "./settings/types";

export function getFileFolderAndBasePathFrom(remoteName: string) {
  return {
    fileFolder: remoteName,
    basePath: __isEvoEnvBy() ? `${remoteName}-evo` : remoteName,
  };
}

export const MFE_GENERAL_SETTINGS: TMFE_GENERAL_SETTINGS = {
  [MFE_TYPES.core]: {
    ...getFileFolderAndBasePathFrom("core-remotes"),
    localProdPort: 8000,
    mfeSettings: CORE_REMOTES_SETTINGS,
  },
  [MFE_TYPES.primary]: {
    ...getFileFolderAndBasePathFrom("primary-remotes"),
    localProdPort: 8002,
    mfeSettings: PRIMARY_REMOTES_SETTINGS,
  }
};

export const MFE_SETTINGS: TMFE_SETTINGS = Object.values(
  MFE_GENERAL_SETTINGS
).reduce((acc, settings) => {
  return {
    ...acc,
    ...settings.mfeSettings,
  };
}, {});

type TMFE_NAMES = {
  [key: string]: string;
};

export const MFE_NAMES: TMFE_NAMES = Object.entries(MFE_SETTINGS).reduce(
  (acc, [key, mfeMap]) => {
    return {
      ...acc,
      [key]: mfeMap.__mfeName__,
    };
  },
  {}
);
