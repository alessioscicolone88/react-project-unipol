import styled from "@emotion/styled";

export const CustomUrlFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: #363636;
  margin-bottom: 8px;
  line-height: 19px;
`;

const inputFieldHeight = 48;
const inputFieldBorderWidth = 1;
const inputFieldVerticalPadding = 12;
export const InputField = styled.input`
  height: ${inputFieldHeight -
  2 * inputFieldVerticalPadding -
  2 * inputFieldBorderWidth}px;
  border: ${inputFieldBorderWidth}px solid #b9b9b9;
  border-radius: 4px;
  padding: ${inputFieldVerticalPadding}px 20px;
  margin-bottom: 24px;
  cursor: pointer;

  &::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: #b9b9b9;
  }

  &:hover:not(:focus, focus-visible) {
    border-color: #013563;
  }

  &:focus,
  focus-visible {
    border-color: #013563;
    outline: none;
  }
`;

const inputAreaHeight = 200;
const inputAreaBorderWidth = 1;
const inputAreaVerticalPadding = 12;
export const InputArea = styled.textarea`
  height: ${inputAreaHeight -
  2 * inputAreaVerticalPadding -
  2 * inputAreaBorderWidth}px;
  border: 1px solid #b9b9b9;
  border-radius: 4px;
  padding: 12px 20px;
  resize: none;
  cursor: pointer;
  scrollbar-gutter: stable;

  &:hover:not(:focus, focus-visible) {
    border-color: #013563;
  }

  &:focus,
  focus-visible {
    border-color: #013563;
    outline: none;
  }

  &::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: #b9b9b9;
  }

  /* scrollbar width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* scrollbar track */
  ::-webkit-scrollbar-track {
    border-radius: 80px;
    background: #b9b9b9;
  }

  /* scrollbar handle */
  ::-webkit-scrollbar-thumb {
    background: #013563;
    border-radius: 80px;
  }
`;
