import React from "react";
import { PreviewContainer, PreviewModeContainer } from "./PreviewMode.style";
import { TRichTextValue } from "../App.type";
import parse from "html-react-parser";

type TPreviewModeProps = {
  value: TRichTextValue;
  componentType?: string;
};

const ComponentTypes = ["h1", "h2"];

const PreviewMode = (props: TPreviewModeProps) => {
  const {
    value: { value: text },
    componentType,
  } = props;

  const imgContainer = () => {
    return text.includes("<img");
  };

  const RichTextContent = () => {
    let htmlObject = parse(text);
    if (componentType && ComponentTypes.includes(componentType)) {
      htmlObject = React.createElement(
        componentType,
        {},
        htmlObject.props?.children ? htmlObject.props.children : htmlObject
      );
    }

    return (
      <PreviewModeContainer
        className={`rich-text-preview-mode-container ${
          imgContainer() ? "img-container" : ""
        }`}
        style={{ width: "100%" }}
      >
        {htmlObject}
      </PreviewModeContainer>
    );
  };

  return <PreviewContainer>{text && <RichTextContent />}</PreviewContainer>;
};

export default PreviewMode;
