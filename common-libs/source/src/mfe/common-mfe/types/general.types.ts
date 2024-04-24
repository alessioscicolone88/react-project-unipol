import { TOUCHPOINTS } from "../constants";

export type TServerSideRemote = {
  __mfeName__: string;
  serverSideMount: (props: any) => Promise<any>;
  childrenRemoteDeps?: any;
};

export type TClientSideRemote = {
  __mfeName__: string;
  clientSideMount: (el: Element, props: any, options: any) => Promise<any>;
  clientSideUnmount?: (el: Element, props: any) => Promise<any>;
};

export type TRemote = TServerSideRemote | TClientSideRemote;
export type TRemoteEntry = { default: TRemote };
export type TExecImportRemoteEntry = Promise<TRemoteEntry>;
export type TImportRemoteEntry = () => TExecImportRemoteEntry;

export type TImportMFE = (key: string) => Promise<TRemote | null>;

export type TBooleanString = "true" | "false";

export type TPageProperties = {
  "ibm.portal.instantiation.page.include.descendants"?: TBooleanString;
  "google-site-verification"?: string;
  "msvalidate.01"?: string;
  isMigrate?: TBooleanString;
  "wcm.template.oid"?: string;
  touchpoint?: string;
  "resourceaggregation.profile"?: string;
  "facebook-domain-verification"?: string;
  functional_category?: string;
  "rel-canonical"?: string;
  "meta-description"?: string;
  page_name?: string;
  "meta-title"?: string;
  displayBreadcrumbs?: TBooleanString;
  "ibm.template.oid"?: string;
  "sitemap.enable"?: TBooleanString;
  isUtileASapersi?: string;
  colorClassDesktop?: string;
  icon_background?: string;
  "param.template.page"?: string;
  dataCategory?: string;
  category?: string;
  prodotto?: TBooleanString;
  page_id?: string;
  issue_date?: string;
  primary_category?: string;
  subject_category?: string;
  network_source?: string;
  site_agency_area?: string;
  site_agency_id?: string;
};

export type THost = {
  router?: any;
  importMFEBy: (__mfeName__: string) => Promise<any>;
  isClientRendering: boolean;
  pageProperties: TPageProperties;
  url: string;
  pageTitle: string;
  profile: string;
  placement?: any;
};

export type TTouchpoint = keyof typeof TOUCHPOINTS;

export type TRemoteProps = {
  __host__: THost;
  isEditMode?: boolean;
  config?: any;
  menu?: TMenuProps;
  touchpoint?: TTouchpoint;
} & TProps;

export type TMenuProps = {
  totalItems: string;
  itemsMenu: any[];
};

export type TProps = {
  id: string;
  __mfeName__: string;
  [key: string]: any;
};

export type TClientSideOptions = {
  isMounting?: boolean;
};

export type TClientSideRoot = {
  [key: string]: any;
};

export type TMountingMap = {
  [key: string]: boolean;
};
