import * as styles from "./index";

describe("TpdWebLibs Styles Export", () => {
  it("Testing export of methods", () => {
    expect(styles).toBeDefined();
    Object.keys(styles).forEach((key) => {
      expect((styles as any)[key]).toBeDefined();
    });
  });
});
