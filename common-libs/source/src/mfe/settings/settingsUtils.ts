import { TMFE_SETTINGS, TMFE_SETTINGS_WITHOUT_TYPE } from "./types";

export const addFixSettingsIn = (
  fixSettings: any,
  settings: TMFE_SETTINGS_WITHOUT_TYPE
): TMFE_SETTINGS => {
  return Object.entries(settings).reduce((acc, [key, setting]) => {
    return {
      ...acc,
      [key]: {
        ...setting,
        ...fixSettings,
      },
    };
  }, {});
};
