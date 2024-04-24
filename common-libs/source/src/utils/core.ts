import { ConsoleHelper } from "../helpers";
import { EnvironmentHelper } from "../helpers/environment.helper";
import { MFE_NAMES } from "../mfe";
import { TProps } from "../mfe/common-mfe/types/general.types";

import {
  TRemoteDependenciesMap,
  TRemoteDependency,
} from "../mfe/common-mfe/types/remote.types";

export function getAngularWebComponentSelector(
  __mfeName__: string,
  id: string
) {
  return `${getWebComponentMFENameBy(__mfeName__)}[data-id='${id}']`;
}

export function getWebComponentMFENameBy(__mfeName__: string) {
  return __mfeName__.replace(
    /[A-Z]/g,
    (match: string, offset: number) =>
      (offset > 0 ? "-" : "") + match.toLowerCase()
  );
}

export function generateServerSideHtmlFrom(props: TProps) {
  const { __serverSideHtml__ } = props;
  if (__serverSideHtml__) {
    return __serverSideHtml__;
  } else if (EnvironmentHelper.isRunningTest()) {
    return generateHtmlFrom(props);
  } else {
    return null;
  }
}

export function generateHtmlFrom(props: TProps) {
  const { __serverSideHtml__ } = props;
  return __serverSideHtml__
    ? __serverSideHtml__
    : generatePlaceholderHtmlFrom(props);
}

export function generatePlaceholderHtmlFrom(props: TProps) {
  let placeholderHtml = "";
  if (typeof props === "object" && "__mfeName__" in props) {
    const { children, __serverSideHtml__, __host__, __deps__, ...dataProps } =
      props;
    const { __mfeName__, id } = dataProps;
    const selector = getWebComponentMFENameBy(__mfeName__);
    const childrenHTML =
      !!children && "props" in children ? generateHtmlFrom(children.props) : "";

    let dataPropsString;
    try {
      const otherProps = !!__host__
        ? {
            __host__: {
              url: __host__.url,
              pageProperties: __host__.pageProperties,
            },
          }
        : {};
      dataPropsString = JSON.stringify({
        ...dataProps,
        ...otherProps,
      });
    } catch (error) {
      dataPropsString = "";
    }

    placeholderHtml = `<${selector} data-id="${id}" data-props='${dataPropsString}'>${childrenHTML}</${selector}>`;
  }
  return placeholderHtml;
}

export function generateChildrenRemotesDependencies(
  allRemoteDependencies: TRemoteDependency[]
): { [key: string]: TRemoteDependenciesMap } {
  return allRemoteDependencies.reduce(
    (
      acc: { [key: string]: TRemoteDependenciesMap },
      dependency: TRemoteDependency
    ) => {
      if (
        !!dependency &&
        typeof dependency.props === "object" &&
        Object.keys(dependency.props).length > 0 &&
        "id" in dependency.props &&
        "__mfeName__" in dependency.props
      ) {
        return {
          ...acc,
          [dependency.props.__mfeName__]: {
            ...acc[dependency.props.__mfeName__],
            [dependency.props.id]: dependency,
          },
        };
      } else {
        return acc;
      }
    },
    {}
  );
}

export function extractConfigFromContentData(
  id: string,
  data: any[] = []
) {
  return data.reduce((acc, el) => {
    const __mfeName__ = convertContentDataType(el.type);
    const newEl = __mfeName__
      ? {
          id: `${id}-${el.name}`,
          parentId: id,
          __mfeName__,
          ...el,
        }
      : el;

    return {
      ...acc,
      [el.name]: newEl,
    };
  }, {});
}

export function convertContentDataType(type: string): string | undefined {
  return {
    [CMS_CONTENT_DATA_TYPES.WCM_TextComponent]: MFE_NAMES.tpdShortText,
    [CMS_CONTENT_DATA_TYPES.WCM_ShortTextComponent]: MFE_NAMES.tpdShortText,

    [CMS_CONTENT_DATA_TYPES.WCM_NumericComponent]: MFE_NAMES.tpdNumber,

    [CMS_CONTENT_DATA_TYPES.WCM_RichTextComponent]: MFE_NAMES.richText,

    [CMS_CONTENT_DATA_TYPES.WCM_ImageComponent]: MFE_NAMES.tpdImage,
    [CMS_CONTENT_DATA_TYPES.WCM_ReferenceComponent]: MFE_NAMES.tpdImage,

    [CMS_CONTENT_DATA_TYPES.WCM_LinkComponent]: MFE_NAMES.tpdCta,
    [CMS_CONTENT_DATA_TYPES.WCM_OptionSelectionComponent]:
      MFE_NAMES.tpdOptionSelection,
  }[type];
}

export const CMS_CONTENT_DATA_TYPES = {
  WCM_AuthoringTemplate: "AuthoringTemplate",
  WCM_Category: "Category",
  WCM_Content: "Content",
  WCM_DateComponent: "DateComponent",
  WCM_FileComponent: "FileComponent",
  WCM_HTMLComponent: "HTMLComponent",
  WCM_ImageComponent: "ImageComponent",
  WCM_NumericComponent: "NumericComponent",
  WCM_PresentationTemplate: "PresentationTemplate",
  WCM_RichTextComponent: "RichTextComponent",
  WCM_ShortTextComponent: "ShortTextComponent",
  WCM_SiteArea: "SiteArea",
  WCM_Taxonomy: "Taxonomy",
  WCM_TextComponent: "TextComponent",
  WCM_Workflow: "Workflow",
  WCM_WorkflowStage: "WorkflowStage",
  WCM_LinkComponent: "LinkComponent",
  WCM_OptionSelectionComponent: "OptionSelectionComponent",
  WCM_ReferenceComponent: "ReferenceComponent",
};
