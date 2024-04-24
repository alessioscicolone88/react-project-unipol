import styled from "@emotion/styled";
import { Styles } from "@tpd-web-common-libs/nodejs-library";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const EditImageMask = styled.div`
  ${Styles.EditMode.Container}
  position: absolute;
  z-index: 2;
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  height: 100%;
`;

export const ModalBox = styled.div`
  ${Styles.EditModeModal.ModalBox}
`;

export const ModalContentWrapper = styled.div`
  ${Styles.EditModeModal.ModalContentWrapper}
`;

export const FormControlStyled = styled.div`
  ${Styles.EditModeModal.FormControlStyled}
`;

export const ModalTopContent = styled.div`
  ${Styles.EditModeModal.ModalTopContent}
`;

export const ModalCloseIcon = styled.div`
  ${Styles.EditModeModal.ModalCloseIcon}
`;

export const ModalTitle = styled.div`
  ${Styles.EditModeModal.ModalTitle}
`;

export const ButtonRadioWrapper = styled.div`
  ${Styles.EditModeModal.ButtonRadioWrapper}
`;

export const RadioLabel = styled.label`
  ${Styles.EditModeModal.RadioLabel}
`;

export const RadioInput = styled.input`
  ${Styles.EditModeModal.RadioInput}
`;

export const CustomForm = styled.form`
  ${Styles.EditModeModal.CustomForm}
`;

export const CustomFormContent = styled.div`
  margin-bottom: 40px;
`;

export const ModalButtonsWrapper = styled.div`
  ${Styles.EditModeModal.ModalButtonsWrapper}
`;

export const CloseBtn = styled.button`
  ${Styles.EditModeModal.CloseBtn}
`;

export const SaveBtn = styled.button`
  ${Styles.EditModeModal.SaveBtn}
`;
