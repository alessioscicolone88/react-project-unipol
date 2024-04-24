import { addFixSettingsIn } from "./settingsUtils";
import { MFE_TYPES, TMFE_SETTINGS } from "./types";

const settings: TMFE_SETTINGS = addFixSettingsIn(
  {
    type: MFE_TYPES.primary,
    skipImportingInCMS: true,
  },
  {
    tpdCtaAreaRiservata: {
      __mfeName__: "tpdCtaAreaRiservata",
      devClientPort: 3006,
      devServerPort: 3006,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_CTA_Area_Riservata",
        uniqueName: "unipolSai.portlet.ctaAreaRiservata",
        title: "CTA_Area_Riservata",
      },
    },
    tpdBoxReasonWhy: {
      __mfeName__: "tpdBoxReasonWhy",
      devClientPort: 3007,
      devServerPort: 3007,
    },
    tpdAzioniRapideTitle: {
      __mfeName__: "tpdAzioniRapideTitle",
      devClientPort: 3010,
      devServerPort: 3010,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Azioni_Rapide_Title",
        uniqueName: "unipolSai.portlet.azioniRapide",
        title: "Lancio_Azioni_Rapide",
      },
    },
    tpdServizi: {
      __mfeName__: "tpdServizi",
      devClientPort: 3013,
      devServerPort: 3013,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Servizi",
        uniqueName: "unipolSai.portlet.servizi",
        title: "Contenitore_Servizi",
      },
    },
    tpdFooter: {
      __mfeName__: "tpdFooter",
      devClientPort: 3018,
      devServerPort: 3018,
    },
    tpdNuovoLancioPreventivatori: {
      __mfeName__: "tpdNuovoLancioPreventivatori",
      devClientPort: 3019,
      devServerPort: 3019,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Nuovo_Lancio_Preventivatori",
        uniqueName: "unipolSai.portlet.nuovoLancioPreventivatori",
        title: "Nuovo_Lancio_Preventivatori",
      },
    },
    tpdHeader: {
      __mfeName__: "tpdHeader",
      devClientPort: 3017,
      devServerPort: 3017,
      mfePriority: 1800,
    },
    tpdMedagliere: {
      __mfeName__: "tpdMedagliere",
      devClientPort: 3008,
      devServerPort: 3008,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Medagliere",
        uniqueName: "unipolSai.portlet.Medagliere",
        title: "Medagliere",
      },
    },
    tpdRichText: {
      __mfeName__: "tpdRichText",
      devClientPort: 3009,
      devServerPort: 3009,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Rich_Text",
        uniqueName: "unipolSai.portlet.richText",
        title: "Rich_Text",
      },
    },
    tpdRichTextConSfondo: {
      __mfeName__: "tpdRichTextConSfondo",
      devClientPort: 3016,
      devServerPort: 3016,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Rich_Text_con_sfondo",
        uniqueName: "unipolSai.portlet.richTextConSfondo",
        title: "Rich_Text_con_sfondo",
      },
    },
    tpdLancioSapeviCheTitle: {
      __mfeName__: "tpdLancioSapeviCheTitle",
      devClientPort: 3021,
      devServerPort: 3021,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio_Sapevi_Che_Title",
        uniqueName: "unipolSai.portlet.Lancio_Utile_a_Sapersi_Esterno",
        title: "Lancio_Utile_a_Sapersi_Esterno",
      },
    },
    tpdLocator: {
      __mfeName__: "tpdLocator",
      devClientPort: 3022,
      devServerPort: 3022,
      mfePriority: 1700,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Locator",
        uniqueName: "unipolSai.portlet.locator",
        title: "Locator",
      },
    },
    tpdTitoloSottotitolo: {
      __mfeName__: "tpdTitoloSottotitolo",
      devClientPort: 3024,
      devServerPort: 3024,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Titolo_Sottotitolo",
        uniqueName: "unipolSai.portlet.titoloSottotitolo",
        title: "Titolo_con_Sottotitolo",
      },
    },
    tpdAChiSiRivolgeTitle: {
      __mfeName__: "tpdAChiSiRivolgeTitle",
      devClientPort: 3038,
      devServerPort: 3038,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_A_Chi_Si_Rivolge_Title",
        uniqueName: "unipolSai.portlet.prodottoAChiSiRivolge",
        title: "Lancio_A_Chi_Si_Rivolge",
      },
    },
    tpdVantaggiTitle: {
      __mfeName__: "tpdVantaggiTitle",
      devClientPort: 3039,
      devServerPort: 3039,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Vantaggi_title",
        uniqueName: "unipolSai.portlet.prodottoVantaggi",
        title: "Lancio_Vantaggi",
      },
    },
    tpdVideoTesto: {
      __mfeName__: "tpdVideoTesto",
      devClientPort: 3040,
      devServerPort: 3040,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Video_Testo",
        uniqueName: "unipolSai.portlet.videoTesto",
        title: "Video_Testo",
      },
    },
    tpdBoxInfoLancioSinGarEmpty: {
      __mfeName__: "tpdBoxInfoLancioSinGarEmpty",
      devClientPort: 3041,
      devServerPort: 3041,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Box_Info_Lancio_Sin_Gar_Empty",
        uniqueName: "unipolSai.portlet.boxInfoLancioSinistriGaranzie",
        title: "Lancio_Sinistri_Garanzie",
      },
    },
    tpdVisoreNoCarosello: {
      __mfeName__: "tpdVisoreNoCarosello",
      devClientPort: 3042,
      devServerPort: 3042,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Visore_No_Carosello",
        uniqueName: "unipolSai.portlet.visoreNoCarosello",
        title: "Visore",
      },
    },
    tpdAreeDiGaranzia: {
      __mfeName__: "tpdAreeDiGaranzia",
      devClientPort: 3020,
      devServerPort: 3020,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Aree_Di_Garanzia",
        uniqueName: "unipolSai.portlet.nuoveAreeDiGaranzia",
        title: "Nuove_Aree_Di_Garanzia",
      },
    },
    tpdFaqEmpty: {
      __mfeName__: "tpdFaqEmpty",
      devClientPort: 3027,
      devServerPort: 3027,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Faq_Empty",
        uniqueName: "unipolSai.portlet.faq",
        title: "Faq",
      },
    },
    tpdLancioProdottoEmpty: {
      __mfeName__: "tpdLancioProdottoEmpty",
      devClientPort: 3028,
      devServerPort: 3028,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio_Prodotto_Empty",
        uniqueName: "unipolSai.portlet.lancioProdottoMenu",
        title: "Menu_Sezioni_Figlie",
      },
    },
    tpdVantaggiPensatiPerTe: {
      __mfeName__: "tpdVantaggiPensatiPerTe",
      devClientPort: 3029,
      devServerPort: 3029,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Vantaggi_Pensati_Per_Te",
        uniqueName: "unipolSai.portlet.vantaggiPensatiPerTe",
        title: "Vantaggi_Pensati_Per_Te",
      },
    },
    tpdFaqAccordionTitle: {
      __mfeName__: "tpdFaqAccordionTitle",
      devClientPort: 3030,
      devServerPort: 3030,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / FAQ / PT_FAQ_Accordion_Title",
        uniqueName: "unipolSai.portlet.faqAccordion",
        title: "FAQ_Accordion",
      },
    },
    tpdLinkUtiliTitle: {
      __mfeName__: "tpdLinkUtiliTitle",
      devClientPort: 3031,
      devServerPort: 3031,
    },
    tpdProdottoMenuSecondario: {
      __mfeName__: "tpdProdottoMenuSecondario",
      devClientPort: 3032,
      devServerPort: 3032,
      mfePriority: 2000,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Prodotto_Menu_Secondario",
        uniqueName: "unipolSai.portlet.prodottoMenuSecondario",
        title: "Prodotto_Menu_Secondario",
      },
    },
    tpdGaranzieTitle: {
      __mfeName__: "tpdGaranzieTitle",
      devClientPort: 3033,
      devServerPort: 3033,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Garanzie_Title",
        uniqueName: "unipolSai.portlet.prodottoGaranzie",
        title: "Lancio_Garanzie",
      },
    },
    tpdPrivacyEmpty: {
      __mfeName__: "tpdPrivacyEmpty",
      devClientPort: 3034,
      devServerPort: 3034,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Privacy_Empty",
        uniqueName: "unipolSai.portlet.privacy",
        title: "Contenitore_Faq_Privacy",
      },
    },
    tpdTestoImmagine: {
      __mfeName__: "tpdTestoImmagine",
      devClientPort: 3035,
      devServerPort: 3035,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Testo_Immagine",
        uniqueName: "unipolSai.portlet.testoImmagine",
        title: "Testo_Immagine",
      },
    },
    tpdLogin: {
      __mfeName__: "tpdLogin",
      devClientPort: 3046,
      devServerPort: 3046,
      mfePriority: 2000,
      portlet: {
        path: "UnipolSai-Disegno-SelfRegistration / PT_login",
        uniqueName: "unipolsai.areariservata.selfrefwidget.login2",
        title: "Login2",
      },
    },
    tpdBoxInfoLancioTitolo: {
      __mfeName__: "tpdBoxInfoLancioTitolo",
      devClientPort: 3047,
      devServerPort: 3047,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Box_Info_Lancio_Titolo",
        uniqueName: "unipolSai.portlet.lancioBoxInfoMenu",
        title: "Contenitore_Servizi_Cliente",
      },
    },
    tpdHighlightEmpty: {
      __mfeName__: "tpdHighlightEmpty",
      devClientPort: 3048,
      devServerPort: 3048,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Highlight_empty",
        uniqueName: "unipolSai.portlet.prodottoHighlight",
        title: "Lancio_Highlight",
      },
    },
    tpdLocatorSemplice: {
      __mfeName__: "tpdLocatorSemplice",
      devClientPort: 3049,
      devServerPort: 3049,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Locator_Semplice",
        uniqueName: "unipolSai.portlet.locatorSemplice",
        title: "Locator_Semplice",
      },
    },
    tpdLancioEmpty: {
      __mfeName__: "tpdLancioEmpty",
      devClientPort: 3050,
      devServerPort: 3050,
    },
    tpdDataLayerGeneric: {
      __mfeName__: "tpdDataLayerGeneric",
      devClientPort: 3052,
      devServerPort: 3052,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / DataLayer / PT_DataLayer_Generic",
        uniqueName: "unipolSai.portlet.dataLayerGeneric",
        title: "DataLayer_Generic",
      },
    },
    tpdTastoIndietro: {
      __mfeName__: "tpdTastoIndietro",
      devClientPort: 3053,
      devServerPort: 3053,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Tasto_Indietro",
        uniqueName: "unipolSai.portlet.tastoIndietro",
        title: "Tasto_Indietro",
      },
    },
    tpdHeaderSecondoLivello: {
      __mfeName__: "tpdHeaderSecondoLivello",
      devClientPort: 3054,
      devServerPort: 3054,
      mfePriority: 2000,
      portlet: {
        path: "UnipolSai-Disegno-HomePageAreaRiservata / PT_header_secondo_livello",
        uniqueName:
          "unipolsai.areariservata.homepageareariservata.headersecondolivello",
        title: "Header_Secondo_Livello",
      },
    },
    tpdLancioProdotto: {
      __mfeName__: "tpdLancioProdotto",
      devClientPort: 3055,
      devServerPort: 3055,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio_Prodotto",
        uniqueName: "unipolSai.portlet.lancioProdotto",
        title: "Lancio_Prodotto",
      },
    },
    tpdTestoDiCortesia: {
      __mfeName__: "tpdTestoDiCortesia",
      devClientPort: 3056,
      devServerPort: 3056,
      portlet: {
        path: "UnipolSai-Disegno-HomePageAreaRiservata / PT_testo_di_cortesia",
        uniqueName: "unipolSai.portlet.testoDiCortesia",
        title: "testo_di_cortesia",
      },
    },
    tpdVariazioniDatiAgenziali: {
      __mfeName__: "tpdVariazioniDatiAgenziali",
      devClientPort: 3057,
      devServerPort: 3057,
      portlet: {
        path: "UnipolSai-Disegno-VariazioniDatiAgenziali / PT_Variazioni_Dati_Agenziali",
        uniqueName: "unipolSai.portlet.variazioniDatiAgenzia",
        title: "Variazioni_Dati_Agenzia",
      },
    },
    tpdListaPreventivi: {
      __mfeName__: "tpdListaPreventivi",
      devClientPort: 3059,
      devServerPort: 3059,
      portlet: {
        path: "UnipolSai-Disegno-Preventivi / PT_lista_preventivi",
        uniqueName: "unipolSai.portlet.preventiviPolizze",
        title: "Preventivi_Polizze",
      },
    },
    tpdVenditaIbridaLandingSticky: {
      __mfeName__: "tpdVenditaIbridaLandingSticky",
      devClientPort: 3061,
      devServerPort: 3061,
      portlet: {
        path: "UnipolSai-Disegno-Vendita-Ibrida / PT_Vendita_Ibrida_Landing_Sticky",
        uniqueName: "unipolSai.portlet.VenditaIbridaLandingSticky",
        title: "Vendita_Ibrida_Landing_Sticky",
      },
    },
    tpdWidgetImmagine: {
      __mfeName__: "tpdWidgetImmagine",
      devClientPort: 3065,
      devServerPort: 3065,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_Widget_Immagine",
        uniqueName: "unipolSai.portlet.widgetImmagine",
        title: "Widget_Immagine",
      },
    },
    tpdAzioniRapide: {
      __mfeName__: "tpdAzioniRapide",
      devClientPort: 3066,
      devServerPort: 3066,
      portlet: {
        path: "UnipolSai-Disegno-HomePageAreaRiservata / PT_azioni_rapide",
        uniqueName:
          "nipolsai.areariservata.homewidget.azionirapideareariservata",
        title: "Azioni_Rapide_Area_Riservata",
      },
    },
    tpdUltimoSinistro: {
      __mfeName__: "tpdUltimoSinistro",
      devClientPort: 3067,
      devServerPort: 3067,
      portlet: {
        path: "UnipolSai-Disegno-Area-Riservata / PT_ultimo_sinistro",
        uniqueName: "unipolSai.portlet.ultimoSinistro",
        title: "Ultimo_sinistro",
      },
    },
    tpdSchemaOrg: {
      __mfeName__: "tpdSchemaOrg",
      devClientPort: 3068,
      devServerPort: 3068,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_SchemaOrg",
        uniqueName: "unipolSai.portlet.schemaOrg",
        title: "SchemaOrg",
      },
    },
    tpdITuoiDispositiviTelematici: {
      __mfeName__: "tpdITuoiDispositiviTelematici",
      devClientPort: 3069,
      devServerPort: 3069,
      portlet: {
        path: "UnipolSai-Disegno-HomePageAreaRiservata / PT_i_tuoi_dispositivi_telematici",
        uniqueName:
          "unipolsai.areariservata.homewidget.ituoidispositivitelematici",
        title: "I_Tuoi_Dispositivi_Telematici",
      },
    },
    tpdTesto: {
      __mfeName__: "tpdTesto",
      devClientPort: 3070,
      devServerPort: 3070,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Testo",
        uniqueName: "unipolSai.portlet.hpTesto",
        title: "Testo_Centrato",
      },
    },
    tpdTelepedaggioWidgetAreaRiservata: {
      __mfeName__: "tpdTelepedaggioWidgetAreaRiservata",
      devClientPort: 3071,
      devServerPort: 3071,
      portlet: {
        path: "UnipolSai-Disegno-Telepedaggio / PT_Telepedaggio_Widget_Area_Riservata",
        uniqueName: "unipolSai.portlet.telepedaggioAreaRiservata",
        title: "Telepedaggio_Widget_Area_Riservata",
      },
    },
    tpdFaqList: {
      __mfeName__: "tpdFaqList",
      devClientPort: 3075,
      devServerPort: 3075,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_FAQ_List",
        uniqueName: "unipolSai.portlet.FAQList",
        title: "FAQ_List",
      },
    },
    tpdToolDiConsulenza: {
      __mfeName__: "tpdToolDiConsulenza",
      devClientPort: 3076,
      devServerPort: 3076,
      portlet: {
        path: "UnipolSai-Disegno-ConsulenzaPersone / PT_tool_di_consulenza",
        uniqueName:
          "unipolsai.areariservata.consulPersoneWidget.tooldiconsulenza",
        title: "Tool_Di_Consulenza",
      },
    },
    tpdWebCauzione: {
      __mfeName__: "tpdWebCauzione",
      devClientPort: 3077,
      devServerPort: 3077,
      portlet: {
        path: "UnipolSai-Disegno-HomePageAreaRiservata / PT_web_cauzione",
        uniqueName: "unipolsai.areariservata.homewidget.webcauzioni",
        title: "Web_Cauzioni",
      },
    },
    tpdListingLinkEmpty: {
      __mfeName__: "tpdListingLinkEmpty",
      devClientPort: 3026,
      devServerPort: 3026,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Listing_Link_Empty",
        uniqueName: "unipolSai.portlet.listingBoxLink",
        title: "Listing_Box_Link",
      },
    },
    tpdVisoreEmpty: {
      __mfeName__: "tpdVisoreEmpty",
      devClientPort: 3043,
      devServerPort: 3043,
      mfePriority: 1900,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Visore_Empty",
        uniqueName: "unipolSai.portlet.visore",
        title: "Contenitore_Carosello_Visore",
      },
    },
    tpdResetPassword: {
      __mfeName__: "tpdResetPassword",
      devClientPort: 3089,
      devServerPort: 3089,
      portlet: {
        path: "UnipolSai-Disegno-SelfRegistration / PT_reset_password",
        uniqueName:
          "unipolsai.areapubblica.selfregistration.confermaresetpassword",
        title: "Conferma_Reset_Password",
      },
    },
    tpdConvenzioniMultiple: {
      __mfeName__: "tpdConvenzioniMultiple",
      devClientPort: 3090,
      devServerPort: 3090,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Convenzioni_Multiple",
        uniqueName: "unipolSai.portlet.convenzioniMultiple",
        title: "Convenzioni_Multiple",
      },
    },
    tpdComarketingTestoImmagine: {
      __mfeName__: "tpdComarketingTestoImmagine",
      devClientPort: 3091,
      devServerPort: 3091,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Testo_Immagine_Btn",
        uniqueName: "unipolSai.portlet.testoImmagineBtn",
        title: "Comarketing_Testo_Immagine",
      },
    },
    tpdScaricaDocumentiComarketing: {
      __mfeName__: "tpdScaricaDocumentiComarketing",
      devClientPort: 3092,
      devServerPort: 3092,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_DocumentiComarketing",
        uniqueName: "unipolSai.portlet.scaricaDocumentiComarketing",
        title: "Scarica_Documenti_Comarketing",
      },
    },
    tpdDataLayerComarketing: {
      __mfeName__: "tpdDataLayerComarketing",
      devClientPort: 3093,
      devServerPort: 3093,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / DataLayer / PT_DataLayer_Comarketing",
        uniqueName: "unipolSai.portlet.dataLayerComarketing",
        title: "DataLayer_Comarketing",
      },
    },
    tpdTestoBtn: {
      __mfeName__: "tpdTestoBtn",
      devClientPort: 3094,
      devServerPort: 3094,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Testo_Btn",
        uniqueName: "unipolSai.portlet.testoBtn",
        title: "Comarketing_Testo",
      },
    },
    tpdMappaSpecifica: {
      __mfeName__: "tpdMappaSpecifica",
      devClientPort: 3095,
      devServerPort: 3095,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Mappa_Specifica",
        uniqueName: "unipolSai.portlet.mappaSpecifica",
        title: "Mappa_Specifica",
      },
    },
    tpdCertificatoAssicurazione: {
      __mfeName__: "tpdCertificatoAssicurazione",
      devClientPort: 3096,
      devServerPort: 3096,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Certificato_Assicurazione",
        uniqueName: "unipolSai.portlet.certificatoAssicurazione",
        title: "Certificato Assicurazione",
      },
    },
    tpdBlocchiCtaEmpty: {
      __mfeName__: "tpdBlocchiCtaEmpty",
      devClientPort: 3097,
      devServerPort: 3097,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Blocchi_CTA_Empty",
        uniqueName: "unipolSai.portlet.blocchiCTA",
        title: "Lancio_Blocchi_CTA",
      },
    },
    tpdLancio: {
      __mfeName__: "tpdLancio",
      devClientPort: 3098,
      devServerPort: 3098,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio",
        uniqueName: "unipolSai.portlet.lancio",
        title: "Lancio_Tipo_Convenzione",
      },
    },
    tpdSelettore: {
      __mfeName__: "tpdSelettore",
      devClientPort: 3099,
      devServerPort: 3099,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Selettore",
        uniqueName: "unipolSai.portlet.selettore",
        title: "Selettore",
      },
    },
    tpdLancioConvenzioniEmpty: {
      __mfeName__: "tpdLancioConvenzioniEmpty",
      devClientPort: 3100,
      devServerPort: 3100,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio_Convenzioni_Empty",
        uniqueName: "unipolSai.portlet.lancioConvenzioniEmpty",
        title: "Menu_Convenzioni_Figlie",
      },
    },
    tpdVisoreProdotto: {
      __mfeName__: "tpdVisoreProdotto",
      devClientPort: 3101,
      devServerPort: 3101,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Visore_Prodotto",
        uniqueName: "unipolSai.portlet.visoreProdotto",
        title: "Visore_Prodotto",
      },
    },
    tpdLancioConvenzioni: {
      __mfeName__: "tpdLancioConvenzioni",
      devClientPort: 3102,
      devServerPort: 3102,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio_Convenzioni",
        uniqueName: "unipolSai.portlet.lancioConvenzioni",
        title: "Lancio_Convenzioni",
      },
    },
    tpdGiftCardGarmin: {
      __mfeName__: "tpdGiftCardGarmin",
      devClientPort: 3103,
      devServerPort: 3103,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Gift_Card_Garmin",
        uniqueName: "unipolsai.portlet.giftCardGarmin",
        title: "Gift_Card_Garmin",
      },
    },
    tpdTastoIndietroMulticoloreCategoria: {
      __mfeName__: "tpdTastoIndietroMulticoloreCategoria",
      devClientPort: 3104,
      devServerPort: 3104,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_Tasto_Indietro_Multicolore_Categoria",
        uniqueName: "unipolSai.portlet.tastoIndietroMulticoloreCategoria",
        title: "Tasto_Indietro_Multicolore_Categoria",
      },
    },
    tpdTitoloSottotioloMulticoloreCategoria: {
      __mfeName__: "tpdTitoloSottotioloMulticoloreCategoria",
      devClientPort: 3105,
      devServerPort: 3105,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_Titolo_Sottotiolo_Multicolore_Categoria",
        uniqueName: "unipolSai.portlet.titoloSottotioloMulticoloreCategoria",
        title: "Titolo_Sottotiolo_Multicolore_Categoria",
      },
    },
    tpdListingEmpty: {
      __mfeName__: "tpdListingEmpty",
      devClientPort: 3106,
      devServerPort: 3106,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Listing_empty",
        uniqueName: "unipolSai.portlet.listingBox",
        title: "Listing_Box",
      },
    },
    tpdVisoreAperturaEmpty: {
      __mfeName__: "tpdVisoreAperturaEmpty",
      devClientPort: 3107,
      devServerPort: 3107,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_Visore_Apertura_Empty",
        uniqueName: "unipolSai.portlet.visoreAperturaUtileSapersi",
        title: "Contenitore_Visore_Apertura_Utile_A_Sapersi",
      },
    },
    tpdLancioUtileASapersi: {
      __mfeName__: "tpdLancioUtileASapersi",
      devClientPort: 3153,
      devServerPort: 3153,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_Lancio_Utile_A_Sapersi",
        uniqueName: "unipolSai.portlet.primoLancioUtileSapersi",
        title: "Primo_Lancio_Utile_A_Sapersi",
      },
    },
    tpdLancioUtileASapersiCategoria: {
      __mfeName__: "tpdLancioUtileASapersiCategoria",
      devClientPort: 3108,
      devServerPort: 3108,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_Lancio_Utile_A_Sapersi_Categoria",
        uniqueName: "unipolSai.portlet.lancioUtileSapersiCategoria",
        title: "Lancio_Utile_A_Sapersi_Categoria",
      },
    },
    tpdPocApertura: {
      __mfeName__: "tpdPocApertura",
      devClientPort: 3109,
      devServerPort: 3109,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_POC_Apertura",
        uniqueName: "unipolSai.portlet.POCApertura",
        title: "POC_Apertura",
      },
    },
    tpdTestoMultiploPreventivatoreAuto: {
      __mfeName__: "tpdTestoMultiploPreventivatoreAuto",
      devClientPort: 3110,
      devServerPort: 3110,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Testo_Multiplo_Preventivatore_Auto",
        uniqueName: "unipolSai.portlet.testoMultiploPreventivatoreAuto",
        title: "Testo_Multiplo_Preventivatore_Auto",
      },
    },
    tpdCtaPrecSucc: {
      __mfeName__: "tpdCtaPrecSucc",
      devClientPort: 3111,
      devServerPort: 3111,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_CTA_Prec_Succ",
        uniqueName: "unipolSai.portlet.ctaPrecSucc",
        title: "CTA_Prec_Succ",
      },
    },
    tpdSoccorsoAssistenzaPas: {
      __mfeName__: "tpdSoccorsoAssistenzaPas",
      devClientPort: 3112,
      devServerPort: 3112,
      portlet: {
        path: "UnipolSai-Disegno-AssistenzaPAS / PT_soccorso_assistenza_PAS",
        uniqueName: "unipolSai.portlet.soccorsoAutoPas",
        title: "Soccorso_Auto_PAS",
      },
    },
    tpdAssenzaPasNumeriUtili: {
      __mfeName__: "tpdAssenzaPasNumeriUtili",
      devClientPort: 3113,
      devServerPort: 3113,
      portlet: {
        path: "UnipolSai-Disegno-AssistenzaPAS / PT_assenza_PAS_numeri_utili",
        uniqueName: "unipolSai.portlet.numeriUtiliPas",
        title: "Numeri_Utili_PAS",
      },
    },
    tpdSchedaComparativaTitle: {
      __mfeName__: "tpdSchedaComparativaTitle",
      devClientPort: 3114,
      devServerPort: 3114,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Scheda_Comparativa_Title",
        uniqueName: "unipolSai.portlet.prodottoSchedaComparativa",
        title: "Scheda_Comparativa",
      },
    },
    tpdSamsungPay: {
      __mfeName__: "tpdSamsungPay",
      devClientPort: 3115,
      devServerPort: 3115,
      portlet: {
        path: "UnipolSai-Disegno-Quotatori / PT_Samsung_Pay",
        uniqueName: "unipolSai.portlet.Samsung_Pay",
        title: "Samsung_Pay",
      },
    },
    tpdRisultatiRicerca: {
      __mfeName__: "tpdRisultatiRicerca",
      devClientPort: 3116,
      devServerPort: 3116,
      portlet: {
        path: "UnipolSai-Disegno-Ricerca / PT_Risultati_Ricerca",
        uniqueName: "unipolSai.portlet.risultatiRicerca",
        title: "Risultati_Ricerca",
      },
    },
    tpdComandiSocial: {
      __mfeName__: "tpdComandiSocial",
      devClientPort: 3118,
      devServerPort: 3118,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Utile a Sapersi / PT_Comandi_Social",
        uniqueName: "unipolSai.portlet.comandiSocial",
        title: "Comandi_Social",
      },
    },
    tpdLocatorDetail: {
      __mfeName__: "tpdLocatorDetail",
      devClientPort: 3119,
      devServerPort: 3119,
      portlet: {
        path: "UnipolSai-Disegno-Locator / PT_Locator_Detail",
        uniqueName: "unipolSai.portlet.locatorDetail",
        title: "Dettaglio_Locator",
      },
    },
    tpdCambioIconaTrovaAg: {
      __mfeName__: "tpdCambioIconaTrovaAg",
      devClientPort: 3120,
      devServerPort: 3120,
      portlet: {
        path: "UnipolSai-Disegno-Locator / PT_Cambio_Icona_Trova_Ag",
        uniqueName: "unipolSai.portlet.cambioIconaTrovaAg",
        title: "Cambio_Icona_Trova_Agenzia",
      },
    },
    tpdInformazioniContattiEmpty: {
      __mfeName__: "tpdInformazioniContattiEmpty",
      devClientPort: 3121,
      devServerPort: 3121,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Informazioni_Contatti_Empty",
        uniqueName: "unipolSai.portlet.informazioniContatti",
        title: "Contenitore_Informazioni_Contatti",
      },
    },
    tpdLancioReclamoEmpty: {
      __mfeName__: "tpdLancioReclamoEmpty",
      devClientPort: 3122,
      devServerPort: 3122,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio_Reclamo_Empty",
        uniqueName: "unipolSai.portlet.lancioReclamo",
        title: "Lancio_Reclamo",
      },
    },
    tpdLancioQuotazioniEmpty: {
      __mfeName__: "tpdLancioQuotazioniEmpty",
      devClientPort: 3123,
      devServerPort: 3123,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Lancio_Quotazioni_Empty",
        uniqueName: "unipolSai.portlet.quotazioniLancio",
        title: "Contenitore_Lancio_Quotazioni",
      },
    },
    tpdLancioUnitLinked: {
      __mfeName__: "tpdLancioUnitLinked",
      devClientPort: 3124,
      devServerPort: 3124,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Lancio_Unit_Linked",
        uniqueName: "unipolSai.portlet.lancioUnitLinked",
        title: "Lancio_Unit_Linked",
      },
    },
    tpdFondiPensioneApertiSearch: {
      __mfeName__: "tpdFondiPensioneApertiSearch",
      devClientPort: 3125,
      devServerPort: 3125,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Fondi_Pensione_Aperti_Search",
        uniqueName: "unipolSai.portlet.fondiPensioneApertiSearch",
        title: "Fondi_Pensione_Aperti_Search",
      },
    },
    tpdListaDocumentiShortTitle: {
      __mfeName__: "tpdListaDocumentiShortTitle",
      devClientPort: 3126,
      devServerPort: 3126,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Lista_Documenti_Short_Title",
        uniqueName: "unipolSai.portlet.listaDocumentiShort",
        title: "Lista_Documenti_Short",
      },
    },
    tpdFondiPensioneAperti: {
      __mfeName__: "tpdFondiPensioneAperti",
      devClientPort: 3127,
      devServerPort: 3127,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Fondi_Pensione_Aperti",
        uniqueName: "unipolSai.portlet.fondiPensioneApertiSearch",
        title: "Fondi_Pensione_Aperti_Search",
      },
    },
    tpdLancioGestioniSeparate: {
      __mfeName__: "tpdLancioGestioniSeparate",
      devClientPort: 3128,
      devServerPort: 3128,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Lancio_Gestioni_Separate",
        uniqueName: "unipolSai.portlet.lancioGestioniSeparate",
        title: "Lancio_Gestioni_Separate",
      },
    },
    tpdListaDocumentiQuotazioniEmpty: {
      __mfeName__: "tpdListaDocumentiQuotazioniEmpty",
      devClientPort: 3129,
      devServerPort: 3129,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Lista_Documenti_Quotazioni_Empty",
        uniqueName: "unipolSai.portlet.listaDocumentiQuotazioni",
        title: "Lista_Documenti_Quotazioni",
      },
    },
    tpdGestioniSeparate: {
      __mfeName__: "tpdGestioniSeparate",
      devClientPort: 3130,
      devServerPort: 3130,
      portlet: {
        path: "UnipolSai-Disegno-QuotazioniRendiconti / PT_Gestioni_Separate",
        uniqueName: "unipolSai.portlet.gestioniSeparate",
        title: "Gestioni_Separate",
      },
    },
    tpdOverVisore: {
      __mfeName__: "tpdOverVisore",
      devClientPort: 3131,
      devServerPort: 3131,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Over_Visore",
        uniqueName: "unipolSai.portlet.overVisore",
        title: "Over_Visore",
      },
    },
    tpdLanciSinistriSmall: {
      __mfeName__: "tpdLanciSinistriSmall",
      devClientPort: 3132,
      devServerPort: 3132,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Sinistri / PT_Lanci_Sinistri_Small",
        uniqueName: "unipolSai.portlet.lanciSinistriSmall",
        title: "Lanci_Sinistri_Small",
      },
    },
    tpdFaiUnaDomanda: {
      __mfeName__: "tpdFaiUnaDomanda",
      devClientPort: 3133,
      devServerPort: 3133,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Fai_Una_Domanda",
        uniqueName: "unipolSai.portlet.faiUnaDomanda",
        title: "Fai_Una_Domanda",
      },
    },
    tpdMainBoxSinistri: {
      __mfeName__: "tpdMainBoxSinistri",
      devClientPort: 3135,
      devServerPort: 3135,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Sinistri / PT_Main_Box_Sinistri",
        uniqueName: "unipolSai.portlet.mainBoxSinistri",
        title: "Main_Box_Sinistri",
      },
    },
    tpdServiziClienteEmpty: {
      __mfeName__: "tpdServiziClienteEmpty",
      devClientPort: 3137,
      devServerPort: 3137,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Sinistri / PT_Servizi_Cliente_Empty",
        uniqueName: "unipolSai.portlet.listaServiziAlCliente",
        title: "Lista_Servizi_Cliente",
      },
    },
    tpdConvenzioniProdottiEmpty: {
      __mfeName__: "tpdConvenzioniProdottiEmpty",
      devClientPort: 3150,
      devServerPort: 3150,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Convenzioni_Prodotto_Empty",
        uniqueName: "unipolSai.portlet.convenzioniProdotto",
        title: "Convenzioni",
      },
    },
    tpdFaqEsempi: {
      __mfeName__: "tpdFaqEsempi",
      devClientPort: 3151,
      devServerPort: 3151,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / FAQ / PT_FAQ_Esempi",
        uniqueName: "unipolSai.portlet.faqConEsempi",
        title: "FAQ_Con_Esempi",
      },
    },
    tpdSpallaDestra: {
      __mfeName__: "tpdSpallaDestra",
      devClientPort: 3079,
      devServerPort: 3079,
    },
    tpdRichTextConSfondoLogin: {
      __mfeName__: "tpdRichTextConSfondoLogin",
      devClientPort: 3154,
      devServerPort: 3154,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Rich_Text_con_sfondo_Login",
        uniqueName: "unipolSai.portlet.richTextConSfondoLogin",
        title: "Rich_Text_con_sfondo_Login",
      },
    },
    tpdTelepedaggioPolizzeCollettiveUT: {
      __mfeName__: "tpdTelepedaggioPolizzeCollettiveUT",
      devClientPort: 3155,
      devServerPort: 3155,
      portlet: {
        path: "UnipolSai-Disegno-Telepedaggio / PT_Telepedaggio_Polizze_Collettive_UT",
        uniqueName: "unipolSai.portlet.telepedaggioPolizzeCollettiveUT",
        title: "Telepedaggio_Polizze_Collettive_UT",
      },
    },
    tpdMenuSinistriDenunciaSelezionato: {
      __mfeName__: "tpdMenuSinistriDenunciaSelezionato",
      devClientPort: 3156,
      devServerPort: 3156,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_scelta_menu_denuncia_selezionato",
        uniqueName: "unipolsai.areariservata.sinistri.sceltamenudenuncia",
        title: "Menu_Scelta_Sinistri_Denuncia_Selezionato",
      },
    },
    tpdDenunceInviate: {
      __mfeName__: "tpdDenunceInviate",
      devClientPort: 3157,
      devServerPort: 3157,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_denunce_inviate",
        uniqueName: "unipolsai.areariservata.sinistri.denunceinviate",
        title: "Denunce_Inviate",
      },
    },
    tpdBoxDubbi: {
      __mfeName__: "tpdBoxDubbi",
      devClientPort: 3158,
      devServerPort: 3158,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_box_dubbi",
        uniqueName: "unipolsai.areariservata.sinistri.boxdubbi",
        title: "Box_Dubbi_Documenti_Utili_Sinistri",
      },
    },
    tpdBoxAiuto: {
      __mfeName__: "tpdBoxAiuto",
      devClientPort: 3159,
      devServerPort: 3159,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_box_aiuto",
        uniqueName: "unipolsai.areariservata.sinistri.boxaiuto",
        title: "Box_Aiuto",
      },
    },
    tpdBoxInformativoVerde: {
      __mfeName__: "tpdBoxInformativoVerde",
      devClientPort: 3160,
      devServerPort: 3160,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_box_incidente",
        uniqueName: "unipolsai.areariservata.sinistri.boxincidente",
        title: "Box_informativo_verde",
      },
    },
    tpdIncidenteDueVeicoli: {
      __mfeName__: "tpdIncidenteDueVeicoli",
      devClientPort: 3161,
      devServerPort: 3161,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_due_veicoli",
        uniqueName: "unipolsai.areariservata.sinistri.dueveicoli",
        title: "Incidente_Due_Veicoli",
      },
    },
    tpdAprirePraticaComeContare: {
      __mfeName__: "tpdAprirePraticaComeContare",
      devClientPort: 3162,
      devServerPort: 3162,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_box_contare",
        uniqueName: "unipolsai.areariservata.sinistri.boxcontare",
        title: "Aprire_Pratica_Come_Contare",
      },
    },
    tpdSinistriAltriCasi: {
      __mfeName__: "tpdSinistriAltriCasi",
      devClientPort: 3163,
      devServerPort: 3163,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_box_altri_casi",
        uniqueName: "unipolsai.areariservata.sinistri.boxaltricasi",
        title: "Sinistri_Altri_Casi",
      },
    },
    tpdBoxInformativoVerdeConPulsante: {
      __mfeName__: "tpdBoxInformativoVerdeConPulsante",
      devClientPort: 3164,
      devServerPort: 3164,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_box_visualizza_sinistri",
        uniqueName: "unipolsai.areariservata.sinistri.boxvisualizzasinistri",
        title: "Box_informativo_verde_con_pulsante",
      },
    },
    tpdTrackingSinistri: {
      __mfeName__: "tpdTrackingSinistri",
      devClientPort: 3165,
      devServerPort: 3165,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_tracking_sinistri",
        uniqueName: "unipolsai.areariservata.sinistri.trackingsinistri",
        title: "Tracking_Sinistri",
      },
    },
    tpdConfermaInvio: {
      __mfeName__: "tpdConfermaInvio",
      devClientPort: 3166,
      devServerPort: 3166,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_conferma_invio_sinistro",
        uniqueName: "unipolsai.areariservata.sinistri.confermainviosinistro",
        title: "Conferma_Invio_Sinistro",
      },
    },
    tpdRiepilogoDenuncia: {
      __mfeName__: "tpdRiepilogoDenuncia",
      devClientPort: 3167,
      devServerPort: 3167,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_riepilogo_denuncia",
        uniqueName: "unipolsai.areariservata.sinistri.riepilogodenuncia",
        title: "Riepilogo_Denuncia",
      },
    },
    tpdCardPassiviNegazioneSinistro: {
      __mfeName__: "tpdCardPassiviNegazioneSinistro",
      devClientPort: 3168,
      devServerPort: 3168,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_negazione_sinistro",
        uniqueName:
          "unipolsai.areariservata.sinistri.trackingsinistri.negazionesinistro",
        title: "CardPassivi_negazione_sinistro",
      },
    },
    tpdCpmPrenotazioneVisita: {
      __mfeName__: "tpdCpmPrenotazioneVisita",
      devClientPort: 3169,
      devServerPort: 3169,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_prenotazione_visita",
        uniqueName:
          "unipolsai.areariservata.sinistri.trackingsinistri.prenotazionevisita",
        title: "CPM_prenotazione_visita",
      },
    },
    tpdCpmRiepilogoVisita: {
      __mfeName__: "tpdCpmRiepilogoVisita",
      devClientPort: 3170,
      devServerPort: 3170,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_riepilogo_visita",
        uniqueName:
          "unipolsai.areariservata.sinistri.trackingsinistri.riepilogovisita",
        title: "CPM_riepilogo_visita",
      },
    },
    tpdPreaperturaSteps: {
      __mfeName__: "tpdPreaperturaSteps",
      devClientPort: 3171,
      devServerPort: 3171,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_preapertura_steps",
        uniqueName: "unipolsai.areariservata.sinistri.preaperturasteps",
        title: "Preapertura_Steps",
      },
    },
    tpdTargheSinistri: {
      __mfeName__: "tpdTargheSinistri",
      devClientPort: 3172,
      devServerPort: 3172,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_targhe_sinistri",
        uniqueName: "unipolsai.areariservata.sinistri.targhe",
        title: "Targhe_Sinistri",
      },
    },
    tpdCardPassiviModificaVersioneControparte: {
      __mfeName__: "tpdCardPassiviModificaVersioneControparte",
      devClientPort: 3173,
      devServerPort: 3173,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_modifica_versione_controparte",
        uniqueName:
          "unipolsai.areariservata.sinistri.trackingsinistri.modifica_versione_controparte",
        title: "CardPassivi_modifica_versione_controparte",
      },
    },
    tpdLaTuaAgenziaSinistri: {
      __mfeName__: "tpdLaTuaAgenziaSinistri",
      devClientPort: 3174,
      devServerPort: 3174,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_la_tua_agenzia_sinistri",
        uniqueName: "unipolsai.areariservata.sinistri.latuaagenzia",
        title: "La_Tua_Agenzia_Sinistri",
      },
    },
    tpdSuperUser: {
      __mfeName__: "tpdSuperUser",
      devClientPort: 3179,
      devServerPort: 3179,
      portlet: {
        path: "UnipolSai - Disegno - SuperUser / PT_SuperUser",
        uniqueName: "unipolsai.areariservata.home.superuser",
        title: "Super_User",
      },
    },
    tpdValidazioneOtp: {
      __mfeName__: "tpdValidazioneOtp",
      devClientPort: 3183,
      devServerPort: 3183,
      portlet: {
        path: "UnipolSai-Disegno-Telematici / PT_validazione_otp",
        uniqueName: "unipolsai.areariservata.telematici.validazioneotp",
        title: "Validazione_Otp",
      },
    },
    tpdListaProdottiEmpty: {
      __mfeName__: "tpdListaProdottiEmpty",
      devClientPort: 3197,
      devServerPort: 3197,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lista_Prodotti_Empty",
        uniqueName: "unipolSai.portlet.listaProdotti",
        title: "Lista Prodotti",
      },
    },
    tpdBoxCommercio: {
      __mfeName__: "tpdBoxCommercio",
      devClientPort: 3186,
      devServerPort: 3186,
      portlet: {
        path: "UnipolSai-Disegno-Telematici / PT_box_commercio",
        uniqueName: "unipolsai.areariservata.telematica.casacommercio",
        title: "Casa_Commercio",
      },
    },
    tpdNotificheCommerciali: {
      __mfeName__: "tpdNotificheCommerciali",
      devClientPort: 3189,
      devServerPort: 3189,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Notifiche commerciali / PT_notifiche_commerciali",
        uniqueName: "unipolsai.areapubblica.notifichecommerciali",
        title: "Notifiche_Commerciali",
      },
    },
    tpdGestioneUtenzeAziendali: {
      __mfeName__: "tpdGestioneUtenzeAziendali",
      devClientPort: 3176,
      devServerPort: 3176,
      portlet: {
        path: "UnipolSai-Disegno-Account / PT_gestione_utenze_aziendali",
        uniqueName: "unipolsai.areariservata.gestioneutenzeaziendali",
        title: "Gestione_Utenze_Aziendali",
      },
    },
    tpdPrivacyBanner: {
      __mfeName__: "tpdPrivacyBanner",
      devClientPort: 3177,
      devServerPort: 3177,
      portlet: {
        path: "UnipolSai-Disegno-Account / PT_privacy_login_banner",
        uniqueName: "unipolsai.areariservata.privacyLoginBanner",
        title: "Privacy_Login_Banner",
      },
    },
    tpdPrivacyPage: {
      __mfeName__: "tpdPrivacyPage",
      devClientPort: 3178,
      devServerPort: 3178,
      portlet: {
        path: "UnipolSai-Disegno-Account / PT_privacy_login_content",
        uniqueName: "unipolsai.areariservata.privacylogincontent",
        title: "Privacy_Login_Content",
      },
    },
    tpdPresentazioneAgenzia: {
      __mfeName__: "tpdPresentazioneAgenzia",
      devClientPort: 3180,
      devServerPort: 3180,
      portlet: {
        path: "UnipolSai-Disegno-Account / PT_Presentazione_Agenzia",
        uniqueName: "unipolsai.areariservata.account.presentazione_agenzia",
        title: "Prestazione_Agenzia",
      },
    },
    tpdPagamentoRinnovoPolizza: {
      __mfeName__: "tpdPagamentoRinnovoPolizza",
      devClientPort: 3195,
      devServerPort: 3195,
      portlet: {
        path: "UnipolSai-Disegno-Polizze / PT_pagamento_rinnovo_polizza",
        uniqueName: "unipolsai.areariservata.polizze.pagamentopolizza",
        title: "Pagamento_Rinnovo_Polizza",
      },
    },
    tpdInformativaRinnovoPolizza: {
      __mfeName__: "tpdInformativaRinnovoPolizza",
      devClientPort: 3196,
      devServerPort: 3196,
      portlet: {
        path: "UnipolSai-Disegno-Polizze / PT_informativa_rinnovo_polizza",
        uniqueName: "unipolsai.areariservata.polizze.informativapolizza",
        title: "Informativa_Rinnovo_Polizza",
      },
    },
    tpdArCompletamentoRegistrazione: {
      __mfeName__: "tpdArCompletamentoRegistrazione",
      devClientPort: 3198,
      devServerPort: 3198,
      portlet: {
        path: "UnipolSai-Disegno-Area-Riservata / PT_Completamento_Registrazione",
        uniqueName: "unipolsai.areariservata.completamento.registrazione",
        title: "Completamento Registrazione",
      },
    },
    tpdValidazioneEmail: {
      __mfeName__: "tpdValidazioneEmail",
      devClientPort: 3199,
      devServerPort: 3199,
      portlet: {
        path: "UnipolSai-Disegno-Account / PT_Validazione_Email",
        uniqueName: "unipolsai.areapubblica.cambiousername",
        title: "Cambio_Username",
      },
    },
    tpdMenuSinistriTrackingSelezionato: {
      __mfeName__: "tpdMenuSinistriTrackingSelezionato",
      devClientPort: 3201,
      devServerPort: 3201,
      portlet: {
        path: "UnipolSai-Disegno-Sinistri / PT_scelta_menu_tracking_selezionato",
        uniqueName: "unipolsai.areariservata.sinistri.sceltamenutracking",
        title: "Menu_Scelta_Sinistri_Tracking_Selezionato",
      },
    },
    tpdAggiornaProfilo: {
      __mfeName__: "tpdAggiornaProfilo",
      devClientPort: 3200,
      devServerPort: 3200,
      portlet: {
        path: "UnipolSai-Disegno-Account / PT_aggiorna_profilo",
        uniqueName: "unipolsai.areariservata.aggiornaprofilo",
        title: "Aggiorna_Profilo",
      },
    },
    tpdAggiornaProfiloEsiti: {
      __mfeName__: "tpdAggiornaProfiloEsiti",
      devClientPort: 3192,
      devServerPort: 3192,
      portlet: {
        path: "UnipolSai-Disegno-Account / PT_aggiorna_profilo_esiti",
        uniqueName: "unipolsai.areariservata.aggiornaprofiloesiti",
        title: "Aggiorna_Profilo_Esiti",
      },
    },
    tpdSitiIntegrati: {
      __mfeName__: "tpdSitiIntegrati",
      devClientPort: 3208,
      devServerPort: 3208,
    },
    tpdListaDocumentiEmpty: {
      __mfeName__: "tpdListaDocumentiEmpty",
      devClientPort: 3224,
      devServerPort: 3224,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / Generic / PT_Lista_Documenti_Empty",
        uniqueName: "unipolSai.portlet.listaDocumenti",
        title: "Lista_Documenti",
      },
    },
    tpdFormSuccesso: {
      __mfeName__: "tpdFormSuccesso",
      devClientPort: 3230,
      devServerPort: 3230,
    },
    tpdLancioUtileASapersiOrdineDescrizione: {
      __mfeName__: "tpdLancioUtileASapersiOrdineDescrizione",
      devClientPort: 3233,
      devServerPort: 3233,
    },
    tpdBoxInformazioniCta: {
      __mfeName__: "tpdBoxInformazioniCta",
      devClientPort: 3231,
      devServerPort: 3231,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Box_Info_CTA",
        uniqueName: "unipolSai.portlet.boxInfoCTA",
        title: "Box_Info_CTA",
      },
    },
    tpdSanicard: {
      __mfeName__: "tpdSanicard",
      devClientPort: 3235,
      devServerPort: 3235,
    },
    tpdLancioReclamo: {
      __mfeName__: "tpdLancioReclamo",
      devClientPort: 3236,
      devServerPort: 3236,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Lancio_Reclamo",
        uniqueName: "unipolSai.portlet.lancioReclamo",
        title: "Lancio_Reclamo",
      },
    },
    tpdIndexLinked: {
      __mfeName__: "tpdIndexLinked",
      devClientPort: 3237,
      devServerPort: 3237,
    },
    tpdConvertionProspect: {
      __mfeName__: "tpdConvertionProspect",
      devClientPort: 3238,
      devServerPort: 3238,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Convertion_Prospect",
        uniqueName: "unipolSai.portlet.convertionProspect",
        title: "Convertion_Prospect",
      },
    },
    tpdBoxInfoLancio: {
      __mfeName__: "tpdBoxInfoLancio",
      devClientPort: 3241,
      devServerPort: 3241,
      portlet: {
        path: "UnipolSai-Disegno-Area-Pubblica / PT_Box_Info_Lancio_Titolo",
        uniqueName: "unipolSai.portlet.lancioBoxInfoMenu",
        title: "Lancio_Servizi_Cliente",
      },
    },

    tpdSconti: {
      __mfeName__: "tpdSconti",
      devClientPort: 3063,
      devServerPort: 3063,
      mfePriority: 1800,
      portlet: {
        path: "UnipolSai-Disegno-ConsulenzaPersone / PT_sconti",
        uniqueName: "unipolsai.areariservata.homewidget.sconticontenitore",
        title: "Sconti_Contenitore",
      },
    },
  }
);

// ******* EXCEPTIONS
settings.tpdSpallaDestra.skipImportingInCMS = false;

export const PRIMARY_REMOTES_SETTINGS = settings;
