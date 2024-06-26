import { PAGE_COLORS, getPageColorThemeClass } from "../../mfe/common-mfe";
import { PageColors } from "../Themes.style";

export function pageColorThemeOnly(
  themeFunction: (pageColor: any) => string
): string {
  return `
    ${blueOnly(themeFunction)}
    ${greenOnly(themeFunction)}
    ${orangeOnly(themeFunction)}
  `;
}

export function blueOnly(themeFunction: (pageColor: any) => string): string {
  const pageColor = PageColors[PAGE_COLORS.BLUE];
  return `
    .${getPageColorThemeClass(PAGE_COLORS.BLUE)} & {
      ${themeFunction(pageColor)}
    }
  `;
}

export function greenOnly(themeFunction: (pageColor: any) => string): string {
  const pageColor = PageColors[PAGE_COLORS.GREEN];
  return `
    .${getPageColorThemeClass(PAGE_COLORS.GREEN)} & {
      ${themeFunction(pageColor)}
    }
  `;
}

export function orangeOnly(themeFunction: (pageColor: any) => string): string {
  const pageColor = PageColors[PAGE_COLORS.ORANGE];
  return `
    .${getPageColorThemeClass(PAGE_COLORS.ORANGE)} & {
      ${themeFunction(pageColor)}
    }
  `;
}
