import React from "react";
import {
  CommonMFE,
  Styles,
  ReactMFE,
  Helpers,
} from "@tpd-web-common-libs/nodejs-library";
import { Global, css } from "@emotion/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

type TAppProps = {
  disableGlobalCss?: string;
} & CommonMFE.Types.TProps;

const App = (props: TAppProps) => {
  const { disableGlobalCss } = props;
  const isEnabledGlobalCss =
    (!disableGlobalCss || disableGlobalCss != "true") &&
    (Helpers.EnvironmentHelper.isServerSide());

  return (
    <div className="tpd-remotes-importer-container">
      
        <Global
          styles={css`
            ${Styles.GlobalStyle}
          `}
        />

    </div>
  );
};

export default ReactMFE.EmotionProviderHOCFactory(
  React,
  { CacheProvider },
  createCache
)(App);
