import { CommonMFE } from "@tpd-web-common-libs/nodejs-library";

const REMOTES_MAP: CommonMFE.Types.TChildrenRemoteDeps = {
  richText: {
    getRemoteDependencies: (containerProps: CommonMFE.Types.TProps) => [
      {
        props: containerProps.config["Testo"],
      },
    ],
  },
  tpdImage: {
    getRemoteDependencies: (containerProps: CommonMFE.Types.TProps) => [
      {
        props: containerProps.config["Immagine"],
      },
    ],
  },
};

export default REMOTES_MAP;
