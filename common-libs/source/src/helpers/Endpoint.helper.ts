import { COMMON_ENV_CONFIG } from "../envConfig";
import { EnvironmentHelper } from "./environment.helper";

export type TSearchParamsObj = Record<
  string,
  string | number | null | undefined
>;

export const EndpointHelper = {
  completePath(path: string): string {
    return `/${path}`.replace("//", "/");
  },
  getHostEndpoint(path = "", searchParamsObj = {}): string {
    const url = `${COMMON_ENV_CONFIG.HOST_ENDPOINT}${this.completePath(path)}`;
    return this.getEndpoint(url, searchParamsObj);
  },

  getEndpoint(url: string, searchParamsObj: TSearchParamsObj): string {
    const searchParamsEntries = Object.entries(searchParamsObj).filter(
      ([_, value]) => typeof value !== null && typeof value !== "undefined"
    );
    if (searchParamsEntries.length > 0) {
      return (
        url +
        "?" +
        searchParamsEntries
          .reduce((searchParams, [key, value]) => {
            searchParams.append(key, `${value}`);
            return searchParams;
          }, new URLSearchParams())
          .toString()
      );
    } else {
      return url;
    }
  },
};
