import React, { useEffect, useState, createElement } from "react";
import styled from "@emotion/styled";
import PreviewMode from "./preview-mode/PreviewMode";
import { CommonMFE, ReactMFE } from "@tpd-web-common-libs/nodejs-library";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { TImageValue } from "./App.type";

const LazyLoading = ReactMFE.LazyLoadingFactory(
  { useEffect, useState, createElement },
  () => import("./edit-mode/EditMode")
);

type TImageProps = CommonMFE.Types.TProps & {
  isEditMode: boolean;
  value: TImageValue;
  name: string;
};

const Container = styled.div`
  height: 100%;
  max-width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = (props: TImageProps) => {
  const { isEditMode, __host__, value, name, parentId } = props;

  let appContent = <PreviewMode value={value} />;

  if (isEditMode) {
    appContent = (
      <LazyLoading
        __host__={__host__}
        name={name}
        parentId={parentId}
        value={value}
      >
        {appContent}
      </LazyLoading>
    );
  }

  return <Container className="tpd-image-container">{appContent}</Container>;
};

export default ReactMFE.EmotionProviderHOCFactory(
  React,
  { CacheProvider },
  createCache
)(App);
