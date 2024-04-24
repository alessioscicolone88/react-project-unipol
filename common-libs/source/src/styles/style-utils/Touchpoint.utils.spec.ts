import * as Utils from "./Touchpoint.utils";

const remoteMock = {
  themeFunction: () => "background-color: blue;",
  touchpoint: {
    bimvitaOnly: "theme-bim-vita",
    whitelabelOnly: "theme-whitelabel",
  },
};

describe("Touchpoint Utils", () => {
  it("Testing Touchpoint Utils library methods", () => {
    expect(Utils.touchpointThemeOnly).toBeDefined();
    expect(Utils.bimvitaOnly).toBeDefined();
    expect(Utils.whitelabelOnly).toBeDefined();
    expect(Utils.touchpointThemeOnly(remoteMock.themeFunction)).toContain(
      remoteMock.touchpoint.bimvitaOnly
    );
    expect(Utils.touchpointThemeOnly(remoteMock.themeFunction)).toContain(
      remoteMock.touchpoint.whitelabelOnly
    );
  });
});
