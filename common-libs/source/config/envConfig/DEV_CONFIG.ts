import { __isEvoEnvBy } from "./shared/EvoConfigHelper";
import { generateProdConfigBy } from "./shared/ProdConfigHelper";

const DEV_CONFIG = generateProdConfigBy({
  ENV_NAME: "development",
  HOST_ENDPOINT: __isEvoEnvBy()
    ? "https://evo-dev.unipolsai.it"
    : "https://dev.unipolsai.it",
  CMS_PROXY_NO_APIC_ENDPOINT: __isEvoEnvBy()
    ? "https://tpd-cms-proxy-evo-dev.servizi.gr-u.it/cms-proxy"
    : "https://tpd-cms-proxy-dev.servizi.gr-u.it/cms-proxy",
  NETWORK_CONFIG: {
    clientId: "af63942b-c329-4004-abce-6adbd0110973",
    clientSecret: "T6xW6qD0uK4yY8eW8qD1eR2fK5jL5pU0nM2hR2rH8hF8mY0wN1",
    apiKey: "AIzaSyBdutiwcN-MfwP4a31SKdRGgv5qtktHSvA",
  },
});

export default DEV_CONFIG;
