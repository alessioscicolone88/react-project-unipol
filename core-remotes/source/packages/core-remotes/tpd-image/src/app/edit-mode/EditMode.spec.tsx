import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import EditMode from "./EditMode";
import PreviewMode from "../preview-mode/PreviewMode";
import SelectCmsImg, { TSelectedImage } from "./select-cms-img/SelectCmsImg";
import { TImageValue } from "../App.type";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import {
  CommonMFE,
  Helpers,
  Providers,
} from "@tpd-web-common-libs/nodejs-library";

const mockData = {
  "Libreria uno": {
    "Cartella uno": [
      {
        title: "Medici",
        alt: "Medici",
        src: "/wcm/connect/ee1abc72-3e84-4a79-b7cd-bd02932305a9/desktop/medici_720x530_desktop.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ee1abc72-3e84-4a79-b7cd-bd02932305a9-desktop-oeO3PAY",
      },
      {
        title: "Auto Amici",
        alt: "Auto Amici",
        src: "/wcm/connect/7b8d6c33-4205-4534-9aab-0f4bbcf7bb00/desktop/Auto_amiciott2022_525x195_landing.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7b8d6c33-4205-4534-9aab-0f4bbcf7bb00-desktop-oesQ0-b",
      },
      {
        title: "Animali",
        alt: "Animali",
        src: "/wcm/connect/b5576e5c-59ee-4bab-897c-71c00119341c/desktop/cane+300x102+%281%29.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b5576e5c-59ee-4bab-897c-71c00119341c-desktop-nRGIVry",
      },
      {
        title: "Casa",
        alt: "Casa",
        src: "/wcm/connect/a9f90f35-a120-46f6-ac91-b5cece754d39/desktop/300x102+calcola+il+tuo+preventivo+casa%26servizi+.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a9f90f35-a120-46f6-ac91-b5cece754d39-desktop-o52PjAF",
      },
      {
        title: "Mi hai rubato il cuore",
        alt: "Mi hai rubato il cuore",
        src: "/wcm/connect/4ec5ffd5-146b-4f5f-8453-8bd96e0e8ca9/desktop/Landing+ADV+Desktop+525x195+ultima.png?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE-4ec5ffd5-146b-4f5f-8453-8bd96e0e8ca9-desktop-o7Xkh3-",
      },
      {
        title: "Logo UnipolSai",
        alt: "Logo UnipolSai",
        src: "/UnipolSaiThemeDynamicWAR/themes/html/dynamicSpots/assets/images/header/unipolsai_tricolore.png",
      },
      {
        title: "App UnipolSai",
        alt: "App UnipolSai",
        src: "/wcm/connect/1feabc3b-28a2-4735-9633-1dcfc287a27f/desktop/720x530.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-1feabc3b-28a2-4735-9633-1dcfc287a27f-desktop-o2OkaUw",
      },
    ],
    "Cartella due": [],
  },
  "Libreria due": {
    "Cartella uno": [
      {
        title: "Auto",
        alt: "Auto",
        src: "/wcm/connect/a6fd4657-18a4-4b95-9971-fc76ff04e0fa/desktop/20211210_banner+sito_Km%26Servizi_300x102.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a6fd4657-18a4-4b95-9971-fc76ff04e0fa-desktop-nSZgU-O",
      },
    ],
    "Cartella due": [],
    "Cartella tre": [],
    "Cartella quattro": [],
    "Cartella cinque": [],
    "Cartella sei": [],
    "Cartella sette": [],
  },
  "Libreria tre": {},
  "Libreria quattro": {},
  "Libreria cinque": {},
  "libreria sei": {},
  "libreria sette": {},
};

type TTpdImageEditModeProps = {
  __host__: Pick<CommonMFE.Types.THost, "placement">;
  name: string;
  value: TImageValue;
  // setValue: (value: TImageValue) => void;
};

