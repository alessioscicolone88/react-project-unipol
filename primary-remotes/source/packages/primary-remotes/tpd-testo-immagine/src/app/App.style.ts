import styled from "@emotion/styled";
import { Styles } from "@tpd-web-common-libs/nodejs-library";

export const ContainerDiv = styled.div<{ isVisible: boolean }>`
  margin-top: ${(props) => props["data-margin-top"]};
  margin-bottom: ${(props) => props["data-margin-bottom"]};
  display: ${(props) => (props.isVisible ? "block" : "none")};
  padding-top: 40px;
  padding-bottom: 40px;

  ${Styles.BreakpointsUtils.mobileOnly(`
    padding-top: 19px;
  `)}

  .tpd-side-text {
    ${Styles.BreakpointsUtils.mobileOnly(`
      margin-top: 30px;
    `)}
  }

  .tpd-testo-immagine
    .tpd-image
    .tpd-image-container
    .tpd-image-preview-mode-container
    img {
    ${Styles.BreakpointsUtils.mobileOnly(`
      height: 100%;
    `)}
  }

  .tpd-testo-immagine {
    display: flex;
    flex-direction: column;
    font-family: Unipol;
  }

  .tpd-testo-immagine .tpd-side-text {
    line-height: 1.42857143;
  }

  .tpd-side-text .tpd-side-text-wrapper {
    padding: 0 calc(100% * (1 / 24));
  }

  .tpd-content-description {
    padding-right: 3px;
  }

  .tpd-side-text .tpd-side-text-wrapper .tpd-content-description {
    margin-bottom: 30px;
    font-size: 16px;
    color: #333;
  }

  .tpd-content-description
    .rich-text-container
    .rich-text-preview-mode-container
    p
    span {
    line-height: inherit;
  }

  .tpd_image_side_text {
    display: flex;
    flex-direction: column;
    font-family: Unipol;
  }

  .tpd_image_side_text .tpd_image {
    position: relative;
  }

  .tpd_image_side_text .tpd_content_title {
    font-family: Unipol Bold;
  }

  .tpd-side-text .tpd-side-text-wrapper .tpd-content-buttons {
    font-size: 18px;
    font-weight: 600;
  }

  .tpd-image .tpd-image-container {
    height: 100%;
  }

  .tpd-image .tpd-image-container .tpd-image-preview-mode-container {
    position: relative;
    height: 308px;
    padding: 0;
  }

  .tpd-image .tpd-image-container .tpd-image-preview-mode-container img {
    width: 100%;
    height: 308px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .tpd-image .tpd-image-container .tpd-image-edit-mode-container {
    position: relative;
    height: 308px;
    padding: 0;
  }

  .tpd-image .tpd-image-container .tpd-image-edit-mode-container img {
    width: 100%;
    height: 308px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  ${Styles.BreakpointsUtils.mobileOnly(`
    .tpd-image .tpd-image-container {
      height: 100%;
    }
  `)}

  ${Styles.BreakpointsUtils.tabletAndDesktopOnly(`
    .tpd-testo-immagine {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }

    .tpd-testo-immagine .tpd-image {
      width: 50%;
      padding-right: 2rem;
    }

    .tpd-image .tpd-image-container .tpd-image-preview-mode-container {
      height: 357px;
    }

    .tpd-image .tpd-image-container .tpd-image-preview-mode-container img {
      height: 357px;
    }

    .tpd-image .tpd-image-container .tpd-image-edit-mode-container {
      height: 357px;
    }

    .tpd-image .tpd-image-container .tpd-image-edit-mode-container img {
      height: 357px;
    }

    .tpd-testo-immagine .tpd-side-text {
      width: 50%;
      padding: 0 0 0 47px;
    }

    .tpd-side-text .tpd-side-text-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0;
    }
  `)}

  ${Styles.BreakpointsUtils.tabletOnly(`
    .tpd-testo-immagine {
      margin-left: 4%;
    }
  `)}

  ${Styles.BreakpointsUtils.desktopOnly(`
    .tpd-testo-immagine {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 100%;
    }
    .tpd-testo-immagine .tpd-image {
      width: 43%;
    }

    .tpd-image .tpd-image-container .tpd-image-preview-mode-container {
      height: 454px;
    }

    .tpd-image .tpd-image-container .tpd-image-preview-mode-container img {
      height: 454px;
    }

    .tpd-image .tpd-image-container .tpd-image-edit-mode-container {
      height: 454px;
    }

    .tpd-image .tpd-image-container .tpd-image-edit-mode-container img {
      height: 454px;
    }

    .tpd-testo-immagine .tpd-side-text {
      width: 40%;
      line-height: 1.42857143;
    }
  `)}
`;
