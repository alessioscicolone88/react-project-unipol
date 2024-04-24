
import { TReactRemoteDependency } from "../../react-mfe/types";
import {
  TClientSideRemote,
  TExecImportRemoteEntry,
  TImportRemoteEntry,
  TProps,
  TServerSideRemote,
} from "./general.types";

export type TRemoteDependency = TReactRemoteDependency;

export type TRemoteDependenciesMap = {
  [remoteName: string]: TRemoteDependency;
};

export type TChildrenRemoteDeps = {
  [__mfeName__: string]: {
    getRemoteDependencies?: (containerProps: TProps) => TRemoteDependency[];
    import?: TImportRemoteEntry;
  };
};

export type TRemotesMap = {
  [__mfeName__: string]: {
    import: TImportRemoteEntry;
    execImport?: TExecImportRemoteEntry;
    clientSideRemote?: TClientSideRemote;
    serverSideRemote?: TServerSideRemote;
    hook?: any;
    childrenRemoteDeps?: TChildrenRemoteDeps;
  };
};
