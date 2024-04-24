type TMFE_TYPES = {
  [key: string]: string;
};

export const MFE_TYPES: TMFE_TYPES = {
  core: "core",
  widget: "widget",
  primary: "primary",
  widgetPu: "widgetPu",
  widgetSinistri: "widgetSinistri",
  widgetAreaRiservata: "widgetAreaRiservata",
  widgetSia: "widgetSia",
  widgetRegLogin: "widgetRegLogin",
  widgetTelepedaggio: "widgetTelepedaggio",
  widgetAreaPubblica: "widgetAreaPubblica",
  primaryContainer: "primaryContainer",
  widgetAreaPubblicaBucket: "widgetAreaPubblicaBucket"
};

export type TMFE_GENERAL_SETTINGS = {
  [key: string]: {
    localProdPort: number;
    fileFolder: string;
    basePath: string;
    mfeSettings: TMFE_SETTINGS;
  };
};

export type TMFE_SETTINGS_PROPS = {
  __mfeName__: string;
  type: string;
  devClientPort: number;
  devServerPort: number;
  skipImportingInCMS?: boolean;
  mfePriority?: number;
  portlet?: TPortletSettings;
};

export type TPortletSettings = {
  path: string;
  uniqueName: string;
  title: string;
};

export type TMFE_SETTINGS_WITHOUT_TYPE = {
  [key: string]: Omit<TMFE_SETTINGS_PROPS, "type">;
};

export type TMFE_SETTINGS = {
  [key: string]: TMFE_SETTINGS_PROPS;
};
