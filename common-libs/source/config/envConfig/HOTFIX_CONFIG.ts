import { generateProdConfigBy } from "./shared/ProdConfigHelper";

const HOTFIX_CONFIG = generateProdConfigBy({
  ENV_NAME: "hotfix",
  HOST_ENDPOINT: "https://fix.unipolsai.it",
  CMS_PROXY_NO_APIC_ENDPOINT:
    "https://tpd-cms-proxy.ha.servizi.gr-u.it/cms-proxy",
  NETWORK_CONFIG: {
    clientId: "4fbc8820-2289-4023-bd75-19a9cb14b150",
    clientSecret: "rJ8cW7kH2jY2fN3rN1rD5tO5rK5fV3lE8oR0bR5rQ6fY6cY8vI",
    apiKey: "AIzaSyBtyrWVTTVxJSzkvwPNOeOY0uUrDtivB48",
  },
});

export default HOTFIX_CONFIG;
