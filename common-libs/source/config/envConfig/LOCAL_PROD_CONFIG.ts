import { TENV_CONFIG } from "../../src/envConfig";
import { __isEvoEnvBy } from "./shared/EvoConfigHelper";

const LOCAL_PROD_CONFIG: TENV_CONFIG = {
  ENV_NAME: "local_production",
  CMS_PROXY_ENDPOINT: __isEvoEnvBy()
    ? "https://evo-sit.unipolsai.it/api/:api_type/cms-proxy"
    : "https://sit.unipolsai.it/api/:api_type/cms-proxy",
  CMS_PROXY_NO_APIC_ENDPOINT: __isEvoEnvBy()
    ? "https://tpd-cms-proxy-evo-sit.servizi.gr-u.it/cms-proxy"
    : "https://tpd-cms-proxy-sit.servizi.gr-u.it/cms-proxy",
  HOST_ENDPOINT: "http://localhost:3000",
  REVALIDATE_TOKEN: "prova",
  PRODOTTO_UNICO_ACTIVE: "",
  NETWORK_CONFIG: {
    clientId: "c13117fd-af7e-45b6-8418-ff7b32a7422f",
    clientSecret: "bS5qE8iM2yW8eL0qM7fU7pI2pN2dK3yP0cM7oM3gI1xW0mG6bS",
    apiKey: "AIzaSyBdutiwcN-MfwP4a31SKdRGgv5qtktHSvA",
  },
};

export default LOCAL_PROD_CONFIG;
