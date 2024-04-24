// CHANGE THIS TO RUN REMOTES IN LOCAL DEV MODE
// add in this runningRemotes array the remotes you want to run in local dev mode

const primaryRemotes = [
  "@tpd-web-primary-remotes/tpd-footer",
  "@tpd-web-primary-remotes/tpd-header",
  // "@tpd-web-primary-remotes/tpd-cta-area-riservata", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-medagliere", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-rich-text-con-sfondo", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-rich-text", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-lancio-sapevi-che-title", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-azioni-rapide-title", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-visore-empty", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-servizi", //primary in homepage
  //"@tpd-web-primary-remotes/tpd-locator", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-aree-di-garanzia", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-preventivatore-sticky-container", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-nuovo-lancio-preventivatori", //primary in homepage
  // "@tpd-web-primary-remotes/tpd-box-reason-why",
  // "@tpd-web-primary-remotes/tpd-recupero-preventivo",
  "@tpd-web-primary-remotes/tpd-titolo-sottotitolo",
  // "@tpd-web-primary-remotes/tpd-listing-link-empty",
  // "@tpd-web-primary-remotes/tpd-vantaggi-title",
  //"@tpd-web-primary-remotes/tpd-login",
  // "@tpd-web-primary-remotes/tpd-video-testo",
  // "@tpd-web-primary-remotes/tpd-vantaggi-pensati-per-te",
  // "@tpd-web-primary-remotes/tpd-prodotto-unico",
  // "@tpd-web-primary-remotes/tpd-disambiguazione-container",
  // "@tpd-web-primary-remotes/tpd-registrazione-clienti-container",
  // "@tpd-web-primary-remotes/tpd-testo-di-cortesia",
  // "@tpd-web-primary-remotes/tpd-privacy-empty",
  // "@tpd-web-primary-remotes/tpd-lancio-empty",
  //"@tpd-web-primary-remotes/tpd-richiesta-dati-quotazione-container",
  //"@tpd-web-primary-remotes/tpd-link-utili-title",
  // "@tpd-web-primary-remotes/tpd-schema-org",
  // "@tpd-web-primary-remotes/tpd-testo-btn",
  // "@tpd-web-primary-remotes/tpd-conferma-registrazione-container",
  //"@tpd-web-primary-remotes/tpd-reset-password",
  // "@tpd-web-primary-remotes/tpd-scarica-documenti-comarketing",
  //"@tpd-web-primary-remotes/tpd-data-layer-comarketing",
  // "@tpd-web-primary-remotes/tpd-mappa-specifica",
  // "@tpd-web-primary-remotes/tpd-certificato-assicurazione",
  //"@tpd-web-primary-remotes/tpd-blocchi-cta-empty",
  // "@tpd-web-primary-remotes/tpd-lancio",
  // "@tpd-web-primary-remotes/tpd-selettore",
  // "@tpd-web-primary-remotes/tpd-lancio-convenzioni-empty",
  // "@tpd-web-primary-remotes/tpd-convenzioni-multiple",
  // "@tpd-web-primary-remotes/tpd-visore-prodotto",
  // "@tpd-web-primary-remotes/tpd-lancio-convenzioni",
  // "@tpd-web-primary-remotes/tpd-gift-card-garmin",
  // "@tpd-web-primary-remotes/tpd-tasto-indietro-multicolore-categoria",
  // "@tpd-web-primary-remotes/tpd-titolo-sottotiolo-multicolore-categoria",
  "@tpd-web-primary-remotes/tpd-listing-empty",
  // "@tpd-web-primary-remotes/tpd-faq-esempi",
  //"@tpd-web-primary-remotes/tpd-visore-apertura-empty",
  //"@tpd-web-primary-remotes/tpd-lancio-utile-a-sapersi",
  // "@tpd-web-primary-remotes/tpd-lancio-utile-a-sapersi-categoria",
  // "@tpd-web-primary-remotes/tpd-poc-apertura",
  // "@tpd-web-primary-remotes/tpd-testo-multiplo-preventivatore-auto",
  // "@tpd-web-primary-remotes/tpd-cta-prec-succ",
  // "@tpd-web-primary-remotes/tpd-soccorso-assistenza-pas",
  // "@tpd-web-primary-remotes/tpd-assenza-pas-numeri-utili",
  // "@tpd-web-primary-remotes/tpd-scheda-comparativa-title",
  // "@tpd-web-primary-remotes/tpd-samsung-pay",
  // "@tpd-web-primary-remotes/tpd-risultati-ricerca",
  //"@tpd-web-primary-remotes/tpd-tag-utile-a-sapersi-container",
  //"@tpd-web-primary-remotes/tpd-comandi-social",
  // "@tpd-web-primary-remotes/tpd-locator-detail",
  // "@tpd-web-primary-remotes/tpd-cambio-icona-trova-ag",
  // "@tpd-web-primary-remotes/tpd-lancio-reclamo-empty",
  // "@tpd-web-primary-remotes/tpd-lancio-quotazioni-empty",
  // "@tpd-web-primary-remotes/tpd-lancio-unit-linked",
  // "@tpd-web-primary-remotes/tpd-fondi-pensione-aperti-search",
  // "@tpd-web-primary-remotes/tpd-lista-documenti-short-title",
  // "@tpd-web-primary-remotes/tpd-fondi-pensione-aperti",
  // "@tpd-web-primary-remotes/tpd-lancio-gestioni-separate",
  // "@tpd-web-primary-remotes/tpd-lista-documenti-quotazioni-empty",
  // "@tpd-web-primary-remotes/tpd-gestioni-separate",
  // "@tpd-web-primary-remotes/tpd-over-visore",
  // "@tpd-web-primary-remotes/tpd-lanci-sinistri-small",
  // "@tpd-web-primary-remotes/tpd-fai-una-domanda",
  //"@tpd-web-primary-remotes/tpd-listing-box-custom-empty",
  // "@tpd-web-primary-remotes/tpd-main-box-sinistri",
  // "@tpd-web-primary-remotes/tpd-locator-liquidazione-sinistri",
  // "@tpd-web-primary-remotes/tpd-servizi-cliente-empty",
  // "@tpd-web-primary-remotes/tpd-sia-header-container",
  // "@tpd-web-primary-remotes/tpd-sia-banner-agenzia-container",
  // "@tpd-web-primary-remotes/tpd-sia-dati-contatto",
  // "@tpd-web-primary-remotes/tpd-sia-lancio-pagina-container",
  // "@tpd-web-primary-remotes/tpd-sia-lancio-eventi-container",
  // "@tpd-web-primary-remotes/tpd-sia-descrizione-agenzia-container",
  // "@tpd-web-primary-remotes/tpd-sia-membri-agenzia-container",
  // "@tpd-web-primary-remotes/tpd-sia-titolo",
  // "@tpd-web-primary-remotes/tpd-sia-lancio-subagenzia-container",
  // "@tpd-web-primary-remotes/tpd-sia-descrizione-subagenzia-container",
  // "@tpd-web-primary-remotes/tpd-sia-elenco-convenzioni-nazionali-container",
  // "@tpd-web-primary-remotes/tpd-sia-iniziative-container",
  // "@tpd-web-primary-remotes/tpd-elenco-polizze-container",
  // "@tpd-web-primary-remotes/tpd-marketing-card",
  // "@tpd-web-primary-remotes/tpd-unibox-car-container",
  // "@tpd-web-primary-remotes/tpd-riepilogo-preventivo-sticky",
  // "@tpd-web-primary-remotes/tpd-selettore",
  // "@tpd-web-primary-remotes/tpd-lancio-convenzioni-empty",
  // "@tpd-web-primary-remotes/tpd-convenzioni-prodotti-empty",
  // "@tpd-web-primary-remotes/tpd-cpm-prenotazione-visita",
  // "@tpd-web-primary-remotes/tpd-cpm-riepilogo-visita",
  // "@tpd-web-primary-remotes/tpd-cta-area-riservata",
  // "@tpd-web-primary-remotes/tpd-cta-prec-succ",
  // "@tpd-web-primary-remotes/tpd-data-layer-comarketing",
  // "@tpd-web-primary-remotes/tpd-data-layer-generic",
  // "@tpd-web-primary-remotes/tpd-dati-personali",
  // "@tpd-web-primary-remotes/tpd-denunce-inviate",
  // "@tpd-web-primary-remotes/tpd-dettaglio-polizza-collettiva",
  // "@tpd-web-primary-remotes/tpd-dettaglio-polizza-previdenza",
  // "@tpd-web-primary-remotes/tpd-dettaglio-polizza-rami-elementari",
  //"@tpd-web-primary-remotes/tpd-dettaglio-polizza",
  // "@tpd-web-primary-remotes/tpd-documentazione-title",
  //"@tpd-web-primary-remotes/tpd-elenco-polizze-verticale",
  // "@tpd-web-primary-remotes/tpd-esito-rinnovo-polizza",
  // "@tpd-web-primary-remotes/tpd-fai-una-domanda",
  // "@tpd-web-primary-remotes/tpd-faq-accordion-title",
  // "@tpd-web-primary-remotes/tpd-faq-empty",
  // "@tpd-web-primary-remotes/tpd-faq-empty",
  // "@tpd-web-primary-remotes/tpd-faq-esempi",
  // "@tpd-web-primary-remotes/tpd-faq-list",
  // "@tpd-web-primary-remotes/tpd-fondi-pensione-aperti-search",
  // "@tpd-web-primary-remotes/tpd-fondi-pensione-aperti",
  // "@tpd-web-primary-remotes/tpd-footer",
  // "@tpd-web-primary-remotes/tpd-garanzie-title",
  // "@tpd-web-primary-remotes/tpd-gestione-utenze-aziendali",
  // "@tpd-web-primary-remotes/tpd-gestioni-separate",
  // "@tpd-web-primary-remotes/tpd-gift-card-garmin",
  // "@tpd-web-primary-remotes/tpd-header-secondo-livello",
  // "@tpd-web-primary-remotes/tpd-header",
  // "@tpd-web-primary-remotes/tpd-highlight-empty",
  //  "@tpd-web-primary-remotes/tpd-comarketing-testo-immagine",
  // "@tpd-web-primary-remotes/tpd-locator-widget-container",
  // "@tpd-web-primary-remotes/tpd-la-tua-agenzia-container",
  // "@tpd-web-primary-remotes/tpd-submenu-container",
  // "@tpd-web-primary-remotes/tpd-web-cauzione",
  // "@tpd-web-primary-remotes/tpd-tool-di-consulenza",
  // "@tpd-web-primary-remotes/tpd-faq-list",
  // "@tpd-web-primary-remotes/tpd-telepedaggio-widget-area-riservata",
  // "@tpd-web-primary-remotes/tpd-testo",
  // "@tpd-web-primary-remotes/tpd-i-tuoi-dispositivi-telematici",
  // "@tpd-web-primary-remotes/tpd-ultimo-sinistro",
  // "@tpd-web-primary-remotes/tpd-azioni-rapide",
  // "@tpd-web-primary-remotes/tpd-widget-immagine",
  // "@tpd-web-primary-remotes/tpd-le-tue-polizze-container",
  // "@tpd-web-primary-remotes/tpd-sconti",
  //"@tpd-web-primary-remotes/tpd-vendita-ibrida-landing-sticky",
  // "@tpd-web-primary-remotes/tpd-preventivi-container",
  // "@tpd-web-primary-remotes/tpd-incidente-due-veicoli",
  // "@tpd-web-primary-remotes/tpd-informativa-rinnovo-polizza",
  // "@tpd-web-primary-remotes/tpd-informazioni-contatti-empty",
  // "@tpd-web-primary-remotes/tpd-la-tua-agenzia-sinistri",
  // "@tpd-web-primary-remotes/tpd-lanci-sinistri-small",
  // "@tpd-web-primary-remotes/tpd-lancio-convenzioni-empty",
  // "@tpd-web-primary-remotes/tpd-lancio-convenzioni",
  // "@tpd-web-primary-remotes/tpd-lancio-empty",
  // "@tpd-web-primary-remotes/tpd-lancio-gestioni-separate",
  // "@tpd-web-primary-remotes/tpd-lancio-prodotto-empty",
  // "@tpd-web-primary-remotes/tpd-lancio-prodotto",
  // "@tpd-web-primary-remotes/tpd-lancio-quotazioni-empty",
  // "@tpd-web-primary-remotes/tpd-lancio-reclamo",
  // "@tpd-web-primary-remotes/tpd-lancio-sapevi-che-title",
  // "@tpd-web-primary-remotes/tpd-lancio-unit-linked",
  // "@tpd-web-primary-remotes/tpd-lancio-utile-a-sapersi-categoria",
  // "@tpd-web-primary-remotes/tpd-lancio-utile-a-sapersi",
  // "@tpd-web-primary-remotes/tpd-lancio",
  // "@tpd-web-primary-remotes/tpd-link-utili-title",
  // "@tpd-web-primary-remotes/tpd-lista-documenti-quotazioni-empty",
  // "@tpd-web-primary-remotes/tpd-lista-documenti-short-title",
  // "@tpd-web-primary-remotes/tpd-lista-preventivi",
  // "@tpd-web-primary-remotes/tpd-cambia-sia",
  // "@tpd-web-primary-remotes/tpd-variazioni-dati-agenziali",
  // "@tpd-web-primary-remotes/tpd-lancio-prodotto",
  // "@tpd-web-primary-remotes/tpd-header-secondo-livello",
  // "@tpd-web-primary-remotes/tpd-tasto-indietro",
  // "@tpd-web-primary-remotes/tpd-locator-semplice",
  //"@tpd-web-primary-remotes/tpd-faq-empty",
  // "@tpd-web-primary-remotes/tpd-elenco-polizze-verticale",
  // "@tpd-web-primary-remotes/tpd-area-riservata-preventivi",
  // "@tpd-web-primary-remotes/tpd-dettaglio-polizza",
  // "@tpd-web-primary-remotes/tpd-lista-preventivi",
  //"@tpd-web-primary-remotes/tpd-rich-text-con-sfondo-login",
  // "@tpd-web-primary-remotes/tpd-telepedaggio-polizze-collettive-ut",
  // "@tpd-web-primary-remotes/tpd-spalla-destra-container",
  // "@tpd-web-primary-remotes/tpd-box-aiuto",
  // "@tpd-web-primary-remotes/tpd-sinistri-altri-casi",
  //"@tpd-web-primary-remotes/tpd-box-dubbi",
  // "@tpd-web-primary-remotes/tpd-box-informativo-verde",
  // "@tpd-web-primary-remotes/tpd-box-informativo-verde-con-pulsante",
  // "@tpd-web-primary-remotes/tpd-aprire-pratica-come-contare",
  // "@tpd-web-primary-remotes/tpd-incidente-due-veicoli",
  // "@tpd-web-primary-remotes/tpd-menu-sinistri-denuncia-selezionato",
  // "@tpd-web-primary-remotes/tpd-menu-sinistri-tracking-selezionato",
  // "@tpd-web-primary-remotes/tpd-notifiche-commerciali",
  // "@tpd-web-primary-remotes/tpd-nuovo-lancio-preventivatori",
  // "@tpd-web-primary-remotes/tpd-over-visore",
  // "@tpd-web-primary-remotes/tpd-pagamento-rinnovo-polizza",
  // "@tpd-web-primary-remotes/tpd-poc-apertura",
  // "@tpd-web-primary-remotes/tpd-preapertura-steps",
  // "@tpd-web-primary-remotes/tpd-presentazione-agenzia",
  // "@tpd-web-primary-remotes/tpd-privacy-banner",
  // "@tpd-web-primary-remotes/tpd-privacy-empty",
  // "@tpd-web-primary-remotes/tpd-privacy-page",
  // "@tpd-web-primary-remotes/tpd-presentazione-agenzia",
  //"@tpd-web-primary-remotes/tpd-validazione-otp",
  //"@tpd-web-primary-remotes/tpd-notifiche-commerciali",
  // "@tpd-web-primary-remotes/tpd-box-commercio",
  // "@tpd-web-primary-remotes/tpd-lista-prodotti-empty",
  // "@tpd-web-primary-remotes/tpd-validazione-email",
  // "@tpd-web-primary-remotes/tpd-validazione-otp",
  // "@tpd-web-primary-remotes/tpd-vantaggi-pensati-per-te",
  // "@tpd-web-primary-remotes/tpd-vantaggi-pensati-per-te",
  // "@tpd-web-primary-remotes/tpd-vantaggi-title",
  // "@tpd-web-primary-remotes/tpd-variazioni-dati-agenziali",
  // "@tpd-web-primary-remotes/tpd-vendita-ibrida-landing-sticky",
  // "@tpd-web-primary-remotes/tpd-video-testo",
  // "@tpd-web-primary-remotes/tpd-visore-apertura-empty",
  // "@tpd-web-primary-remotes/tpd-visore-empty",
  // "@tpd-web-primary-remotes/tpd-visore-no-carosello",
  // "@tpd-web-primary-remotes/tpd-visore-no-carosello",
  // "@tpd-web-primary-remotes/tpd-visore-prodotto",
  // "@tpd-web-primary-remotes/tpd-web-cauzione",
  // "@tpd-web-primary-remotes/tpd-widget-immagine",
  // "@tpd-web-primary-remotes/tpd-siti-integrati",
  //"@tpd-web-primary-remotes/tpd-box-informazioni-cta",
  // "@tpd-web-primary-remotes/tpd-sanicard",
  // "@tpd-web-primary-remotes/tpd-form-successo",
  // "@tpd-web-primary-remotes/tpd-prodotto-menu-secondario",
  // "@tpd-web-primary-remotes/tpd-index-linked",
  // "@tpd-web-primary-remotes/tpd-convertion-prospect"
  // "@tpd-web-primary-remotes/tpd-box-info-lancio-titolo"
];

module.exports = [...primaryRemotes];