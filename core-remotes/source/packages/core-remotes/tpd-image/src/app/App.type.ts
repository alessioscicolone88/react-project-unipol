export type TSingleImageValue = {
  type: string; //"application/vnd.ibm.wcm+xml",
  reference: string; //"/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
  image: {
    dimension: {
      height: string; //"200",
      width: string; //"200",
      border: string; //""
    };
    altText: string; //"",
    tagName: string; //"",
    fileName: string; //"Borghetti logo.PNG",
    resourceUri: {
      type: string; //"image/png",
      value: string; //"/wcm/myconnect/edbbfe82-f948-42ce-9e8e-f6f4dd15ece0/Borghetti+logo.PNG?MOD=AJPERES&CACHEID=ROOTWORKSPACE-edbbfe82-f948-42ce-9e8e-f6f4dd15ece0-n.AN4B6"
    };
  };
};

type TImageRendition = {
  height: string;
  width: string;
  fileName: string;
  type: string;
  name: string;
  resourceUri: string;
};

export type TImageWithRenditionListValue = {
  type: string; //"application/vnd.ibm.wcm+xml",
  reference: string; //"/mycontenthandler/!ut/p/digest!ptkM1OpfZd3QlS4F-HK0yw/wcmrest/LibraryImageComponent/d80b8999-0337-4b0a-9c22-e964a9781e92",
  image: {
    dimension: {
      height: string; //"200",
      width: string; //"200",
      border: string; //""
    };
    altText: string; //"",
    tagName: string; //"",
    renditionList: {
      imageRendition: TImageRendition[];
    };
  };
};

export type TImageValue = TSingleImageValue | TImageWithRenditionListValue;
