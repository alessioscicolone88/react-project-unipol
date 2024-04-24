
import { EnvironmentHelper } from "./environment.helper";

export const UrlHelper = {
  isAFullUrl(pathOrUrl: string): boolean {
    return new RegExp("^(http|https)://", "i").test(pathOrUrl);
  },

  isAFullUrlWithQueryString(pathOrUrl: string): boolean {
    return this.isAFullUrl(pathOrUrl) && /\?.+=/.test(pathOrUrl);
  },

  redirectURL(url: string, mapping: any): string | null {
    const match = Object.keys(mapping).find((regex) =>
      new RegExp(regex).test(url)
    );
    return match ? mapping[match] : null;
  },

  completeUrl(pathOrUrl: string, baseUrl: string): string {
    if (this.isAFullUrl(pathOrUrl)) {
      return pathOrUrl;
    } else {
      const urlObject = new URL(pathOrUrl, baseUrl);
      return urlObject.href;
    }
  },

  completeUrlWithCurrentOrigin(pathOrUrl: string): string {
    return EnvironmentHelper.isClientSide()
      ? this.completeUrl(pathOrUrl, window.location.origin)
      : pathOrUrl;
  },

  extractPathFromUrl(url: string): string {
    if (this.isAFullUrl(url)) {
      const urlObject = new URL(url);
      return urlObject.pathname;
    } else {
      return url;
    }
  },

  isSSGPageUrl(url: string): boolean {
    return !this.isSSRPageUrl(url);
  },

  isSSRPageUrl(url: string): boolean {
    return false; // new RegExp(PRIVATE_ROUTE_PATH).test(url); // All pages are pre-rendered with SSG
  },

  isHCLAuthoringPageUrl(url: string): boolean {
    return (
      new RegExp(/authoring(-[a-zA-Z]+)?\.unipolsai\.it/).test(url) ||
      new RegExp(/axintpd01\.servizi\.gr-u\.it/).test(url) || // TODO - NEED TO BE REMOVED AFTER INTE RELEASE WITH F5 ENDPOINT
      new RegExp(/axintpd02\.servizi\.gr-u\.it/).test(url) || // TODO - NEED TO BE REMOVED AFTER INTE RELEASE WITH F5 ENDPOINT
      (this.isStaticFilePageUrl(url) &&
        new RegExp(/.*\/authoring\/.*\.html$/).test(url)) // use for local testing purpose
    );
  },
  isStaticFilePageUrl(url: string): boolean {
    return new RegExp(/^file:\/\//).test(url); // use for local testing purpose
  },
  isNewArchitecturePageUrl(url: string): boolean {
    return new RegExp(
      /^https:?\/\/((dev|sit|qa|fix|www|authoring-inte|authoring-svil|authoring-coll|authoring)\.)?unipolsai\.it/
    ).test(url);
  },
  isOldArchitecturePageUrl(url: string): boolean {
    return new RegExp(/^https:?\/\/(svil|inte|coll)\.unipolsai\.it/).test(url);
  },
  getProjectNameFromUrl(): string | undefined {
    let projectName = undefined;
    if (
      EnvironmentHelper.isClientSide() &&
      UrlHelper.isHCLAuthoringPageUrl(window.location.href)
    ) {
      const url = window.location.href;
      const projectPosition = url.indexOf("$project/");
      if (projectPosition !== -1) {
        const splittedUrl = url.substring(projectPosition).split("/");
        if (splittedUrl.length > 1 && splittedUrl[1]) {
          projectName = splittedUrl[1];
        }
      }
    }
    return projectName;
  },
  rewriteImagePath(url: string): string {
    // if (
    //   !PageHelper.isHCLAuthoringPage() &&
    //   new RegExp("^/wcm/myconnect/").test(url)
    // ) {
    //   return url.replace(
    //     "/wcm/myconnect/",
    //     "/wcm/connect/"
    //   );
    // } else {
    //   return url;
    // }
    return url;
  },

  cleanCMSPathname(url: string): string {
    const [_, newUrl1] = url.match(/\/tpdweb\/(.*?)\/!ut/) || [];
    if (newUrl1 && newUrl1.length) {
      return `/${newUrl1}`;
    }

    const [__, newUrl2] = url.match(/\/tpdweb\/(.*?)$/) || [];
    if (newUrl2 && newUrl2.length) {
      return `/${newUrl2}`;
    }

    const [____, newUrl3] = url.match(/\/myportal\/(.*?)$/) || [];
    if (newUrl3 && newUrl3.length) {
      return `/${newUrl3}`;
    }

    return url;
  },

  isHostUrlEqualToPageUrl(hostUrl: string, pageUrl: string): boolean {
    return hostUrl === this.cleanCMSPathname(pageUrl);
  },

  isHostUrlSubPathOf(hostUrl: string, pageCategory: string): boolean {
    return (
      this.isHostUrlEqualToPageUrl(hostUrl, `/${pageCategory}`) ||
      hostUrl.startsWith(`/${pageCategory}/`)
    );
  },

  getYoutubeId(url: string): string | null {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  },

  getIframeSrc(youtubeURL: string) {
    const youtubeVideoId = this.getYoutubeId(youtubeURL);
    let iframeSrc = "";
    const protocol = EnvironmentHelper.isLocalEnvironment() ? "http" : "https";
    if (youtubeVideoId) {
      iframeSrc = `${protocol}://www.youtube.com/embed/${youtubeVideoId}`;
    } else if (youtubeURL) {
      /** youtubeURL is an ID, it doens't match the regex for the full URL */
      iframeSrc = `${protocol}://www.youtube.com/embed/${youtubeURL}`;
    }
    return iframeSrc;
  },

  generateHrefFrom({ telephone, email, url }: any): string {
    let href = "";
    if (!!telephone) {
      href = `tel:${telephone}`;
    } else if (!!email) {
      href = `mailto:${email}`;
    } else if (!!url) {
      href = url;
    } else {
      href = "javascript:void(0)";
    }
    return href;
  },
};
