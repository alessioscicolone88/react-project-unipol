import React, { useState, useEffect, ReactNode, useRef } from "react";
import {
  CommonMFE,
  Helpers,
  Providers,
} from "@tpd-web-common-libs/nodejs-library";
// import { Modal } from "@mui/material";
import { TImageValue } from "../App.type";
// import AddNewImg from "./add-new-img/AddNewImg";
// import SelectCmsImg, { TSelectedImage } from "./select-cms-img/SelectCmsImg";
import {
  Container,
  ImageWrapper,
  EditImageMask,
  // CustomForm,
  // FormControlStyled,
  // ModalBox,
  // ModalButtonsWrapper,
  // ModalContentWrapper,
  // ModalTitle,
  // RadioLabel,
  // RadioInput,
  // ButtonRadioWrapper,
  // CloseBtn,
  // SaveBtn,
  // ModalTopContent,
  // ModalCloseIcon,
  // CustomFormContent,
} from "./EditMode.style";
import { isVisibleInPreviewMode } from "../preview-mode/PreviewMode";
import { useDisableEditContent } from "@tpd-web-common-libs/nodejs-library/dist/src/mfe/react-mfe";

// export const PATH_SPLITTER = " / ";

// enum RADIO_BUTTON_VALUE {
//   URL = "url",
//   CMS = "cms",
// }

type TImageEditModeProps = {
  value: TImageValue;
  // setValue: React.Dispatch<React.SetStateAction<TImageValue>>;
  __host__: CommonMFE.Types.THost;
  name: string;
  parentId: string | undefined | null;
  children: ReactNode;
};

const BoilerPlateRenderer = (props: TImageEditModeProps) => {
  return (
    <div
      className={"boilerplate-container image-item-container"}
      style={{ height: "100%" }}
    >
      <div className="boilerplate-plus-icon"></div>
      <div className="boilerplate-text">AGGIUNGI IMMAGINE</div>
    </div>
  );
};

