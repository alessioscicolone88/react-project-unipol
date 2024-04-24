import styled from "@emotion/styled";
import { Styles } from "@tpd-web-common-libs/nodejs-library";

export const PreviewContainer = styled.div`
  width: 100%;

  .editor-listitem {
    margin: 0;
  }

  .editor-container {
    color: inherit;
    .toolbar {
      display: none;
    }
  }
`;

export const PreviewModeContainer = styled.div`
  ${Styles.BreakpointsUtils.desktopOnly(`
      scrollbar-color: transparent transparent;
      
      ::-webkit-scrollbar-track {
        background:transparent; 
      }
      
      ::-webkit-scrollbar-thumb {
        background: transparent; 
      }
  `)}

  ${Styles.BreakpointsUtils.mobileOnly(`
      &.rich-text-preview-mode-container{
        &.img-container {
          overflow: hidden;
        }
      }
      
      b {
        display: inline-flex;
        flex-wrap: wrap;
      }
  `)}
`;
