import React from "react";
import { render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import App from "./App";
import { Helpers } from "@tpd-web-common-libs/nodejs-library";

describe("tpdImage App", () => {
  let ComponentRenderer;

  it("Testing rendering of component in preview mode", async () => {
    const propsMock = {
      id: "tpd-image-1",
      __mfeName__: "tpdImage",
      isEditMode: false,
      value: {
        type: "application/vnd.ibm.wcm+xml",
        reference:
          "/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
        image: {
          dimension: {
            height: "200",
            width: "200",
            border: "",
          },
          altText: "",
          tagName: "",
          fileName: "Borghetti logo.PNG",
          resourceUri: {
            type: "image/png",
            value:
              "/wcm/myconnect/edbbfe82-f948-42ce-9e8e-f6f4dd15ece0/Borghetti+logo.PNG?MOD=AJPERES&CACHEID=ROOTWORKSPACE-edbbfe82-f948-42ce-9e8e-f6f4dd15ece0-n.AN4B6",
          },
        },
      },
    };

    await act<any>(() => {
      ComponentRenderer = render(<App {...propsMock} />);
    });

    await waitFor(() => {
      const tpdImageContainer =
        ComponentRenderer.container.getElementsByClassName(
          "tpd-image-container"
        )[0];
      expect(tpdImageContainer).toBeDefined();
      const tpdImagePreview =
        ComponentRenderer.container.getElementsByClassName(
          "tpd-image-preview-mode-container"
        )[0];
      expect(tpdImagePreview).toBeDefined();
      expect;
    });
  });

  describe("Testing rendering of component in preview mode", () => {
    it("Testing with 3 breakpoints", async () => {
      const propsMock = {
        id: "tpd-image-1",
        __mfeName__: "tpdImage",
        isEditMode: false,
        value: {
          type: "application/vnd.ibm.wcm+xml",
          reference:
            "/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
          image: {
            dimension: {
              height: "200",
              width: "200",
              border: "",
            },
            altText: "",
            tagName: "",
            renditionList: {
              imageRendition: [
                {
                  height: "530",
                  width: "720",
                  fileName: "medici_720x530_desktop.jpg",
                  type: "image/jpeg",
                  name: "desktop",
                  resourceUri:
                    "/wcm/myconnect/ee1abc72-3e84-4a79-b7cd-bd02932305a9/desktop/medici_720x530_desktop.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ee1abc72-3e84-4a79-b7cd-bd02932305a9-desktop-oeO3PAY",
                },
                {
                  height: "230",
                  width: "320",
                  fileName: "medici_320x230 mobile.jpg",
                  type: "image/jpeg",
                  name: "smartphone",
                  resourceUri:
                    "/wcm/myconnect/ee1abc72-3e84-4a79-b7cd-bd02932305a9/smartphone/medici_320x230+mobile.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ee1abc72-3e84-4a79-b7cd-bd02932305a9-smartphone-oeO3PAY",
                },
                {
                  height: "390",
                  width: "384",
                  fileName: "medici_384x390 tablet.jpg",
                  type: "image/jpeg",
                  name: "tablet",
                  resourceUri:
                    "/wcm/myconnect/ee1abc72-3e84-4a79-b7cd-bd02932305a9/tablet/medici_384x390+tablet.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ee1abc72-3e84-4a79-b7cd-bd02932305a9-tablet-oeO3PAY",
                },
              ],
            },
          },
        },
      };

      await act<any>(() => {
        ComponentRenderer = render(<App {...propsMock} />);
      });

      const tpdImageContainer =
        ComponentRenderer.container.getElementsByClassName(
          "tpd-image-preview-mode-container"
        )[0];
      expect(tpdImageContainer).toBeDefined();

      const picture = tpdImageContainer.firstChild;
      expect(picture).toBeDefined();
      expect(picture).toBeInTheDocument();

      const imageSources = picture.getElementsByTagName("source");
      expect(imageSources).toHaveLength(2);

      const image = picture.getElementsByTagName("img")[0];
      expect(image).toBeDefined();

      const desktopImage =
        propsMock.value.image.renditionList.imageRendition[0];
      const tabletImage = propsMock.value.image.renditionList.imageRendition[2];
      const mobileImage = propsMock.value.image.renditionList.imageRendition[1];

      for (let i = 0; i < 2; i++) {
        const sourceElement = imageSources[i];
        if (sourceElement.media === "(max-width: 768px)") {
          expect(sourceElement.srcset).toBeDefined();
          expect(sourceElement.srcset).toBe(
            Helpers.UrlHelper.rewriteImagePath(mobileImage.resourceUri)
          );
          expect(sourceElement.type).toBe(
            Helpers.UrlHelper.rewriteImagePath(mobileImage.type)
          );
        } else if (
          sourceElement.media === "(min-width: 769px) and (max-width: 1280px)"
        ) {
          expect(sourceElement.srcset).toBeDefined();
          expect(sourceElement.srcset).toBe(
            Helpers.UrlHelper.rewriteImagePath(tabletImage.resourceUri)
          );
          expect(sourceElement.type).toBe(
            Helpers.UrlHelper.rewriteImagePath(tabletImage.type)
          );
        } else if (sourceElement.media === "(min-width: 1281px)") {
          expect(sourceElement.srcset).toBeDefined();
          expect(sourceElement.srcset).toBe(
            Helpers.UrlHelper.rewriteImagePath(desktopImage.resourceUri)
          );
          expect(sourceElement.type).toBe(
            Helpers.UrlHelper.rewriteImagePath(desktopImage.type)
          );
        }
      }
    });

    it("Testing with 2 breakpoints (desktop, tablet)", async () => {
      const propsMock = {
        id: "tpd-image-1",
        __mfeName__: "tpdImage",
        isEditMode: false,
        value: {
          type: "application/vnd.ibm.wcm+xml",
          reference:
            "/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
          image: {
            dimension: {
              height: "200",
              width: "200",
              border: "",
            },
            altText: "",
            tagName: "",
            fileName: "Borghetti logo.PNG",
            renditionList: {
              imageRendition: [
                {
                  height: "530",
                  width: "720",
                  fileName: "medici_720x530_desktop.jpg",
                  type: "image/jpeg",
                  name: "desktop",
                  resourceUri:
                    "/wcm/myconnect/ee1abc72-3e84-4a79-b7cd-bd02932305a9/desktop/medici_720x530_desktop.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ee1abc72-3e84-4a79-b7cd-bd02932305a9-desktop-oeO3PAY",
                },
                {
                  height: "390",
                  width: "384",
                  fileName: "medici_384x390 tablet.jpg",
                  type: "image/jpeg",
                  name: "tablet",
                  resourceUri:
                    "/wcm/myconnect/ee1abc72-3e84-4a79-b7cd-bd02932305a9/tablet/medici_384x390+tablet.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ee1abc72-3e84-4a79-b7cd-bd02932305a9-tablet-oeO3PAY",
                },
              ],
            },
          },
        },
      };

      await act<any>(() => {
        ComponentRenderer = render(<App {...propsMock} />);
      });

      const tpdImageContainer =
        ComponentRenderer.container.getElementsByClassName(
          "tpd-image-preview-mode-container"
        )[0];
      expect(tpdImageContainer).toBeDefined();

      const picture = tpdImageContainer.firstChild;
      expect(picture).toBeDefined();
      expect(picture).toBeInTheDocument();

      const imageSources = picture.getElementsByTagName("source");
      expect(imageSources).toHaveLength(1);

      const desktopImage =
        propsMock.value.image.renditionList.imageRendition[0];
      const tabletImage = propsMock.value.image.renditionList.imageRendition[1];

      const sourceElement = imageSources[0];

      expect(sourceElement.srcset).toBeDefined();
      expect(sourceElement.srcset).toBe(
        Helpers.UrlHelper.rewriteImagePath(desktopImage.resourceUri)
      );
      expect(sourceElement.type).toBe(
        Helpers.UrlHelper.rewriteImagePath(desktopImage.type)
      );

      const image = picture.getElementsByTagName("img")[0];
      expect(image).toBeDefined();
    });

    it("Testing without breackpoints (one image for all)", async () => {
      const propsMock = {
        id: "tpd-image-1",
        __mfeName__: "tpdImage",
        isEditMode: false,
        value: {
          type: "application/vnd.ibm.wcm+xml",
          reference:
            "/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
          image: {
            dimension: {
              height: "200",
              width: "200",
              border: "",
            },
            altText: "",
            tagName: "",
            fileName: "Borghetti logo.PNG",
            resourceUri: {
              type: "image/png",
              value:
                "/wcm/myconnect/edbbfe82-f948-42ce-9e8e-f6f4dd15ece0/Borghetti+logo.PNG?MOD=AJPERES&CACHEID=ROOTWORKSPACE-edbbfe82-f948-42ce-9e8e-f6f4dd15ece0-n.AN4B6",
            },
          },
        },
      };

      await act<any>(() => {
        ComponentRenderer = render(<App {...propsMock} />);
      });

      await waitFor(() => {
        const tpdImageContainer =
          ComponentRenderer.container.getElementsByClassName(
            "tpd-image-container"
          )[0];
        expect(tpdImageContainer).toBeDefined();
        const tpdImagePreview =
          ComponentRenderer.container.getElementsByClassName(
            "tpd-image-preview-mode-container"
          )[0];
        expect(tpdImagePreview).toBeDefined();
        expect;
      });
    });
  });

  it("Testing rendering of component in edit mode", async () => {
    const propsMock = {
      id: "tpd-image-1",
      __mfeName__: "tpdImage",
      isEditMode: true,
      __host__: {
        placement: {
          actionContent: {
            edit: "javascript:ns_Z7_32EI0380N0FM006S46SNH328E4_openInlineEditingDialog('?uri=dialog%3Awcm&action=edit&docid=com.aptrix.pluto.content.Content%2F916b3de6-44af-4cb5-8eb1-ca65d90c8433', 'Modifica'); ",
          },
        },
      },
      value: {
        type: "application/vnd.ibm.wcm+xml",
        reference:
          "/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
        image: {
          dimension: {
            height: "200",
            width: "200",
            border: "",
          },
          altText: "",
          tagName: "",
          fileName: "Borghetti logo.PNG",
          resourceUri: {
            type: "image/png",
            value:
              "/wcm/myconnect/edbbfe82-f948-42ce-9e8e-f6f4dd15ece0/Borghetti+logo.PNG?MOD=AJPERES&CACHEID=ROOTWORKSPACE-edbbfe82-f948-42ce-9e8e-f6f4dd15ece0-n.AN4B6",
          },
        },
      },
      name: "Immagine",
    };

    await act<any>(() => {
      ComponentRenderer = render(<App {...propsMock} />);
    });

    const tpdImageEditor = ComponentRenderer.container.getElementsByClassName(
      "tpd-image-edit-mode-container"
    )[0];
    expect(tpdImageEditor).toBeDefined();
  });
});
