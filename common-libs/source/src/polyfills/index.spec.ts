import * as Polyfills from "./index";

describe("TpdWebLibs Providers Export", () => {
  it("Testing export of methods", () => {
    expect(Polyfills).toBeDefined();
    Object.keys(Polyfills).forEach((key) => {
      expect((Polyfills as any)[key]).toBeDefined();
    });
  });
});
