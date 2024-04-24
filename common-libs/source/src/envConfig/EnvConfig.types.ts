export type TREMOTES_ENTRIES = {
  [key: string]: {
    client: string;
    server: string;
  };
};

export type TENV_CONFIG = {
  ENV_NAME: string;
  CMS_PROXY_ENDPOINT: string;
  CMS_PROXY_NO_APIC_ENDPOINT: string;
  HOST_ENDPOINT: string;
  REVALIDATE_TOKEN: string;
  PRODOTTO_UNICO_ACTIVE: string;
  NETWORK_CONFIG: {
    clientId: string;
    clientSecret: string;
    apiKey: string;
  };
};

export type TALL_ENV_CONFIG = {
  [key: string]: TENV_CONFIG;
};

export type TENV_CONFIG_MANAGER = {
  ALL_ENV_NAME_TYPES: {
    [key: string]: string;
  };
  ALL_ENV_BRANCH_TYPES: {
    [key: string]: string;
  };
  REMOTES_ENTRIES: TREMOTES_ENTRIES;
  NODE_ENV: string;
  DEPLOY_ENV_NAME: string;
  ENV_BRANCH_TYPE: string;
  npm_package_version: string;
  getRemoteEndpointBy: (mfeType: string) => string;
} & TENV_CONFIG;
