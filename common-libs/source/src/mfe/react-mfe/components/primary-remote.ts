
import { Helpers, Providers } from "../../../main";
import {
  PrimarySettingsIcon,
  PrimaryVisibilityIcon,
  EditModeIconsContainerStyle,
  visibilityMaskStyle,
} from "../../../styles/EditMode.style";
import {
  TOUCHPOINTS,
  getTouchpointThemeClass,
  getPageColorThemeClass,
} from "../../common-mfe";
import { MFE_NAMES } from "../../mfeSettings";
import { TReactDeps } from "../types";

export function EmotionProviderHOCFactory(
  React: TReactDeps,
  { CacheProvider = null }: any = {},
  createCache: any = null
) {
  return (AppComponent: any) => {
    return (props: any) => {
      const children = React.createElement(AppComponent, props);
      return CacheProvider && createCache
        ? React.createElement(
            CacheProvider,
            {
              value: createCache({
                key: (
                  props.__mfeName__ ||
                  props.name ||
                  "emotion"
                ).toLowerCase(),
              }),
            },
            children
          )
        : children;
    };
  };
}

export function PrimaryRemoteHOCFactory(
  React: TReactDeps,
  styled: any,
  EmotionReact: any = {},
  createCache: any = null
) {
  const EmotionProviderHOC = EmotionProviderHOCFactory(
    React,
    EmotionReact,
    createCache
  );

  return (App: any) => {
    return EmotionProviderHOC((props: any) => {
      const {
        touchpoint = TOUCHPOINTS.UNIPOLSAI,
        colorClassDesktop,
        __host__,
        __mfeName__,
      } = props;

      return React.createElement(
        styled.div`
          position: relative;
        `,
        {
          style: {
            position: "relative",
            minHeight: props.isEditMode ? "100px" : "",
          },
          className: `${getTouchpointThemeClass(
            touchpoint
          )} ${getPageColorThemeClass(
            colorClassDesktop ||
              (__host__.pageProperties &&
                __host__.pageProperties.colorClassDesktop)
          )} ${(props.isEditMode && "is-edit-mode-active") || ""}`,
        },
        App(props)
      );
    });
  };
}
