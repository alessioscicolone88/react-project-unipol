import styled from "@emotion/styled";
import { Styles } from "@tpd-web-common-libs/nodejs-library";

export const AppContainer = styled.div`
${Styles.BreakpointsUtils.desktopOnly(`
      scrollbar-color: transparent transparent;

      ::-webkit-scrollbar-track {
        background:transparent; 
      }
      
      ::-webkit-scrollbar-thumb {
        background: transparent; 
      }
  `)}

  b,
  strong {
    font-family: Unipol Bold;
    font-weight: 100;
  }

  p {
    margin: 0 0 10px;
  }

  a,
  a:not([href]) {
    text-decoration: none;
    color: ${Styles.Themes.UnipolColors.blueSix};
    &:hover {
      color: ${Styles.Themes.UnipolColors.blueThree};
    }
  }

  ol,
  ul {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px;
  }

  .inline-rich-text {
    width: 100%;
  }

  a.cke_button, a.cke_button_off {
    margin: 3px 2px 3px;
    border: solid 1px transparent;
  }

  a.cke_button.cke_button_on {
    margin: 3px 2px 3px;
  }

  a.cke_button:hover {
    margin: 3px 2px 3px;
  }

  .cke_button_icon.cke_button__numberedlist_icon {
    background: url("/NextAssets/icons/list-ol.svg") no-repeat !important;
  }
  
  .cke_button_icon.cke_button__bulletedlist_icon {
    background: url("/NextAssets/icons/list-ul.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__justifyleft_icon {
    background: url("/NextAssets/icons/text-left.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__justifycenter_icon {
    background: url("/NextAssets/icons/text-center.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__justifyright_icon {
    background: url("/NextAssets/icons/text-right.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__justifyblock_icon {
    background: url("/NextAssets/icons/text-justify.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__wcminsertlink_icon {
    background: url("/NextAssets/icons/link.svg") no-repeat !important;
    margin-top: 10px !important;
  }

  .cke_button_icon.cke_button__textcolor_icon {
    background: url("/NextAssets/icons/font-color.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__bold_icon {
    background: url("/NextAssets/icons/type-bold.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__italic_icon {
    background: url("/NextAssets/icons/type-italic.svg") no-repeat !important;
  }

  .cke_button_icon.cke_button__underline_icon {
    background: url("/NextAssets/icons/underline.svg") no-repeat !important;
  }

  .cke_toolbox {
    display: inline;
    min-height: 50px;
    width: 100% !important;
    left: 0 !important;
  }

  .cke_toolbar_start {
    display: none;
  }

  .cke_toolgroup {
    height: 100%;
  }

  a.cke_button, a.cke_button_off {
    width: 30px;
    height: 30px;

    .cke_button_icon {
      margin: 6px;
    }
  }

  .cke_button_arrow {
    margin-left: -10px;
  }

  .cke_top {
    position: fixed !important;
    top: 0 !important;
    right: 0 !important;
    left: 0 !important;
    border: 1px #D4D4D4 !important;
    background-color: #F0F0F0 !important;
    z-index: 999999999999;
    min-height: 50px;
  }

  .cke_inner .cke_contents {
    background-color: transparent !important;
    iframe {
      background-color: transparent !important;
      .cke_editable {
        background-color: transparent;
      }
    }
  }

  .cke_button__source_label {
    display: none !important;
  }

  .cke_combo {
    margin-top: 5px;
  }

  height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: auto;
  
  i.chevron-down {
    background-color: transparent;
    background-size: contain;
    display: inline-block;
    height: 8px;
    width: 8px;
    background-image: url("/NextAssets/icons/chevron-down.svg");
  }

  .toolbar i.chevron-up {
    margin-top: 3px;
    width: 16px;
    height: 16px;
    display: flex;
    user-select: none;
    background-repeat: no-repeat;
  }

  .toolbar i.chevron-up.inside {
    width: 16px;
    height: 16px;
    display: flex;
    margin-left: -25px;
    margin-top: 11px;
    margin-right: 10px;
    pointer-events: none;
  }

  i.chevron-up {
    background-color: transparent;
    background-size: contain;
    display: inline-block;
    height: 8px;
    width: 8px;
    background-image: url"/NextAssets/icons/chevron-up.svg");
  }

  i.undo {
    background-image: url("/NextAssets/icons/arrow-undo.svg");
  }

  i.redo {
    background-image: url("/NextAssets/icons/arrow-redo.svg");
  }

  .icon.bullet-list,
  .icon.ul {
    background-image: url("/NextAssets/icons/list-ul.svg");
  }

  .icon.numbered-list,
  .icon.ol {
    background-image: url("/NextAssets/icons/list-ol.svg");
  }

  .toolbar .toolbar-icon i.icon.numbered-list,
  .toolbar .toolbar-icon i.icon.bullet-list {
    width: 22px;
  }

  .toolbar .toolbar-item i.icon.bold {
    width: 15px;
  }

  .toolbar .toolbar-item i.icon.italic {
    width: 9px;
  }

  .toolbar .toolbar-item i.icon.underline {
    width: 14px;
  }

  i.indent {
    background-image: url("/NextAssets/icons/indent.svg");
  }

  i.outdent {
    background-image: url("/NextAssets/icons/outdent.svg");
  }

  i.unlink {
    background-image: url("/NextAssets/icons/unlink.svg");
  }
`;
