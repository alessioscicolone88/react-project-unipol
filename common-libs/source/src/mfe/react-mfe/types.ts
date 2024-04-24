import { TProps, TRemoteProps } from "../common-mfe/types/general.types";

export type TReactRemoteDependency = {
  props: TProps;
};

export type TRemoteReactMFEProps = TRemoteProps & { __deps__: TReactDeps };

export type TReactDeps = {
  useState?: any;
  useEffect?: any;
  useRef?: any;
  createElement?: any;
  createRoot?: any;
  renderToString?: any;
  hydrateRoot?: any;
  Fragment?: any;
};

export type TReactClientRenderDeps = {
  createElement: any;
  createRoot: any;
  hydrateRoot: any;
};

export type TReactServerRenderDeps = {
  createElement: any;
  renderToString: any;
};
