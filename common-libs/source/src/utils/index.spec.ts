import * as Utils from "./index";

describe("TpdWebLibs Utils Export", () => {
  it("Testing export of methods", () => {
    expect(Utils).toBeDefined();
    Object.keys(Utils).forEach((key) => {
      expect((Utils as any)[key]).toBeDefined();
    });
  });
});
