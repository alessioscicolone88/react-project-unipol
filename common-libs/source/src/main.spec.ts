import * as Main from "./main";

describe("TpdWebLibs libs Export", () => {
  it("Testing export of methods", () => {
    expect(Main).toBeDefined();
    Object.keys(Main).forEach((key) => {
      expect((Main as any)[key]).toBeDefined();
    });
  });
});
