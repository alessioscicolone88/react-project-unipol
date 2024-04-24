import { UrlHelper } from "./Url.helper";
import { COMMON_ENV_CONFIG } from "../envConfig";
export const isUserLandingInANewPage = (req: any) =>
  !req.url.match(/^\/_next\/data\//);

export const PRIVATE_ROUTE_PATH = "/area_riservata/";

export const getPrivateRoutePath = (path: any) => {
  return `${PRIVATE_ROUTE_PATH}${path}`;
};

export const getPrivateRouteURL = (path: any) => {
  return getHostRouteURL(getPrivateRoutePath(path));
};

export const getHostRouteURL = (path: any) => {
  return `${COMMON_ENV_CONFIG.HOST_ENDPOINT}${path}`;
};


export const HostResponse = (data: any) => ({
  content: {
    data,
  },
});
