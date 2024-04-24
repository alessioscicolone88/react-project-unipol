import { BreakpointsUtils } from ".";

const styleMock = `font-family: Unipol`;

const breakpoints = {
  mobile: "@media screen and (max-width: 768px)",
  tablet: "@media screen and (min-width: 769px) and (max-width: 1279px)",
  desktop: "@media screen and (min-width: 1280px)",
  mobileAndTablet: "@media screen and (max-width: 1279px)",
  tabletAndDesktop: "@media screen and (min-width: 769px)",
};

describe("Testing Styles Utils Methods", () => {
  it("testing mobileOnly method", () => {
    const mobileOnlyResultString = `${breakpoints.mobile} {
      ${styleMock}
    }`;
    expect(BreakpointsUtils.mobileOnly(styleMock).trim()).toBe(
      mobileOnlyResultString.trim()
    );
  });

  it("testing tabletOnly method", () => {
    const tabletOnlyResultString = `${breakpoints.tablet} {
      ${styleMock}
    }`;
    expect(BreakpointsUtils.tabletOnly(styleMock).trim()).toBe(
      tabletOnlyResultString.trim()
    );
  });

  it("testing desktopOnly method", () => {
    const desktopOnlyResultString = `${breakpoints.desktop} {
      ${styleMock}
    }`;
    expect(BreakpointsUtils.desktopOnly(styleMock).trim()).toBe(
      desktopOnlyResultString.trim()
    );
  });

  it("testing mobileAndTabletOnly method", () => {
    const mobileAndTabletOnlyResultString = `${breakpoints.mobileAndTablet} {
      ${styleMock}
    }`;
    expect(BreakpointsUtils.mobileAndTabletOnly(styleMock).trim()).toBe(
      mobileAndTabletOnlyResultString.trim()
    );
  });

  it("testing tabletAndDesktopOnly method", () => {
    const tabletAndDesktopOnlyResultString = `${breakpoints.tabletAndDesktop} {
      ${styleMock}
    }`;
    expect(BreakpointsUtils.tabletAndDesktopOnly(styleMock).trim()).toBe(
      tabletAndDesktopOnlyResultString.trim()
    );
  });
});
