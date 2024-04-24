export const mockImage = (MOCK_MAP: any) => (id: string, image: any) => {
  const mock = MOCK_MAP[id] || {};

  let imageProps = {};
  if (mock.src) {
    imageProps = {
      fileName: "Borghetti logo.PNG",
      resourceUri: {
        type: "image/png",
        value: mock.src,
      },
    };
  } else if (mock.renditionList) {
    imageProps = {
      renditionList: {
        imageRendition: [
          {
            height: "530",
            width: "720",
            fileName: "medici_720x530_desktop.jpg",
            type: "image/jpeg",
            name: "desktop",
            resourceUri: mock.renditionList[0].src, // "/wcm/myconnect/9bec9f54-eda8-4acd-9162-d856b4348f87/desktop/medici_720x530_desktop.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9bec9f54-eda8-4acd-9162-d856b4348f87-desktop-oeO3PAY",
          },
          {
            height: "230",
            width: "320",
            fileName: "medici_320x230 mobile.jpg",
            type: "image/jpeg",
            name: "smartphone",
            resourceUri: mock.renditionList[1].src, // "/wcm/myconnect/9bec9f54-eda8-4acd-9162-d856b4348f87/smartphone/medici_320x230+mobile.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9bec9f54-eda8-4acd-9162-d856b4348f87-smartphone-oeO3PAY",
          },
          {
            height: "390",
            width: "384",
            fileName: "medici_384x390 tablet.jpg",
            type: "image/jpeg",
            name: "tablet",
            resourceUri: mock.renditionList[2].src, // "/wcm/myconnect/9bec9f54-eda8-4acd-9162-d856b4348f87/tablet/medici_384x390+tablet.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9bec9f54-eda8-4acd-9162-d856b4348f87-tablet-oeO3PAY",
          },
        ],
      },
    };
  }

  return {
    ...image,
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
        ...imageProps,
      },
    },
  };
};

export const mockCta = (MOCK_MAP: any) => (id: string, cta: any) => {
  const mock = MOCK_MAP[id] || {};

  return {
    ...cta,
    value: {
      type: "application/vnd.ibm.wcm+xml",
      linkElement: {
        destination: {
          type: "content",
          allowClear: "false",
          queryString: "",
          value: mock.url,
        },
        display: {
          type: "text",
          value: cta.value,
        },
        description: {
          useDestination: "false",
          value: cta.value,
        },
        target: "None",
        additionalAttributes: "",
      },
    },
  };
};
