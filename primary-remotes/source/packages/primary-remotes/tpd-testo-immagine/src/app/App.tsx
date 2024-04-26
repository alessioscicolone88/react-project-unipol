import React, { useEffect, useState } from "react";
import {
  CommonMFE,
  MFE_NAMES,
  ReactMFE,
  Helpers,
} from "@tpd-web-common-libs/nodejs-library";
import { ContainerDiv } from "./App.style";
import styled from "@emotion/styled";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
// import { EditablePage, EditorContextHelper } from "@magnolia/react-editor";

const App = (props: CommonMFE.Types.TProps) => {
  const { __host__, config, isEditMode, id: containerID } = props;

  const richText = config["Testo"];
  const tpdImage = config["Immagine"];

  return (
    <ContainerDiv  isVisible={true}>
      <div className="tpd-testo-immagine">
        <div className="tpd-image">
          <ReactMFE.Remote
            id={CommonMFE.generateID(
              containerID,
              `${MFE_NAMES.tpdImmagineConTestoLaterale}-Immagine`
            )}
            __deps__={React}
            __host__={__host__}
            __mfeName__={MFE_NAMES.tpdImage}
            isEditMode={isEditMode}
            {...tpdImage}
          />
        </div>
        <div className="tpd-side-text">
          <div className="tpd-side-text-wrapper">
            <div className="tpd-content-description">
              <ReactMFE.Remote
                id={CommonMFE.generateID(
                  containerID,
                  `${MFE_NAMES.tpdImmagineConTestoLaterale}-Testo`
                )}
                __deps__={React}
                __host__={__host__}
                __mfeName__={MFE_NAMES.richText}
                isEditMode={isEditMode}
                {...richText}
              />
            </div>
          </div>
        </div>
      </div>
      </ContainerDiv>
  );
};

export default ReactMFE.PrimaryRemoteHOCFactory(
  React,
  styled,
  { CacheProvider },
  createCache
)(App);
