import { mockCta, mockImage } from "./mock.utils";

describe("MockImage and MockCta", () => {
  /* Mock Image */
  it("should return an object with image properties if src is defined in MOCK_MAP", () => {
    const MOCK_MAP = {
      "mock-id": {
        src: "https://example.com/image.png",
        renditionList: [
          { src: "https://example.com/image-desktop.jpg" },
          { src: "https://example.com/image-mobile.jpg" },
          { src: "https://example.com/image-tablet.jpg" },
        ],
      },
    };

    const mockImageFn = mockImage(MOCK_MAP);
    const id = "mock-id";
    const image = { value: {} };
    const result = mockImageFn(id, image);

    expect(result.value.image.fileName).toBe("Borghetti logo.PNG");
    expect(result.value.image.resourceUri.type).toBe("image/png");
    expect(result.value.image.resourceUri.value).toBe(
      "https://example.com/image.png"
    );
  });

  it("should return an object with image properties if renditionList is defined in MOCK_MAP", () => {
    const MOCK_MAP = {
      "mock-id-2": {
        renditionList: [
          { src: "https://example.com/image-desktop.jpg" },
          { src: "https://example.com/image-mobile.jpg" },
          { src: "https://example.com/image-tablet.jpg" },
        ],
      },
    };
    const mockImageFn = mockImage(MOCK_MAP);
    const id = "mock-id-2";
    const image = { value: {} };
    const result = mockImageFn(id, image);
    expect(result.value.image.renditionList.imageRendition[0].fileName).toBe(
      "medici_720x530_desktop.jpg"
    );
    expect(result.value.image.renditionList.imageRendition[0].type).toBe(
      "image/jpeg"
    );
    expect(result.value.image.renditionList.imageRendition[0].resourceUri).toBe(
      "https://example.com/image-desktop.jpg"
    );
  });

  it("should return the original image object if id is not defined in MOCK_MAP", () => {
    const MOCK_MAP = {
      "mock-id-2": {
        renditionList: [
          { src: "https://example.com/image-desktop.jpg" },
          { src: "https://example.com/image-mobile.jpg" },
          { src: "https://example.com/image-tablet.jpg" },
        ],
      },
    };
    const mockImageFn = mockImage(MOCK_MAP);
    const id = "unknown-id";
    const image = {
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
        },
      },
    };
    const result = mockImageFn(id, image);
    expect(result).toStrictEqual(image);
  });

  /** Mock Cta */
  it("should return cta with mocked url when id is in MOCK_MAP", () => {
    const MOCK_MAP_CTA = {
      cta1: { url: "https://www.example.com/page1" },
      cta2: { url: "https://www.example.com/page2" },
    };
    const cta1 = { id: "cta1", value: "Click here" };
    const cta2 = { id: "cta2", value: "Learn more" };
    const mockCtaFn = mockCta(MOCK_MAP_CTA);
    const mockedCta1 = mockCtaFn(cta1.id, cta1);
    expect(mockedCta1.value.linkElement.destination.value).toEqual(
      MOCK_MAP_CTA.cta1.url
    );

    const mockedCta2 = mockCtaFn(cta2.id, cta2);
    expect(mockedCta2.value.linkElement.destination.value).toEqual(
      MOCK_MAP_CTA.cta2.url
    );
  });

  it("should return cta without mocked url when id is not in MOCK_MAP", () => {
    const MOCK_MAP_CTA = {};
    const mockCtaFn = mockCta(MOCK_MAP_CTA);
    const cta3 = { id: "cta3" };
    const mockedCta3 = mockCtaFn(cta3.id, cta3);
    expect(mockedCta3.value.linkElement.destination.value).toBeUndefined();
  });
});
