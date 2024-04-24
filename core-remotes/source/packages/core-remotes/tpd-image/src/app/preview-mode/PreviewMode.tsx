import React from "react";
import { Helpers } from "@tpd-web-common-libs/nodejs-library";
import { Image, Picture, Container } from "./PreviewMode.style";
import {
  TImageValue,
  TImageWithRenditionListValue,
  TSingleImageValue,
} from "../App.type";

type TImagePreviewModeProps = {
  value: TImageValue;
};

const MEDIA_QUERIES = {
  desktop: "(min-width: 1280px)",
  tablet: "(min-width: 768px) and (max-width: 1279px)",
  smartphone: "(max-width: 767px)",
};

const isVisibleAsImageWithRenditionListValue = (props) => {
  const imageProps = props?.image;
  return (
    imageProps &&
    "renditionList" in imageProps &&
    !!imageProps.renditionList.imageRendition
  );
};

const isVisibleAsSingleImageValue = (props) => {
  const imageProps = props?.image;
  return (
    imageProps &&
    "resourceUri" in imageProps &&
    imageProps.resourceUri.value !== "" &&
    "fileName" in imageProps
  );
};

export const isVisibleInPreviewMode = (value) => {
  return (
    isVisibleAsImageWithRenditionListValue(value) ||
    isVisibleAsSingleImageValue(value)
  );
};

const generateAltTextFromUrl = (url: string) => {
  const splittedUrl = Helpers.UrlHelper.rewriteImagePath(url).split("/");
  return splittedUrl[splittedUrl.length - 1];
};

const PreviewMode = (props: TImagePreviewModeProps) => {
  let contentHtml;
  if (isVisibleAsImageWithRenditionListValue(props.value)) {
    const imageProps = (props.value as TImageWithRenditionListValue).image;

    //webp type control
    imageProps.renditionList.imageRendition.forEach((element) => {
      if (element.type === "audio/x-wav") {
        element.type = "image/webp";
        if (!element.fileName.includes(".webp")) {
          Helpers.ConsoleHelper.error(
            `Errore: il type dell'immagine ${element.fileName} è webp, ma l'estensione non corrisponde`
          );
        }
      }
    });

    const imageRenditionMap = imageProps.renditionList.imageRendition.reduce(
      (acc, renditionprops) => {
        return {
          ...acc,
          [renditionprops.name]: renditionprops,
        };
      },
      {}
    );

    const defaultImg =
      imageRenditionMap["smartphone"] ||
      imageRenditionMap["tablet"] ||
      imageRenditionMap["desktop"];

    const sourceObjs = imageProps.renditionList.imageRendition
      .filter((renditionprops) => {
        return renditionprops.name !== defaultImg.name;
      })
      .map((renditionprops, index) => {
        return (
          <source
            key={`image-source-${index}`}
            media={MEDIA_QUERIES[renditionprops.name]}
            srcSet={Helpers.UrlHelper.rewriteImagePath(
              renditionprops.resourceUri
            )}
            type={renditionprops.type}
          />
        );
      });

    contentHtml = (
      <Picture>
        {sourceObjs}
        <img
          src={Helpers.UrlHelper.rewriteImagePath(defaultImg.resourceUri)}
          alt={
            imageProps.altText || generateAltTextFromUrl(defaultImg.resourceUri)
          }
        />
      </Picture>
    );
  } else if (isVisibleAsSingleImageValue(props.value)) {
    const imageProps = (props.value as TSingleImageValue).image;
    contentHtml = (
      <Image
        src={Helpers.UrlHelper.rewriteImagePath(imageProps.resourceUri.value)}
        alt={
          imageProps.altText ||
          imageProps.fileName ||
          generateAltTextFromUrl(imageProps.resourceUri.value)
        }
        title={imageProps.fileName}
      ></Image>
    );
  }

  return (
    contentHtml && (
      <Container className="tpd-image-preview-mode-container">
        {contentHtml}
      </Container>
    )
  );
};

export default PreviewMode;