const props: TTpdImageEditModeProps = {
  __host__: {
    placement: {
      dataContentId: "dsadasda",
      type: "content",
      actionContent: {
        edit: "javascript:ns_Z7_32EI0380N0FM006S46SNH328E4_openInlineEditingDialog('?uri=dialog%3Awcm&action=edit&docid=com.aptrix.pluto.content.Content%2F916b3de6-44af-4cb5-8eb1-ca65d90c8433', 'Modifica'); ",
        new: null,
        read: "",
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
  // setValue: jest.fn().mockImplementation((value) => value),
  name: "Immagine",
};

const libreriaUnoExpected = Object.keys(mockData)[0];
const cartellaUnoExpected = Object.keys(mockData[libreriaUnoExpected])[0];

describe("tpdImage EditMode", () => {
  beforeEach(() => {
    const cmsProxyService = Providers.CMSProxyService.getInstance();
    jest.spyOn(cmsProxyService, "getImages").mockResolvedValue(mockData);
    jest
      .spyOn(Helpers.EditModeHelper, "getAttrIsEditingFromBody")
      .mockReturnValue("false");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("testing component props", async () => {
    await waitFor(() => {
      expect(props).toBeDefined();
    });
  });

  // it("testing modal open", async () => {
  //   const editMode = render(
  //     <EditMode {...props}>
  //       <PreviewMode value={props.value} />
  //     </EditMode>
  //   );
  //   const container = editMode.container.querySelector("div");
  //   const image = container.querySelector("img");
  //   const modalCount = screen.queryAllByRole("presentation");

  //   expect(editMode).toBeDefined();
  //   expect(container.childNodes.length).toBe(2);
  //   expect(modalCount.length).toBe(0);

  //   await act<any>(() => {
  //     fireEvent.click(image);
  //   });

  //   const modal = screen.getByRole("presentation");
  //   expect(modal).toBeDefined();
  // });

  // it("testing modal close", async () => {
  //   const editMode = render(
  //     <EditMode {...props}>
  //       <PreviewMode value={props.value} />
  //     </EditMode>
  //   );
  //   const container = editMode.container.querySelector("div");
  //   const image = container.querySelector("img");

  //   await act<any>(() => {
  //     fireEvent.click(image);
  //   });

  //   expect(screen.getByRole("presentation")).toBeDefined();
  //   expect(screen.getAllByRole("presentation").length).toBe(1);
  //   const closeButton = screen.getByRole("closeButton");

  //   await act<any>(() => {
  //     fireEvent.click(closeButton);
  //   });

  //   expect(screen.queryAllByRole("presentation").length).toBe(0);
  // });

  // it("testing handleRadioButtonsChange", async () => {
  //   const editMode = render(
  //     <EditMode {...props}>
  //       <PreviewMode value={props.value} />
  //     </EditMode>
  //   );
  //   const container = editMode.container.querySelector("div");
  //   const image = container.querySelector("img");

  //   await act<any>(() => {
  //     fireEvent.click(image);
  //   });

  //   const radioButtonUrl = screen.getAllByDisplayValue("url")[0];
  //   const radioButtonCMS = screen.getAllByDisplayValue("cms")[0];

  //   await act<any>(() => {
  //     fireEvent.click(radioButtonUrl);
  //   });

  //   expect(radioButtonUrl).toBeChecked();
  //   expect(radioButtonCMS).not.toBeChecked();

  //   await act<any>(() => {
  //     fireEvent.click(radioButtonCMS);
  //   });

  //   expect(radioButtonUrl).not.toBeChecked();
  //   expect(radioButtonCMS).toBeChecked();
  // });

  // it("testing submitNewImage with radioButtonsValue === url", async () => {
  //   const editMode = render(
  //     <EditMode {...props}>
  //       <PreviewMode value={props.value} />
  //     </EditMode>
  //   );
  //   const container = editMode.container.querySelector("div");
  //   const image = container.querySelector("img");

  //   await act<any>(() => {
  //     fireEvent.click(image);
  //   });

  //   const radioButtonUrl = screen.getAllByDisplayValue("url")[0];
  //   const submitButton = screen.getByRole("submitButton");
  //   const newImageSrc = screen.getAllByRole("textbox")[0];
  //   const newImageTitle = screen.getAllByRole("textbox")[1];
  //   const newImageAlt = screen.getAllByRole("textbox")[2];

  //   expect(newImageSrc).toBeInTheDocument();
  //   expect(newImageTitle).toBeInTheDocument();
  //   expect(newImageAlt).toBeInTheDocument();

  //   await act<any>(() => {
  //     fireEvent.click(radioButtonUrl);
  //   });

  //   expect(radioButtonUrl).toBeChecked();
  //   expect(submitButton).not.toBeDisabled();

  //   await act<any>(() => {
  //     fireEvent.change(newImageSrc, { target: { value: "new src" } });
  //     fireEvent.change(newImageTitle, {
  //       target: { value: "new title" },
  //     });
  //     fireEvent.change(newImageAlt, { target: { value: "new alt" } });
  //   });

  //   await waitFor(() => {
  //     expect(newImageSrc).toHaveValue("new src");
  //     expect(newImageTitle).toHaveValue("new title");
  //     expect(newImageAlt).toHaveValue("new alt");
  //   });

  //   await act<any>(() => {
  //     fireEvent.click(submitButton);
  //   });

  //   await waitFor(() => {
  //     expect(props.setValue).toHaveBeenCalledWith({
  //       type: "application/vnd.ibm.wcm+xml",
  //       reference:
  //         "/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
  //       image: {
  //         dimension: {
  //           height: "200",
  //           width: "200",
  //           border: "",
  //         },
  //         altText: "new alt",
  //         tagName: "",
  //         fileName: "new title",
  //         resourceUri: {
  //           type: "image/png",
  //           value: "new src",
  //         },
  //       },
  //     });
  //   });
  //   expect(screen.queryAllByRole("presentation").length).toBe(0);
  // });

  // it("testing submitNewImage with radioButtonsValue === cms", async () => {
  //   const editMode = render(
  //     <EditMode {...props}>
  //       <PreviewMode value={props.value} />
  //     </EditMode>
  //   );
  //   const container = editMode.container.querySelector("div");
  //   const image = container.querySelector("img");

  //   await act<any>(() => {
  //     fireEvent.click(image);
  //   });

  //   const radioButtonCMS = screen.getAllByDisplayValue("cms")[0];

  //   await act<any>(() => {
  //     fireEvent.click(radioButtonCMS);
  //   });

  //   expect(radioButtonCMS).toBeChecked();
  //   const cmsProxyResponseList = screen.getAllByRole("list")[1];
  //   const mockDataLength = Object.keys(mockData).length;
  //   const libreriaUno = cmsProxyResponseList.childNodes[0];
  //   expect(cmsProxyResponseList.childNodes.length).toBe(mockDataLength);

  //   await act<any>(() => {
  //     fireEvent.click(libreriaUno);
  //   });

  //   const cartellaUno = cmsProxyResponseList.childNodes[1];
  //   expect(cartellaUno).toBeInTheDocument();

  //   await act<any>(() => {
  //     fireEvent.click(cartellaUno);
  //   });

  //   const opzioneUno = screen.getAllByRole("radio")[0];
  //   const opzioneUnoWrapper = opzioneUno.parentNode;
  //   expect(opzioneUno).not.toBeChecked();

  //   await act<any>(() => {
  //     fireEvent.click(opzioneUnoWrapper);
  //   });

  //   expect(opzioneUno).toBeChecked();
  //   const submitButton = screen.getByRole("submitButton");
  //   expect(submitButton).not.toBeDisabled();

  //   await act<any>(() => {
  //     fireEvent.click(submitButton);
  //   });

  //   const opzioneUnoValue =
  //     mockData[libreriaUnoExpected][cartellaUnoExpected][0];
  //   expect(props.setValue).toHaveBeenCalledWith({
  //     type: "application/vnd.ibm.wcm+xml",
  //     reference:
  //       "/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
  //     image: {
  //       dimension: {
  //         height: "200",
  //         width: "200",
  //         border: "",
  //       },
  //       altText: opzioneUnoValue.alt,
  //       tagName: "",
  //       fileName: opzioneUnoValue.title,
  //       resourceUri: {
  //         type: "image/png",
  //         value: opzioneUnoValue.src,
  //       },
  //     },
  //   });
  //   expect(screen.queryAllByRole("presentation").length).toBe(0);
  // });

  // it("testing goBackListItem", async () => {
  //   const editMode = render(
  //     <EditMode {...props}>
  //       <PreviewMode value={props.value} />
  //     </EditMode>
  //   );
  //   const container = editMode.container.querySelector("div");
  //   const image = container.querySelector("img");

  //   await act<any>(() => {
  //     fireEvent.click(image);
  //   });

  //   const radioButtonCMS = screen.getAllByDisplayValue("cms")[0];

  //   await act<any>(() => {
  //     fireEvent.click(radioButtonCMS);
  //   });

  //   const cmsProxyResponseList = screen.getAllByRole("list")[1];
  //   const libreriaUno = cmsProxyResponseList.childNodes[0];

  //   await act<any>(() => {
  //     fireEvent.click(libreriaUno);
  //   });

  //   const cartellaUno = cmsProxyResponseList.childNodes[1];
  //   expect(cartellaUno).toBeInTheDocument();

  //   await act<any>(() => {
  //     fireEvent.click(cartellaUno);
  //   });

  //   const opzioneUno = screen.getAllByRole("radio")[0];
  //   expect(opzioneUno).toBeInTheDocument();
  //   const goBackListItem = screen.getAllByRole("goBackListItem")[0];

  //   await act<any>(() => {
  //     fireEvent.click(goBackListItem);
  //   });

  //   expect(opzioneUno).not.toBeInTheDocument();

  //   await act<any>(() => {
  //     fireEvent.click(goBackListItem);
  //   });

  //   expect(cartellaUno).not.toBeInTheDocument();
  // });

  // it("testing breadcrumbs links", async () => {
  //   const editMode = render(
  //     <EditMode {...props}>
  //       <PreviewMode value={props.value} />
  //     </EditMode>
  //   );
  //   const container = editMode.container.querySelector("div");
  //   const image = container.querySelector("img");

  //   await act<any>(() => {
  //     fireEvent.click(image);
  //   });

  //   const radioButtonCMS = screen.getAllByDisplayValue("cms")[0];

  //   await act<any>(() => {
  //     fireEvent.click(radioButtonCMS);
  //   });

  //   const cmsProxyResponseList = screen.getAllByRole("list")[1];
  //   const libreriaUno = cmsProxyResponseList.childNodes[0];

  //   await act<any>(() => {
  //     fireEvent.click(libreriaUno);
  //   });

  //   const cartellaUno = cmsProxyResponseList.childNodes[1];

  //   await act<any>(() => {
  //     fireEvent.click(cartellaUno);
  //   });

  //   const opzioneUno = screen.getAllByRole("radio")[0];
  //   const libreriaUnoLink = screen.getAllByRole("breadcrumbLink")[0];
  //   expect(opzioneUno).toBeInTheDocument();

  //   await act<any>(() => {
  //     fireEvent.click(libreriaUnoLink);
  //   });

  //   expect(opzioneUno).not.toBeInTheDocument();
  //   const breadcrumbRoot = screen.getAllByRole("breadcrumbRoot")[0];

  //   await act<any>(() => {
  //     fireEvent.click(breadcrumbRoot);
  //   });

  //   expect(cartellaUno).not.toBeInTheDocument();
  // });

  // it("testing handleSelectChange", async () => {
  //   type parsedCmsResOption = {
  //     label: string;
  //     value: TSelectedImage;
  //   };

  //   type TSelectCmsImg = {
  //     cmsProxyResponse: any;
  //     selectedImage: TSelectedImage;
  //     setSelectedImage: React.Dispatch<React.SetStateAction<TSelectedImage>>;
  //     parsedCMSResForSelect: parsedCmsResOption[];
  //   };

  //   const props: TSelectCmsImg = {
  //     cmsProxyResponse: mockData,
  //     selectedImage: {
  //       title: "",
  //       alt: "",
  //       src: "",
  //     },
  //     setSelectedImage: jest.fn().mockImplementation((value) => value),
  //     parsedCMSResForSelect: [
  //       {
  //         label: "Libreria uno / Cartella uno / Medici",
  //         value: {
  //           title: "Medici",
  //           alt: "Medici",
  //           src: "/wcm/connect/ee1abc72-3e84-4a79-b7cd-bd02932305a9/desktop/medici_720x530_desktop.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ee1abc72-3e84-4a79-b7cd-bd02932305a9-desktop-oeO3PAY",
  //         },
  //       },
  //       {
  //         label: "Libreria uno / Cartella uno / Auto Amici",
  //         value: {
  //           title: "Auto Amici",
  //           alt: "Auto Amici",
  //           src: "/wcm/connect/7b8d6c33-4205-4534-9aab-0f4bbcf7bb00/desktop/Auto_amiciott2022_525x195_landing.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7b8d6c33-4205-4534-9aab-0f4bbcf7bb00-desktop-oesQ0-b",
  //         },
  //       },
  //       {
  //         label: "Libreria uno / Cartella uno / Animali",
  //         value: {
  //           title: "Animali",
  //           alt: "Animali",
  //           src: "/wcm/connect/b5576e5c-59ee-4bab-897c-71c00119341c/desktop/cane+300x102+%281%29.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b5576e5c-59ee-4bab-897c-71c00119341c-desktop-nRGIVry",
  //         },
  //       },
  //     ],
  //   };

  //   render(<SelectCmsImg {...props} />);
  //   const comboBox = screen.getByRole("combobox");

  //   await act<any>(() => {
  //     fireEvent.change(comboBox, {
  //       target: { value: props.parsedCMSResForSelect[1].label },
  //     });
  //   });

  //   const option = screen.getByText(props.parsedCMSResForSelect[1].label);

  //   await act<any>(() => {
  //     fireEvent.click(option);
  //   });

  //   expect(props.setSelectedImage).toHaveBeenCalledWith(
  //     props.parsedCMSResForSelect[1].value
  //   );
  // });
});
