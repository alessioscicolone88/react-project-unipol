import * as StyleUtils from "./index";

describe("TpdWebLibs Styles Utils Export", () => {
  it("Testing export of methods", () => {
    expect(StyleUtils).toBeDefined();
    Object.keys(StyleUtils).forEach((key) => {
      expect((StyleUtils as any)[key]).toBeDefined();
    });
  });
});
