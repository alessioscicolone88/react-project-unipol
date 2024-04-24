import { MFE_NAMES } from "./mfeSettings";

export interface PropsSetting {
  [key: string]: PropsConfig;
}

export interface WidgetProps {
  [key: string]: string[];
}

export interface PropsConfig {
  mfeName: string;
  config?: string[];
}

// Da usare per passare al widget le config filtrate dal primary radice (core-remotes) e i menu
// N.B. In caso di array vuoto o chiave non definita non filtra e prende tutte le config del primary radice
export const WIDGETS_FILTERED_CONFIGS: WidgetProps = {
  [MFE_NAMES.tpdRegistrazioneClienti]: [
    "andratuttobeneflag",
    "titolo-header",
    "descrizione-header",
    "testo_tooltip_persona_giuridica",
    "testo_tooltip_persona_fisica",
    "testo_tooltip_cellulare_legale_rappresentante",
    "titolo_step1",
    "titolo_step2",
    "titolo_step3",
    "descrizione_step1",
    "descrizione_step2",
    "descrizione_step3",
  ],
  [MFE_NAMES.tpdBoxAiutoSinistri]: ["abilitazione-ivass"],
  [MFE_NAMES.tpdBoxAltriCasiSinistri]: [
    "abilitazione-ivass",
    "titolo",
    "descrizione",
    "titolo_sezione1",
    "sottotitolo_sezione1",
    "immagine",
    "titolo_sezione2",
    "sottotitolo_sezione2",
    "val_elenco1",
    "val_elenco2",
    "val_elenco3",
    "val_elenco4",
  ],
  [MFE_NAMES.tpdBoxVisualizzaSinistriWidget]: [
    "abilitazione-ivass",
    "titolo",
    "descrizione",
  ],
  [MFE_NAMES.tpdDenunceInviateSinistri]: [
    "abilitazione-ivass",
    "descrizione1",
    "descrizione2",
    "descrizione3_titolo",
    "descrizione3",
  ],
  [MFE_NAMES.tpdTrackingSinistriWidget]: [
    "abilitazione-ivass",
    "titolo_header_tracking_sinistri",
    "descrizione_header_tracking_sinistri_card_passivo",
    "descrizione_header_tracking_sinistri",
    "titolo_info_box_sinistro",
    "descrizione_info_box_sinistro",
  ],
  [MFE_NAMES.tpdVariazioneDatiAgenziali]: ["Descrizione"],
  [MFE_NAMES.tpdNoGaranzia]: ["titolo", "descrizione"],
  [MFE_NAMES.tpdSubmenu]: ["preferenze"],
  [MFE_NAMES.tpdDueVeicoliSinistri]: [
    "abilitazione-ivass",
    "titolo",
    "descrizione",
    "titoloAuto",
    "descrizioneAuto",
    "show-button",
  ],
  [MFE_NAMES.tpdTargheSinistriWidget]: [
    "stxt-title-head",
    "stxt-desc-head",
    "stxt-title-body",
    "stxt-desc-body",
    "show-button",
    "abilitazione-ivass",
  ],
  [MFE_NAMES.tpdBoxContareSinistri]: [
    "abilitazione-ivass",
    "immagine",
    "titolo",
    "indice1",
    "testo1",
    "indice2",
    "testo2",
    "indice3",
    "testo3",
  ],
  [MFE_NAMES.tpdBoxDubbiSinistri]: [
    "abilitazione-ivass",
    "immagine",
    "titolo",
    "sottotitolo1",
    "descrizione1",
    "testobottone1",
    "documento1",
    "sottotitolo2",
    "descrizione2",
    "testobottone2",
    "documento2",
  ],
  [MFE_NAMES.tpdBoxIncidenteSinistri]: [
    "abilitazione-ivass",
    "titolo",
    "descrizione",
  ],
  [MFE_NAMES.tpdConfermaInvioSinistri]: [
    "abilitazione-ivass",
    "descrizione_conferma_invio_card_passivo",
  ],
  [MFE_NAMES.tpdLaTuaAgenziaSinistriWidget]: ["abilitazione-ivass"],
  [MFE_NAMES.tpdMenuSinistri]: ["abilitazione-ivass"],
  [MFE_NAMES.tpdCardPassiviModificaVersioneControparteSinistri]: [
    "abilitazione-ivass",
    "titolo",
    "descrizione",
  ],
  [MFE_NAMES.tpdCardPassiviNegazioneSinistroWidget]: [
    "abilitazione-ivass",
    "titolo_header",
    "descrizione_header",
    "titolo",
    "documentoDisconoscimentoDelFatto",
  ],
  [MFE_NAMES.tpdListaProdottiEmptyWidget]: [
    "categoriaProdotto",
    "titoloCategoria",
  ],
  [MFE_NAMES.tpdSoccorsoAuto]: [
    "soccorsoAutoTitolo",
    "soccorsoAutoDescrizione",
    "immagine",
    "titoloUnibox",
    "soccorsoAutoTitolo",
    "descrizioneUnibox",
  ],
  [MFE_NAMES.tpdPreaperturaStepsSinistri]: ["abilitazione-ivass"],
  [MFE_NAMES.tpdRiepilogoDenunciaSinistri]: ["abilitazione-ivass"],
  [MFE_NAMES.tpdConfiguratoreLandingSticky]: ["Tipologia Quotatore"],
  [MFE_NAMES.tpdCasellaRicercaFaiUnaDomanda]: [
    "Testo",
    "Link pagina risultati",
  ],
  [MFE_NAMES.tpdRiepilogoPreventivoStickyWidget]: ["Recupera Preventivo"],
  [MFE_NAMES.tpdPreventivatoreStickyWidget]: [
    "Preselect",
    "Prodotto",
    "Titolo_Iniziativa",
    "Titolo",
    "convenzioni",
    "nomeConvenzione",
    "codiceConvenzione",
    "immagineConvenzione",
    "Informativa_Auto",
    "Informativa_Commercio",
    "Informativa_Animali",
    "Informativa_Moto",
    "Informativa_Casa",
    "Informativa_Impresa",
    "Informativa_Salute",
    "Informativa_Iniziativa",
    "Informativa_Condominio",
    "Informativa_Infortuni",
    "Informativa_Viaggi",
    "Informativa_CaneGatto",
    "Informativa_Previdenza",
  ],
  [MFE_NAMES.tpdRendicontiDettaglioUnitLinked]: ["data-config"],
  [MFE_NAMES.tpdBoxInfoCtaWidget]: [
    "Tipologia Box",
    "Motivi",
    "Link Thank You",
    "LinkPrivacy",
  ],
  [MFE_NAMES.tpdPrivacyPageWidget]: [
    "titolo_info_mark",
    "descrizione_info_mark",
    "titolo_01",
    "desc_01",
    "titolo_02",
    "desc_02",
    "titolo_03",
    "desc_03",
    "descrizione",
  ],
  [MFE_NAMES.tpdPrivacyBannerWidget]: ["titolo", "descrizione"],
  [MFE_NAMES.tpdDatiPersonaliWidget]: [
    "abilitazione-ivass",
    "titolo",
    "descrizione",
    "desc_01",
    "desc_02",
    "desc_03",
    "desc_04",
  ],
  [MFE_NAMES.tpdEsitoRinnovoPolizzaWidget]: [
    "abilita_frase",
    "testo_unipolmove",
    "linkUnipolMove",
  ],
  [MFE_NAMES.tpdPagamentoRinnovoPolizzaWidget]: ["enablePSD2"],
  [MFE_NAMES.tpdDispositiviTelematici]: [
    "titolo",
    "descrizione",
    "abilitazione-ivass",
  ],
  [MFE_NAMES.tpdAcquistoWidget]: [
    "titolo_data_decorrenza",
    "descrizione_data_decorrenza",
    "titolo_moduli",
    "descrizione_moduli",
    "moduli_consensi_1",
    "titolo_condizioni_generali",
    "titolo_demands_needs",
    "moduli_consensi_2",
    "titolo_servizi_telematici",
    "moduli_consensi_3",
    "moduli_consensi_4",
    "titolo_unibox",
    "descrizione_unibox",
    "titolo_unibox_scelta_carrozzeria",
    "descrizione_unibox_scelta_carrozzeria",
    "titolo_pagamento",
    "descrizione_pagamento",
    "documento_appendice_integrativa",
    "titolo_privacy",
    "descrizione_privacy",
    "enablePSD2",
  ],
  [MFE_NAMES.tpdComunicazioniConCTAWidget]: [
    "Titolo",
    "Descrizione",
    "Testo",
    "Bottone",
  ],
  [MFE_NAMES.tpdPuTelematica]: ["immagine", "titolo", "descrizione", "link"],
  [MFE_NAMES.tpdAggiornaProfiloWidget]: ["descrizione_aggiorna_profilo"],
  [MFE_NAMES.tpdCauzioniWidget]: [],
  [MFE_NAMES.tpdGiftcardIsfast]: [],
  [MFE_NAMES.tpdPuDettaglioPolizza]: [
    "titolo_informativa IVASS per Attestato di Rischio",
    "file_informativa IVASS per Attestato di Rischio",
    "titolo_POLIZZA CANE_GATTO",
    "file_POLIZZA CANE_GATTO",
    "titolo_VITA Ramo 315 BILANCIAMENTO GESTITO",
    "file_VITA Ramo 315 BILANCIAMENTO GESTITO",
    "titolo_VITA Ramo 315 COMPARTO 3",
    "file_VITA Ramo 315 COMPARTO 3",
    "titolo_VITA Ramo 315 GESTIONE SEPARATA",
    "file_VITA Ramo 315 GESTIONE SEPARATA",
    "titolo_VITA Ramo 515 BILANCIAMENTO GESTITO",
    "file_VITA Ramo 515 BILANCIAMENTO GESTITO",
    "titolo_VITA Ramo 515 Fonsai Azionario Globale",
    "file_VITA Ramo 515 Fonsai Azionario Globale",
    "titolo_VITA Ramo 515 GESTIONE SEPARATA",
    "file_VITA Ramo 515 GESTIONE SEPARATA",
    "titolo_VITA Ramo 615 BILANCIAMENTO GESTITO",
    "file_VITA Ramo 615 BILANCIAMENTO GESTITO",
    "titolo_VITA Ramo 615 Fonsai Azionario Globale",
    "file_VITA Ramo 615 Fonsai Azionario Globale",
    "titolo_VITA Ramo 615 GESTIONE SEPARATA",
    "file_VITA Ramo 615 GESTIONE SEPARATA",
    "titolo_VITA Ramo 715 BILANCIAMENTO GESTITO",
    "file_VITA Ramo 715 BILANCIAMENTO GESTITO",
    "titolo_VITA Ramo 715 Fonsai Azionario Globale",
    "file_VITA Ramo 715 Fonsai Azionario Globale",
    "titolo_VITA Ramo 715 GESTIONE SEPARATA",
    "file_VITA Ramo 715 GESTIONE SEPARATA",
    "titolo_VITA Investimento Comparto 2",
    "file_VITA Investimento Comparto 2",
    "titolo_VITA Investimento Comparto 3",
    "file_VITA Investimento Comparto 3",
    "titolo_VITA Investimento Valore Prudente",
    "file_VITA Investimento Valore Prudente",
    "titolo_ VITA Investimento Valore Equilibrato",
    "file_ VITA Investimento Valore Equilibrato",
    "titolo_VITA Investimento Valore Dinamico",
    "file_VITA Investimento Valore Dinamico",
    "titolo_VITA Unit Megatrend",
    "file_VITA Unit Megatrend",
    "titolo_VITA Ramo 3 Bilanciamento Gestito",
    "file_VITA Ramo 3 Bilanciamento Gestito",
    "abilitazione-ivass",
  ],
  [MFE_NAMES.tpdFormIniziativeWidget]: [
    "informativa_privacy_titolo",
    "informativa_privacy_testo",
    "link_iniziativa",
    "titolo_conferma_ok",
    "testo_conferma_ok",
    "bottone_conferma_ok",
    "titolo_conferma_orario_ok",
    "testo_conferma_orario_ok",
    "bottone_conferma_orario_ok",
    "codice_prodotto",
    "processo_completo",
    "titolo",
    "email_form",
    "link_go_back",
    "visualizza_modale_all_invio",
    "Menu-CMS-Proxy",
  ],
  [MFE_NAMES.tpdLancioGestioniSeparateWidget]: ["Link"],
  [MFE_NAMES.tpdIniziativaRiepilogo]: [
    "titolo_riepilogo",
    "testo_riepilogo",
    "link_nuova_lead",
    "codice_prodotto",
  ],
  [MFE_NAMES.tpdEsitoAggiuntaCartaWidget]: [],
  [MFE_NAMES.tpdRecuperaDocumentoWidget]: ["MessaggioErrore"],
  [MFE_NAMES.tpdRecuperoConsensoPrivacyWidget]: [
    "introduzione",
    "titoloPrivacy",
    "descrizionePrivacy",
  ],
  [MFE_NAMES.tpdRendicontiDettaglioUnitLinked]: ["Valore", "Data"],
  [MFE_NAMES.tpdPagamentoInsolutoWidget]: [],
};

