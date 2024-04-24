import { ConsoleHelper } from "../../helpers/Console.helper";
import { PAGE_COLORS, TOUCHPOINTS } from "./constants";
import { TProps, TImportMFE } from "./types/general.types";

export function getTouchpointThemeClass(
  touchpoint: string | null = null
): string {
  let tp = TOUCHPOINTS.UNIPOLSAI;
  if (touchpoint) {
    if (Object.values(TOUCHPOINTS).includes(touchpoint)) {
      tp = touchpoint;
    } else {
      ConsoleHelper.error(`Touchpoint ${touchpoint} not supported!`);
    }
  }
  return `touchpoint-theme-${tp}`;
}

export function getPageColorThemeClass(
  pageColor: string | null = null
): string {
  let pc = "default";
  if (pageColor && pageColor !== "mainColor") {
    if (Object.values(PAGE_COLORS).includes(pageColor)) {
      pc = pageColor;
    } else {
      ConsoleHelper.error(`Page color ${pageColor} not supported!`);
    }
  }
  return `page-color-theme-${pc}`;
}

export function importMFEFactory(props: TProps): TImportMFE {
  return !!props &&
    !!props.__host__ &&
    typeof props.__host__.importMFEBy === "function"
    ? (__mfeName__) => props.__host__.importMFEBy(__mfeName__)
    : (_) => Promise.resolve(null);
}

export function generateID(
  containerID: string,
  str: string,
  index: null | number = null
): string {
  return `${containerID}-${str}-${index !== null ? `${index}` : "wrapper"}`;
}
