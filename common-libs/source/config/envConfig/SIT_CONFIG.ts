import { __isEvoEnvBy } from "./shared/EvoConfigHelper";
import { generateProdConfigBy } from "./shared/ProdConfigHelper";

const SIT_CONFIG = generateProdConfigBy({
  ENV_NAME: "integration",
  HOST_ENDPOINT: __isEvoEnvBy()
    ? "https://evo-sit.unipolsai.it"
    : "https://sit.unipolsai.it",
  CMS_PROXY_NO_APIC_ENDPOINT: __isEvoEnvBy()
    ? "https://tpd-cms-proxy-evo-sit.servizi.gr-u.it/cms-proxy"
    : "https://tpd-cms-proxy-sit.servizi.gr-u.it/cms-proxy",
  NETWORK_CONFIG: {
    clientId: "c13117fd-af7e-45b6-8418-ff7b32a7422f",
    clientSecret: "bS5qE8iM2yW8eL0qM7fU7pI2pN2dK3yP0cM7oM3gI1xW0mG6bS",
    apiKey: "AIzaSyBdutiwcN-MfwP4a31SKdRGgv5qtktHSvA",
  },
});

export default SIT_CONFIG;