/**
 * Per inserire un widget angular o un primary react puro (ovvero non wrappa un angular) in un widget angular.
 *
 * ESEMPIO ANGULAR WIDGET DENTRO ANGULAR WIDGET - TARGHE url: /area_riservata/sinistri/scelta-targa
 * <tpd-targhe-sinistri-widget>
 *    ...
 *    <tpd-due-veicoli-sinistri></tpd-due-veicoli-sinistri>
 *    ...
 * </tpd-targhe-sinistri-widget>
 *
 * ESEMPIO PRIMARY REACT PURO DENTRO ANGULAR WIDGET - REGISTRAZIONE url: /registrazione-cliente
 * <tpd-registrazione-clienti>
 *    ...
 *    <tpd-spalla-destra></tpd-spalla-destra>
 *    ...
 * </tpd-registrazione-clienti>
 *
 * In caso di array vuoto o chiave non definita non filtra e prende tutte le config del primary radice
 */
export const NESTED_REMOTES_CONFIGS: PropsSetting = {
  [MFE_NAMES.tpdRegistrazioneClienti]: {
    // primary into widget
    mfeName: MFE_NAMES.tpdSpallaDestra,
    config: [
      "descrizione_spalladx_step1",
      "immagine_spalladx_step1",
      "link_spalladx_step1",
    ],
  },
  [MFE_NAMES.tpdTargheSinistriWidget]: {
    // widget into widget
    mfeName: MFE_NAMES.tpdDueVeicoliSinistri,
    config: ["stxt-title-body", "stxt-desc-body"],
  },
};
