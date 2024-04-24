import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Helpers, CommonMFE } from "@tpd-web-common-libs/nodejs-library";
import {
  ContainerDiv,
  fontUnipolFace,
  transparentTextArea,
} from "./EditMode.style";
import { TRichTextValue } from "../App.type";

export type TRichTextEditModeProps = {
  __host__: CommonMFE.Types.THost;
  name: string;
  type: string;
  value: TRichTextValue;
  setValue: React.Dispatch<React.SetStateAction<TRichTextValue>>;
  children: ReactNode;
  appRef: React.MutableRefObject<HTMLDivElement>;
  parentId: string | undefined | null;
};

const EditMode = (props: TRichTextEditModeProps) => {
  const {
    __host__,
    name,
    appRef,
    children,
    parentId,
    value: { value: text },
  } = props;
  const containerRef = useRef();
  const [isEditable, setIsEditable] = useState(false);

  const getRichTextInLineElementBy = (parentIdParam, hostParams) => {
    const id = parentIdParam || hostParams?.placement?.dataContentId;
    const richTextInLineId = `${id}_richTextInline_${name.replaceAll(
      " ",
      "_"
    )}`;
    // Check if the clicked element isn't the HTMLDivElement with the id
    const richTextInLineElement = document.getElementById(richTextInLineId);

    if (!richTextInLineElement) {
      Helpers.ConsoleHelper.error(
        "Error: Not Found Rich Text inline Element with id: ",
        richTextInLineId
      );
    }
    return richTextInLineElement;
  };

  /** Dispatch CustomEvent for richTextInline */
  const dispatchEditMode = (editing: boolean) => {
    console.log("Custom event setted: edit-richTextInline ", editing);
    const inlineEditingEvent = new CustomEvent(
      `${Helpers.EditContentHelper.richTextInlineEvent()}-${parentId}`,
      {
        detail: { richTextInline: editing },
        cancelable: true,
      }
    );
    window.dispatchEvent(inlineEditingEvent);
  };

  const onClickAction = (event) => {
    const richTextInline = getRichTextInLineElementBy(parentId, __host__);
    if (event.target !== richTextInline) {
      /** Notify all the richText is NOT in editMode anymore */
      dispatchEditMode(false);
      // Add the actions you want to perform when the div is clicked
      setIsEditable(false);
      /** Show again slick-dots if slick-slide is present */
      setSlickStyle(false);
      /** Remove event listener */
      document.removeEventListener("click", onClickAction);
    }
  };

  const handleEditModeSlick =
    (slickTransform = {}) =>
    (isRichTextEditModeEnabled?: boolean) => {
      /** Check if this is inside a React-Slick Slider */
      const appRefDiv = appRef.current as HTMLDivElement;
      const slickSlider = appRefDiv.closest(".slick-slider") as HTMLDivElement;
      const currentSlickSlide = appRefDiv.closest(
        ".slick-slide"
      ) as HTMLDivElement;
      if (slickSlider) {
        const slickDots = slickSlider.querySelector(
          ".slick-dots"
        ) as HTMLDivElement;
        const slickList = slickSlider.querySelector(
          ".slick-list"
        ) as HTMLDivElement;
        const slickTrack = slickList.querySelector(
          ".slick-track"
        ) as HTMLDivElement;
        const allSlides = slickTrack.querySelectorAll(".slick-slide");

        if (isRichTextEditModeEnabled) {
          slickDots.style.setProperty("display", "none", "important");
          allSlides.forEach((el: HTMLDivElement) => {
            if (
              el.getAttribute("data-index") !=
              currentSlickSlide.getAttribute("data-index")
            ) {
              el.style.setProperty("display", "none");
            }
          });
          slickTransform = {
            slickList: slickList.style.transform,
            slickTrack: slickTrack.style.transform,
          };
          slickList.style.transform = "unset";
          slickTrack.style.transform = "unset";
        } else {
          slickDots.style.setProperty("display", "block");
          allSlides.forEach((el: HTMLDivElement) => {
            el.style.setProperty("display", "inherit");
          });
          slickList.style.transform = slickTransform["slickList"] || "0";
          slickTrack.style.transform = slickTransform["slickTrack"] || "0";
        }
      }
    };
  const setSlickStyle = handleEditModeSlick();

  const setDefaultValue = () => {
    const richTextInline = getRichTextInLineElementBy(parentId, __host__);
    if (richTextInline) {
      const richTextInlineContent = richTextInline.getElementsByClassName(
        "wcm-inplace-content-region"
      )[0] as HTMLDivElement;
      if (richTextInlineContent && richTextInlineContent.innerHTML === "") {
        const defaultElement = document.createElement("span");
        defaultElement.style.opacity = "0.8";
        defaultElement.appendChild(
          document.createTextNode("Inserisci testo...")
        );
        richTextInlineContent.appendChild(defaultElement);
      }
    }
  };

  useEffect(() => {
    const setInlineRichText = () => {
      const richTextInline = getRichTextInLineElementBy(parentId, __host__);
      if (richTextInline && containerRef) {
        const appRefDiv = appRef.current as HTMLDivElement;
        appRefDiv.appendChild(richTextInline);
        richTextInline.classList.remove("hidden");
        richTextInline.classList.add("inline-rich-text");
        const containerDiv = containerRef.current as HTMLDivElement;
        containerDiv.style.display = "none";
      }
      setDefaultValue();
    };
    const handleIframeAvailable = (iframe) => {
      /** Notify all the richText is in editMode */
      console.log(
        "Custom Event richText",
        parentId,
        __host__?.placement?.dataContentId
      );
      dispatchEditMode(true);
      /** Attach event listner for outside click action and remove the additional toolbar space */
      document.addEventListener("click", onClickAction);
      setSlickStyle(true); // Update Slick style when IFrame is available
      // Access the iframe's document and body
      const iframeDocument = iframe.contentWindow.document;
      const iframeBody = iframeDocument.body as HTMLBodyElement;
      // Create a <style> element
      const style = iframeDocument.createElement("style");
      style.type = "text/css";
      style.appendChild(iframeDocument.createTextNode(fontUnipolFace));
      style.appendChild(iframeDocument.createTextNode(transparentTextArea));

      const head = iframeDocument.querySelector("head");
      if (head) {
        head.appendChild(style);
      }
      setIsEditable(true);
    };

    const observeIframe = () => {
      const targetNode = appRef.current; // You can observe any parent element where the iframe might be added

      const config = { childList: true, subtree: true };

      const callback = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.tagName === "IFRAME") {
                handleIframeAvailable(node);
                // if we need we can disconnect, but we have to check every time a user wants to modify
                // Stop observing once the iframe is found
                //observer.disconnect();
              }
            });
          }
        }
        setDefaultValue();
      };

      const observer = new MutationObserver(callback);

      observer.observe(targetNode, config);
    };

    const handleAbsolutePositionedToolbarElements = (node, buttons) => {
      if (node?.classList && node.classList.contains("cke_panel")) {
        const { expandableButtons, comboButtons } = buttons;
        const combo =
          node?.classList && node.classList.contains("cke_combopanel");
        const newButtons = combo ? comboButtons : expandableButtons;
        handlePanel(node, newButtons, combo);
      }
    };

    const handlePanel = (node, buttons, combo) => {
      const id = combo ? "topPositionCombo" : "topPosition";
      const topPositionStyle = document.getElementById(id);
      const buttonsPosition = buttons[0].getBoundingClientRect();
      const style = document.createElement("style");
      style.id = id;
      style.type = "text/css";
      const topPositionClass = combo ? "top-position-combo" : "top-position";
      const topPosition = `.${topPositionClass} {top: ${
        buttonsPosition.height + buttonsPosition.top
      }px!important}`;
      style.appendChild(document.createTextNode(topPosition));
      const head = document.querySelector("head");
      if (head) {
        topPositionStyle
          ? head.replaceChild(style, topPositionStyle)
          : head.appendChild(style);
      }
      if (!node.classList.contains(topPositionClass)) {
        node.classList.add(topPositionClass);
      }
      node.style.zIndex = 20000000000000;
      node.style.position = "fixed";
    };

    const observeToolbar = () => {
      const config = { childList: true, subtree: true };

      const callback = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            const comboButtons = document.getElementsByClassName(
              "cke_combo_button"
            ) as HTMLCollection;
            const expandableButtons = document.getElementsByClassName(
              "cke_button_expandable"
            ) as HTMLCollection;
            if (
              (comboButtons && comboButtons.length) ||
              (expandableButtons && expandableButtons.length)
            ) {
              const buttons = { comboButtons, expandableButtons };
              mutation.addedNodes.forEach((node) => {
                handleAbsolutePositionedToolbarElements(node, buttons);
              });
            }
          }
        }
      };

      const documentObserver = new MutationObserver(callback);

      documentObserver.observe(document, config);
    };

    setInlineRichText(); // Set the inline richText from portal
    observeIframe(); // Start observing for the iframe
    observeToolbar(); // Start observing for toolabar
  }, []);

  useEffect(() => {
    Helpers.EditToolbarHelper.toggleSpace(isEditable);
  }, [isEditable]);

  return (
    <ContainerDiv
      ref={containerRef}
      className={
        "rich-text-edit-mode-container edit-mode-container " +
        (isEditable ? "isEditable" : "")
      }
    >
      {children}
    </ContainerDiv>
  );
};

export default EditMode;
