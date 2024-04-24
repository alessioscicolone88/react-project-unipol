import React, { useState } from "react";
import Select, {
  components,
  DropdownIndicatorProps,
  ClearIndicatorProps,
} from "react-select";
import { TImageValue } from "../../App";
import { PATH_SPLITTER } from "../EditMode";
import {
  ContainerDiv,
  CMSListWrapper,
  SelectLabel,
  SelectWrapper,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbLi,
  CMSList,
  CMSListItem,
  CMSListItemText,
  CMSListItemFolderIcon,
  CMSListItemAngleIcon,
  CMSImgRadioBtnLabel,
  CMSImgRadioBtnInput,
  CMSImgRadioBtnList,
  CMSImgRadioBtnWrapper,
  GoBackIcon,
  GoBackText,
  SearchIcon,
  CloseIcon,
} from "./SelectCmsImg.style";

export type TSelectedImage = {
  title: string;
  alt: string;
  src: string;
} | null;

type parsedCmsResOption = {
  label: string;
  value: TSelectedImage;
};

type TSelectCmsImg = {
  cmsProxyResponse: any;
  selectedImage: TSelectedImage;
  setSelectedImage: React.Dispatch<React.SetStateAction<TSelectedImage>>;
  parsedCMSResForSelect: parsedCmsResOption[];
};

