import { ConsoleHelper } from ".";

export const RouterHelper = {
  goTo(path: string | null, options = { openNewTab: false }): void {
    if (options.openNewTab) {
      if (typeof window === "object") {
        window.open(path ?? undefined, "_blank");
      }
    }
  },
  onClickLinkEventHandler(event: any): void {
    event.preventDefault();
    try {
      const anchorElement = event.currentTarget as HTMLAnchorElement;
      const isDisabled = anchorElement.getAttribute("data-disabled");
      if (!(isDisabled === "true")) {
        const target = anchorElement.getAttribute("target");
        const href = anchorElement.getAttribute("href");
        RouterHelper.goTo(href, { openNewTab: target === "_blank" });
      }
    } catch (error) {
      ConsoleHelper.error("[Anchor ERROR] ", error);
    }
  },
  normalizeHref(href: string | undefined): string | null {
    if (
      href &&
      href.match(/^\/tpdweb\/?/)
    ) {
      return href.replace(/^\/tpdweb\/?/, "/");
    } else {
      return href || null;
    }
  },
};
