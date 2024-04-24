import { TENV_CONFIG } from "../../src/envConfig";
import { __isEvoEnvBy } from "./shared/EvoConfigHelper";

const LOCAL_DEV_CONFIG: TENV_CONFIG = {
  ENV_NAME: "local_development",
  CMS_PROXY_ENDPOINT: __isEvoEnvBy()
    ? "https://evo-dev.unipolsai.it/api/:api_type/cms-proxy"
    : "https://dev.unipolsai.it/api/:api_type/cms-proxy",
  CMS_PROXY_NO_APIC_ENDPOINT: __isEvoEnvBy()
    ? "https://tpd-cms-proxy-evo-dev.servizi.gr-u.it/cms-proxy"
    : "https://tpd-cms-proxy-dev.servizi.gr-u.it/cms-proxy",
  HOST_ENDPOINT: "http://localhost:3000",
  REVALIDATE_TOKEN: "prova",
  PRODOTTO_UNICO_ACTIVE: "",
  NETWORK_CONFIG: {
    clientId: "af63942b-c329-4004-abce-6adbd0110973",
    clientSecret: "T6xW6qD0uK4yY8eW8qD1eR2fK5jL5pU0nM2hR2rH8hF8mY0wN1",
    apiKey: "AIzaSyBdutiwcN-MfwP4a31SKdRGgv5qtktHSvA",
  },
};

export default LOCAL_DEV_CONFIG;
