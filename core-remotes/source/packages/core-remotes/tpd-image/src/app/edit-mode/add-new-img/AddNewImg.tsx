import React from "react";
import { TImageValue } from "../../App";
import {
  CustomUrlFormWrapper,
  InputArea,
  InputField,
  InputLabel,
} from "./AddNewImg.style";

type TAddNewImg = {
  value: TImageValue;
};

const AddNewImg = (props: TAddNewImg) => {
  const {
    value: {
      image: {
        altText,
        fileName,
        resourceUri: { value: imagePath },
      },
    },
  } = props;

  return (
    <CustomUrlFormWrapper>
      <InputLabel>Pagina web (Url)</InputLabel>
      <InputField
        type="text"
        name="newImageSrc"
        defaultValue={imagePath}
        placeholder="Url dell'immagine"
        required
      />
      <InputLabel>Titolo</InputLabel>
      <InputField
        type="text"
        name="newImageTitle"
        defaultValue={fileName}
        placeholder="Inserisci il titolo dell'immagine"
        required
      />
      <InputLabel>Testo alternativo</InputLabel>
      <InputArea
        name="newImageAlt"
        defaultValue={altText}
        placeholder="Inserisci il testo alternativo"
        required
      />
    </CustomUrlFormWrapper>
  );
};

export default AddNewImg;
