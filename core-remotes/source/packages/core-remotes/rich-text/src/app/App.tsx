import React, { useEffect, useState, createElement, useRef } from "react";
import PreviewMode from "./preview-mode/PreviewMode";
import { CommonMFE, ReactMFE } from "@tpd-web-common-libs/nodejs-library";
import { AppContainer } from "./App.style";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { TRichTextValue } from "./App.type";

const LazyLoading = ReactMFE.LazyLoadingFactory(
  { useEffect, useState, createElement },
  () => import("./edit-mode/EditMode")
);

type TRichTextProps = CommonMFE.Types.TProps & {
  isEditMode: boolean;
  name: string;
  type: string;
  value: TRichTextValue;
  keywords: string[];
  componentType?: string;
};

const App = (props: TRichTextProps) => {
  const {
    __host__,
    isEditMode,
    name,
    type,
    value: propsValue,
    parentId,
    componentType,
  } = props;

  const [value, setValue] = useState(propsValue);
  const appRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  let app = <PreviewMode value={value} componentType={componentType} />;

  if (isEditMode) {
    app = (
      <LazyLoading
        __host__={__host__}
        name={name}
        value={value}
        type={type}
        setValue={setValue}
        appRef={appRef}
        parentId={parentId}
      >
        {app}
      </LazyLoading>
    );
  }

  return (
    <AppContainer ref={appRef} className="rich-text-container">
      {app}
    </AppContainer>
  );
};

export default ReactMFE.EmotionProviderHOCFactory(
  React,
  { CacheProvider },
  createCache
)(App);
