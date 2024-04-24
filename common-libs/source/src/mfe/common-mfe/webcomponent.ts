import { ConsoleHelper } from "../../helpers/Console.helper";
import { MFE_NAMES, MFE_SETTINGS } from "../mfeSettings";
import { RemoteService } from "../../providers";
import { TProps, THost } from "./types/general.types";
import { Helpers } from "../../main";
import { TChildrenRemoteDeps } from "./types";

export function initializeComponent(
  selector: string,
  __mfeName__: string,
  clientSideMount: any,
  childrenRemoteDeps: TChildrenRemoteDeps = {}
) {
  try {
    if (hasWebComponentNotDefinedYet(selector)) {
      setPolyfillForEs6AndHTMLElement();
      customElements.define(
        selector,
        WebComponentClassFactory(
          __mfeName__,
          clientSideMount,
          childrenRemoteDeps
        )
      );
    }
    return customElements.get(selector);
  } catch (error) {
    ConsoleHelper.error("ERROR [initializeComponent]", error);
    return null;
  }
}

export function hasWebComponentNotDefinedYet(selector: string) {
  return (
    typeof window !== "undefined" &&
    customElements &&
    !customElements.get(selector)
  );
}

// polyfill for es6 and HTMLElement
export function setPolyfillForEs6AndHTMLElement() {
  if (
    !(
      void 0 === window.Reflect ||
      void 0 === window.customElements ||
      (window.customElements as any).polyfillWrapFlushCallback
    )
  ) {
    const a = HTMLElement;
    (window as any).HTMLElement = {
      HTMLElement: function HTMLElement() {
        return Reflect.construct(a, [], this.constructor);
      },
    }.HTMLElement;
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
}

export function WebComponentClassFactory(
  __mfeName__: string,
  clientSideMount: any,
  childrenRemoteDeps: TChildrenRemoteDeps = {}
) {
  return class extends HTMLElement {
    isMounting = true;
    loaderContainerRef: any;
    loaderRef: any;

    static get observedAttributes() {
      return ["data-props"];
    }
    connectedCallback() {
      const props = this.getProps();
      this.createLoader(__mfeName__);
      this.addPortletAttributes(__mfeName__);

      if (this.isAPrimaryRemote()) {
        this.afterRemotesAreReadyToBeImported(() => {
          const {
            contentId: dataContentId,
            projectId,
            type = "content",
            siteAreaName,
            menuName,
            editContent,
            readContent,
            ...restProps
          } = props;
          const initialPlacement = {
            dataContentId,
            projectId,
            projectName: Helpers.UrlHelper.getProjectNameFromUrl(),
            type,
            siteAreaName:
              siteAreaName && siteAreaName.charAt(0) === "/"
                ? siteAreaName.replace("/", "")
                : siteAreaName,
            menuName:
              menuName && menuName.charAt(0) === "/"
                ? menuName.replace("/", "")
                : menuName,
            actionContent: {
              edit: editContent,
              read: readContent,
              new: this.parentElement
                ?.querySelector(".addContent a")
                ?.getAttribute("href"),
            }
            
          };
          this.updateWebComponent(props);
        });
      } else {
        this.updateWebComponent(props);
      }
    }
    attributeChangedCallback(
      attributeChanged: string,
      oldValue: any,
      newValue: any
    ) {
      // 4th W3C parameter = Namespace (not implemented in Browsers)
      if (oldValue) {
        this.updateWebComponent(this.getProps());
      }
    }
    getProps(index = 0): TProps {
      let props;
      try {
        props = {
          id: `${__mfeName__}-${index}`,
          ...JSON.parse(this.getAttribute("data-props") || "{}"),
          __mfeName__,
        };
      } catch (error) {
        ConsoleHelper.warn(error);
        props = {
          id: `${__mfeName__}-${index}`,
          __mfeName__,
        };
      }
      return props;
    }
    setProps(props: any): void {
      this.setAttribute("data-props", JSON.stringify(props));
    }
    updateWebComponent(newProps: any) {
      this.afterRemotesAreReadyToBeImported(() => {
        return this.updateChildrenDependencies(newProps);
      });
    }
    afterRemotesAreReadyToBeImported(callback: any) {
      const remoteService = RemoteService.getInstance();
      if (remoteService.isInitialized) {
        callback();
      } else {
        remoteService.afterInitialized().then(() => {
          callback();
        });
      }
    }
    updateChildrenDependencies({
      pageTitle,
      colorClassDesktop,
      isUtileASapersi,
      displayBreadcrumbs,
      profile,
      placement,
      ...newProps
    }: any) {
      const remoteService = RemoteService.getInstance();
      remoteService.updateChildrenDependencies(__mfeName__, childrenRemoteDeps);

      if (Helpers.EnvironmentHelper.isClientSide()) {
        const __host__: THost = {
          importMFEBy: (__mfeName__: string) =>
            RemoteService.getInstance().dynamicImportClientSideMFE(__mfeName__),
          url: Helpers.UrlHelper.cleanCMSPathname(window.location.pathname),
          isClientRendering: true,
          pageProperties: {
            isUtileASapersi,
            displayBreadcrumbs,
            colorClassDesktop,
          },
          profile: profile || "",
          pageTitle,
          placement,
        };

        clientSideMount(
          this,
          {
            __host__,
            ...newProps,
          },
          {
            isMounting: this.isMounting,
          }
        )?.then(() => {
          this.destroyLoader();
        });
      }
      this.isMounting = false;
    }

    isAPrimaryRemote(): boolean {
      let isAPrimaryRemoteBool = false;
      try {
        const props = JSON.parse(this.getAttribute("data-props") as string);
        isAPrimaryRemoteBool =
          !("__mfeName__" in props) && "contentId" in props;
      } catch (error) {
        isAPrimaryRemoteBool = false;
      }
      return isAPrimaryRemoteBool;
    }

    createLoader(__mfeName__: string) {
      if (__mfeName__ !== MFE_NAMES.tpdRemotesImporter) {
        this.style.display = "none";
        this.loaderContainerRef = document.createElement("div");
        this.loaderContainerRef.className = "loader-container";
        this.loaderRef = document.createElement("div");
        this.loaderRef.className = "loader";
        this.loaderContainerRef.appendChild(this.loaderRef);
        this.parentElement?.appendChild(this.loaderContainerRef);
      }
    }

    destroyLoader() {
      if (this.loaderContainerRef) {
        setTimeout(() => {
          this.style.display = "block";
          this.loaderContainerRef.remove();
        }, 1000);
      }
    }

    addPortletAttributes(mfeName: string) {
      const mfeSettings = MFE_SETTINGS[mfeName];

      if (mfeSettings) {
        const { type, portlet } = mfeSettings;
        this.setAttribute("data-mfe-type", type);
        this.setAttribute("data-mfe-name", mfeName);
        this.setAttribute("data-mfe-portlet-src", portlet?.path || "");
        this.setAttribute(
          "data-mfe-portlet-unique-name",
          portlet?.uniqueName || ""
        );
        this.setAttribute("data-mfe-portlet-title", portlet?.title || "");

      }
    }
  };
}
