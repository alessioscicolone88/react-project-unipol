import { TENV_CONFIG } from "../../../src/envConfig";
import { __isEvoEnvBy } from "./EvoConfigHelper";
export function generateProdConfigBy(config: any): TENV_CONFIG {
  const {
    ENV_NAME,
    HOST_ENDPOINT,
    CMS_PROXY_NO_APIC_ENDPOINT,
    NETWORK_CONFIG,
  } = config;
  return {
    ENV_NAME,
    CMS_PROXY_ENDPOINT: "/api/:api_type/cms-proxy",
    CMS_PROXY_NO_APIC_ENDPOINT,
    HOST_ENDPOINT,
    REVALIDATE_TOKEN: "prova",
    PRODOTTO_UNICO_ACTIVE: "",
    NETWORK_CONFIG,
  } as TENV_CONFIG;
}
