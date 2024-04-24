import * as Utils from "./Layout.utils";

describe("Layout Utils", () => {
  it("Testing pageLayout1ColumnOnly", () => {
    const styleMock = "margin-top: 20px;";
    const resultStyle = `.wptheme1Col & {
      ${styleMock}
    }`;

    const result = Utils.pageLayout1ColumnOnly(styleMock);
    expect(result).toContain(styleMock);
    expect(result.trim()).toBe(resultStyle.trim());
  });

  it("Testing pageLayoutHpOnly", () => {
    const styleMock = "margin-top: 20px;";
    const resultStyle = `.wpthemeUnipol & {
      ${styleMock}
    }`;

    const result = Utils.pageLayoutHpOnly(styleMock);
    expect(result).toContain(styleMock);
    expect(result.trim()).toBe(resultStyle.trim());
  });
});