const SelectCmsImg = (props: TSelectCmsImg) => {
  const {
    cmsProxyResponse,
    selectedImage,
    setSelectedImage,
    parsedCMSResForSelect,
  } = props;

  const [selectedPath, setSelectedPath] = useState(null);

  const getPathArray = (path: string): string[] =>
    !path ? [] : path.split(PATH_SPLITTER);

  const handleSelectChange = (selectValue: parsedCmsResOption | null) => {
    if (selectValue) {
      const updatedPath = selectValue.label.slice(
        0,
        selectValue.label.lastIndexOf(PATH_SPLITTER)
      );
      setSelectedPath(updatedPath);
      setSelectedImage({
        ...selectValue.value,
      });
    }
  };

  const renderBreadcrumbs = () => {
    const path = !selectedPath ? [] : selectedPath.split(PATH_SPLITTER);
    return (
      <Breadcrumb>
        <BreadcrumbLi key="Root">
          <BreadcrumbLink
            role="breadcrumbRoot"
            onClick={() => navigateBackCMSFoldersToDepth(-1)}
          >
            Lista librerie
          </BreadcrumbLink>
        </BreadcrumbLi>
        {path.map((element: string, breadcrumbDepth: number) => {
          return (
            <BreadcrumbLi key={element}>
              <BreadcrumbLink
                role="breadcrumbLink"
                onClick={() => navigateBackCMSFoldersToDepth(breadcrumbDepth)}
              >
                {element}
              </BreadcrumbLink>
            </BreadcrumbLi>
          );
        })}
      </Breadcrumb>
    );
  };

  const cmsProxyResponseAccordingToSelection = (nestedResponse: any) => {
    if (selectedPath) {
      const path = getPathArray(selectedPath);
      let responseAccordingToSelection = {
        ...nestedResponse,
      };
      path.forEach((pathElement: string) => {
        responseAccordingToSelection =
          responseAccordingToSelection[pathElement];
      });
      return responseAccordingToSelection;
    } else {
      return nestedResponse;
    }
  };

  const handleChangeImageBtn = (value: any) => (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedImage({
      ...value,
    });
  };

  const cmsProxyResponseToList = (cmsProxyResponse: any) => {
    let list = [];
    let CMSContainerList: any;
    const responseValueToDisplay =
      cmsProxyResponseAccordingToSelection(cmsProxyResponse);
    if (!Array.isArray(responseValueToDisplay)) {
      // user is navigating the cms response but has no reached images level
      list = Object.keys(responseValueToDisplay).map(renderListItem);
      CMSContainerList = CMSList;
    } else {
      // user has reached images level
      list = responseValueToDisplay.map(renderImageItem);
      CMSContainerList = CMSImgRadioBtnList;
    }
    return (
      <CMSContainerList>
        {goBackListItem()}
        {list}
      </CMSContainerList>
    );
  };

  const goBackListItem = () => {
    const path = getPathArray(selectedPath);
    let goBackContent: any;
    if (path.length >= 1) {
      goBackContent = (
        <CMSListItem
          role="goBackListItem"
          onClick={() => navigateBackCMSFoldersToDepth(path.length - 2)}
        >
          <GoBackIcon />
          <GoBackText>{path[path.length - 1]}</GoBackText>
        </CMSListItem>
      );
    }

    return <>{goBackContent}</>;
  };

  const renderListItem = (text: string) => {
    const keyValue = `${
      selectedPath ? `${selectedPath}-${text}` : text
    }-ListItem`;
    return (
      <CMSListItem key={keyValue} onClick={() => clickOnListItem(text)}>
        <CMSListItemFolderIcon />
        <CMSListItemText>{text}</CMSListItemText>
        <CMSListItemAngleIcon />
      </CMSListItem>
    );
  };

  const renderImageItem = ({ title, alt, src }: any) => {
    const keyValue = `${
      selectedPath ? `${selectedPath}-${title}` : title
    }-ImageItem`;
    return (
      <CMSImgRadioBtnWrapper
        key={keyValue}
        onClick={handleChangeImageBtn({
          title,
          alt,
          src,
        })}
      >
        <CMSImgRadioBtnInput
          type="radio"
          name="imgRadioButtons"
          checked={
            !!selectedImage &&
            title === selectedImage.title &&
            alt === selectedImage.alt &&
            src === selectedImage.src
          }
          readOnly={true}
        />
        <CMSImgRadioBtnLabel>{title}</CMSImgRadioBtnLabel>
      </CMSImgRadioBtnWrapper>
    );
  };

  const clickOnListItem = (text: string) => {
    setSelectedPath(
      `${selectedPath ? `${selectedPath}${PATH_SPLITTER}` : ""}${text}`
    );
  };

  const navigateBackCMSFoldersToDepth = (folderDepth: number) => {
    setSelectedImage(null);
    let newPath: string | null = null;
    if (folderDepth >= 0) {
      newPath = getPathArray(selectedPath)
        .splice(0, folderDepth + 1)
        .join(PATH_SPLITTER);
    }
    setSelectedPath(newPath);
  };

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    let dropDownIndicatorTsx: any;
    if (!props.hasValue) {
      dropDownIndicatorTsx = (
        <components.DropdownIndicator {...props}>
          <SearchIcon />
        </components.DropdownIndicator>
      );
    }
    return <>{dropDownIndicatorTsx}</>;
  };

  const ClearIndicator = (props: ClearIndicatorProps) => {
    return (
      <components.ClearIndicator {...props}>
        <CloseIcon />
      </components.ClearIndicator>
    );
  };

  return (
    <ContainerDiv>
      <SelectWrapper>
        <SelectLabel>Seleziona un’immagine dalla libreria del CMS</SelectLabel>
        <Select
          placeholder="Cerca nella lista"
          onChange={handleSelectChange}
          isClearable={true}
          options={parsedCMSResForSelect}
          components={{
            DropdownIndicator,
            ClearIndicator,
            IndicatorSeparator: () => null,
          }}
          styles={{
            control: (baseStyles, state) => {
              return {
                ...baseStyles,
                height: "48px",
                marginTop: "8px",
                cursor: "pointer",
                fontWeight: 400,
                fontSize: "14px",
                paddingLeft: "12px",
                borderColor: state.isFocused ? "#013563" : "#B9B9B9",
                "&:hover": {
                  borderColor: "#013563",
                },
                boxShadow: "none",
              };
            },
            option: (baseStyles, state) => ({
              ...baseStyles,
              padding: "11px 0",
              height: "40px",
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "17px",
              color: "#363636",
              cursor: "pointer",
              borderBottom: "1px solid #B9B9B9",
              backgroundColor:
                state.isFocused || state.isSelected
                  ? "rgba(1, 53, 99, 0.04)"
                  : "white",
              ":last-of-type": {
                borderBottom: "none",
              },
              ":hover": {
                backgroundColor: "rgba(1, 53, 99, 0.04)",
              },
            }),
            menu: (baseStyle) => ({
              ...baseStyle,
              border: "1px solid #013563",
              boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }),
            menuList: (baseStyle) => ({
              ...baseStyle,
              padding: "8px 10px 8px 20px",
              marginRight: "10px",
              scrollbarGutter: "stable",

              /* scrollbar width */
              "::-webkit-scrollbar": {
                width: "4px",
              },
              /* scrollbar track */
              "::-webkit-scrollbar-track": {
                borderRadius: "80px",
                background: "#b9b9b9",
              },
              /* scrollbar handle */
              "::-webkit-scrollbar-thumb": {
                background: "#013563",
                borderRadius: "80px",
              },
            }),
          }}
        />
      </SelectWrapper>
      <CMSListWrapper>
        {renderBreadcrumbs()}
        {cmsProxyResponseToList(cmsProxyResponse)}
      </CMSListWrapper>
    </ContainerDiv>
  );
};

export default SelectCmsImg;
