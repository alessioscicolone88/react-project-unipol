import * as Utils from "./PageColor.utils";

const remoteMock = {
  themeFunction: () => "background-color: blue;",
  pageColor: {
    defaultOnly: "mainColor",
    blueOnly: "blue",
    greenOnly: "green",
    orangeOnly: "orange",
  },
};

describe("PageColor Utils", () => {
  it("Testing PageColor Utils library methods", () => {
    expect(Utils.pageColorThemeOnly).toBeDefined();
    expect(Utils.blueOnly).toBeDefined();
    expect(Utils.greenOnly).toBeDefined();
    expect(Utils.orangeOnly).toBeDefined();
    expect(Utils.pageColorThemeOnly(remoteMock.themeFunction)).toContain(
      remoteMock.pageColor.blueOnly
    );
    expect(Utils.pageColorThemeOnly(remoteMock.themeFunction)).toContain(
      remoteMock.pageColor.greenOnly
    );
    expect(Utils.pageColorThemeOnly(remoteMock.themeFunction)).toContain(
      remoteMock.pageColor.orangeOnly
    );
  });
});