const EditMode = (props: TImageEditModeProps) => {
  const { __host__, name, children, parentId, value } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  /** Disable itselves when richText is in editing */
  useDisableEditContent(React, containerRef, parentId, name);

  return (
    <Container ref={containerRef} className="tpd-image-edit-mode-container">
      <EditImageMask
        onClick={(event) => {
          event.stopPropagation();
          Helpers.EditContentHelper.triggerEditContent(
            __host__.placement.actionContent,
            Helpers.EditMode.modify,
            parentId,
            name
          );
        }}
      ></EditImageMask>
      <ImageWrapper>
        {isVisibleInPreviewMode(value) ? (
          children
        ) : (
          <BoilerPlateRenderer {...props} />
        )}
      </ImageWrapper>
    </Container>
  );

  // ----- EDIT MODE COMPONENT BEFORE REFACTORING WITH HCL MODAL -----

  // const cmsProxyService = Providers.CMSProxyService.getInstance();

  // const [isEditable, setIsEditable] = useState(false);
  // const [cmsProxyResponse, setCmsProxyResponse] = useState({});
  // const [modalOpen, setModalOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState<TSelectedImage>(null);
  // const [radioButtonsValue, setRadioButtonsValue] = useState(
  //   RADIO_BUTTON_VALUE.URL
  // );

  // useEffect(() => {
  //   fetchData().catch((err) => Helpers.ConsoleHelper.error(err));
  // }, []);

  // const fetchData = async () => {
  //   const data = await cmsProxyService.getImages();
  //   setCmsProxyResponse(data);
  //   return data;
  // };

  // const handleModalOpen = () => {
  //   if (!Helpers.EditModeHelper.isEditingModeEnabled()) {
  //     Helpers.EditModeHelper.toggleEditingMode();
  //     setIsEditable(true);
  //     setModalOpen(true);
  //   }
  // };
  // const handleModalClose = (event: any) => {
  //   event.preventDefault();
  //   setRadioButtonsValue(RADIO_BUTTON_VALUE.URL);
  //   setSelectedImage(null);
  //   setIsEditable(false);
  //   Helpers.EditModeHelper.toggleEditingMode();
  //   setModalOpen(false);
  // };

  // const handleRadioButtonsChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setRadioButtonsValue(RADIO_BUTTON_VALUE[event.target.value.toUpperCase()]);
  //   setSelectedImage(null);
  // };

  // const submitNewImage = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   let newImage: TSelectedImage;
  //   if (radioButtonsValue === RADIO_BUTTON_VALUE.URL) {
  //     const inputTitle = event.currentTarget.querySelector(
  //       "[name=newImageTitle]"
  //     );
  //     const inputAlt = event.currentTarget.querySelector("[name=newImageAlt]");
  //     const inputSrc = event.currentTarget.querySelector("[name=newImageSrc]");

  //     newImage = {
  //       title: inputTitle && inputTitle["value"],
  //       alt: inputAlt && inputAlt["value"],
  //       src: inputSrc && inputSrc["value"],
  //     };
  //   } else {
  //     newImage = {
  //       ...selectedImage,
  //     };
  //   }
  //   setValue({
  //     ...value,
  //     image: {
  //       ...value.image,
  //       altText: newImage.alt,
  //       fileName: newImage.title,
  //       resourceUri: {
  //         ...value.image.resourceUri,
  //         value: newImage.src,
  //       },
  //     },
  //   });
  //   handleModalClose(event);
  // };

  // const CMSResParseForSelect = (cmsRes: any) => {
  //   return Object.entries(cmsRes)
  //     .map(([key, value]) => nestedResponseToArray(key, value))
  //     .flat();
  // };

  // const nestedResponseToArray = (currentLabel: string, nestedResponse: any) => {
  //   let array = [];
  //   if (!Array.isArray(nestedResponse)) {
  //     array = Object.entries(nestedResponse)
  //       .map(([key, value]) => {
  //         currentLabel = `${currentLabel}${PATH_SPLITTER}${key}`;
  //         return nestedResponseToArray(currentLabel, value);
  //       })
  //       .flat();
  //   } else {
  //     array = nestedResponse.map((img: any) => ({
  //       label: `${currentLabel}${PATH_SPLITTER}${img.title}`,
  //       value: img,
  //     }));
  //   }
  //   return array;
  // };

  // return (
  //   <Container
  //     className={`tpd-image-edit-mode-container ${
  //       isEditable ? "isEditable" : ""
  //     }`}
  //   >
  //     <div className="editing_description_label">
  //       <span>Immagine</span>
  //     </div>
  //     <ImageWrapper onClick={handleModalOpen}>{children}</ImageWrapper>
  //     <Modal open={modalOpen}>
  //       <ModalBox>
  //         <ModalContentWrapper>
  //           <FormControlStyled>
  //             <ModalTopContent>
  //               <ModalTitle>Inserisci immagine</ModalTitle>
  //               <ModalCloseIcon onClick={handleModalClose} />
  //             </ModalTopContent>
  //             <ButtonRadioWrapper>
  //               <RadioLabel
  //                 className={`${
  //                   radioButtonsValue === RADIO_BUTTON_VALUE.URL
  //                     ? "checked"
  //                     : ""
  //                 }`}
  //               >
  //                 <RadioInput
  //                   type="radio"
  //                   name="radioButtons"
  //                   value={RADIO_BUTTON_VALUE.URL}
  //                   onChange={handleRadioButtonsChange}
  //                   checked={radioButtonsValue === RADIO_BUTTON_VALUE.URL}
  //                 />
  //                 Custom URL
  //               </RadioLabel>
  //               <RadioLabel
  //                 className={`${
  //                   radioButtonsValue === RADIO_BUTTON_VALUE.CMS
  //                     ? "checked"
  //                     : ""
  //                 }`}
  //               >
  //                 <RadioInput
  //                   type="radio"
  //                   name="radioButtons"
  //                   value={RADIO_BUTTON_VALUE.CMS}
  //                   onChange={handleRadioButtonsChange}
  //                   checked={radioButtonsValue === RADIO_BUTTON_VALUE.CMS}
  //                 />
  //                 Seleziona da CMS
  //               </RadioLabel>
  //             </ButtonRadioWrapper>
  //           </FormControlStyled>
  //           <CustomForm onSubmit={submitNewImage}>
  //             <CustomFormContent>
  //               {radioButtonsValue === RADIO_BUTTON_VALUE.URL ? (
  //                 <AddNewImg value={value} />
  //               ) : (
  //                 radioButtonsValue === RADIO_BUTTON_VALUE.CMS && (
  //                   <SelectCmsImg
  //                     cmsProxyResponse={cmsProxyResponse}
  //                     selectedImage={selectedImage}
  //                     setSelectedImage={setSelectedImage}
  //                     parsedCMSResForSelect={CMSResParseForSelect(
  //                       cmsProxyResponse
  //                     )}
  //                   />
  //                 )
  //               )}
  //             </CustomFormContent>
  //             <ModalButtonsWrapper>
  //               <CloseBtn role="closeButton" onClick={handleModalClose}>
  //                 Annulla
  //               </CloseBtn>
  //               <SaveBtn
  //                 role="submitButton"
  //                 type="submit"
  //                 disabled={
  //                   radioButtonsValue !== RADIO_BUTTON_VALUE.URL &&
  //                   !selectedImage
  //                 }
  //               >
  //                 Salva
  //               </SaveBtn>
  //             </ModalButtonsWrapper>
  //           </CustomForm>
  //         </ModalContentWrapper>
  //       </ModalBox>
  //     </Modal>
  //   </Container>
  // );
};

export default EditMode;
