import { CommonMFE, MFE_SETTINGS } from "../..";
import { ConsoleHelper } from "../../../helpers";
import { generateServerSideHtmlFrom } from "../../../utils";
import { TProps, TRemote } from "../../common-mfe/types/general.types";
import { TReactDeps, TRemoteReactMFEProps } from "../types";

export function Remote({ __deps__, ...props }: TRemoteReactMFEProps) {
  return !!__deps__ ? ReactRemoteFactory(__deps__)(props) : "";
}

const ReactRemoteFactory =
  ({ useState, useEffect, useRef, createElement }: TReactDeps) =>
  (props: TProps) => {
    const { id, __mfeName__, attributes = {} } = props;
    const ref = useRef();
    const [isMounting, setIsMounting] = useState(true);
    const [remote, setRemote] = useState(null);
    const [serverSideHtml] = useState(generateServerSideHtmlFrom(props));

    useEffect(() => {
      CommonMFE.importMFEFactory(props)(__mfeName__)
        .then((newRemote: TRemote | null) => {
          if (
            !newRemote ||
            !("__mfeName__" in newRemote) ||
            newRemote.__mfeName__ !== __mfeName__
          ) {
            throw new Error("Remote is undefined!");
          }
          setRemote(newRemote);
          return newRemote;
        })
        .catch((err: string) => {
          const errorMessage = `[CSR ERROR] ${err}`;
          setRemote(null);
          ConsoleHelper.error(errorMessage);
          return null as any;
        });
      return () => {
        if (remote && typeof remote.clientSideUnmount === "function") {
          remote.clientSideUnmount(ref.current, props);
          ConsoleHelper.log(id, "is destroyed...");
        }
      };
    }, []);

    useEffect(() => {
      if (remote) {
        if (isMounting) {
          ConsoleHelper.log(id, "is mounting...");
        } else {
          ConsoleHelper.log(id, " is updating...");
        }

        remote
          .clientSideMount(ref.current, props, {
            isMounting,
          })
          .then(() => {
            if (isMounting) {
              ConsoleHelper.log(id, "is mounted");
              setIsMounting(false);
            } else {
              ConsoleHelper.log(id, " is updated");
            }
          });
      }
      return () => {
        // do nothing.
      };
    }, [remote, ...Object.values(props)]);

    const styles = "style" in attributes ? attributes.style : {};
    const { type, portlet } = MFE_SETTINGS[__mfeName__];
    return createElement("div", {
      ...attributes,
      "data-mfe-type": type,
      "data-mfe-name": __mfeName__,
      "data-mfe-portlet-src": portlet?.path || "",
      "data-mfe-portlet-unique-name": portlet?.uniqueName || "",
      "data-mfe-portlet-title": portlet?.title || "",
      style: {
        height: "100%",
        width: "100%",
        ...styles,
      },
      dangerouslySetInnerHTML: {
        __html: serverSideHtml,
      },
      ref,
    });
  };
