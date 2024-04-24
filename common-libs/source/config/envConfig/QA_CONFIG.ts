import { generateProdConfigBy } from "./shared/ProdConfigHelper";

const QA_CONFIG = generateProdConfigBy({
  ENV_NAME: "quality",
  HOST_ENDPOINT: "https://qa.unipolsai.it",
  CMS_PROXY_NO_APIC_ENDPOINT:
    "https://tpd-cms-proxy-qa.servizi.gr-u.it/cms-proxy",
  NETWORK_CONFIG: {
    clientId: "713e8770-0bde-47cb-ac0b-f0faf211d0af",
    clientSecret: "vB3hL4rC5uM6xQ8wX0uH4vL8fR3iC0xL2tC8iN0bK6cW2pB7iO",
    apiKey: "AIzaSyBdutiwcN-MfwP4a31SKdRGgv5qtktHSvA",
  },
});

export default QA_CONFIG;
