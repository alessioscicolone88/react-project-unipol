import styled from "@emotion/styled";
import { Styles } from "@tpd-web-common-libs/nodejs-library";

export const ContainerDiv = styled.div`
  ${Styles?.EditMode.Container}
  min-height: 40px;
`;

export const fontUnipolFace = `
  @font-face {
    font-family: Unipol;
    src: url(/TpdPortalCommons/build/assets/Apex_New_Book.eot) format("eot"),
      url(/TpdPortalCommons/build/assets/Apex_New_Book.woff) format("woff"),
      url(/TpdPortalCommons/build/assets/Apex_New_Book.ttf) format("truetype"),
      url(/TpdPortalCommons/build/assets/Apex_New_Book.svg#Unipol) format("svg");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Unipol Medium;
    src: url(/TpdPortalCommons/build/assets/Apex_New_Medium.eot) format("eot"),
      url(/TpdPortalCommons/build/assets/Apex_New_Medium.woff) format("woff"),
      url(/TpdPortalCommons/build/assets/Apex_New_Medium.ttf) format("truetype"),
      url(/TpdPortalCommons/build/assets/Apex_New_Medium.svg#UnipolMedium) format("svg");
  }

  @font-face {
    font-family: Unipol Bold;
    src: url(/TpdPortalCommons/build/assets/Apex_New_Bold.eot) format("eot"),
      url(/TpdPortalCommons/build/assets/Apex_New_Bold.woff) format("woff"),
      url(/TpdPortalCommons/build/assets/Apex_New_Bold.ttf) format("truetype"),
      url(/TpdPortalCommons/build/assets/Apex_New_Bold.svg#UnipolBold) format("svg");
    font-weight: 400;
  }

  @font-face {
    font-family: unipol-icon;
    src: url(/TpdPortalCommons/build/assets/unipol-icon.eot) format("eot"),
      url(/TpdPortalCommons/build/assets/unipol-icon.ttf) format("truetype"),
      url(/TpdPortalCommons/build/assets/unipol-icon.woff) format("woff"),
      url(/TpdPortalCommons/build/assets/unipol-icon.svg#unipol-icon) format("svg");
    font-weight: 400;
    font-style: normal;
  }
`;

export const transparentTextArea = `
  body {
    background-color: transparent!important;
  }
`;
