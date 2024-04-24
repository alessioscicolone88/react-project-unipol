import styled from "@emotion/styled";

const BreadcrumbHeight = 19;
const BreadcrumbMarginBottom = 8;
const CMSNavigationWrapperHeight = 307;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectWrapper = styled.div`
  margin-bottom: 16px;
`;

export const SelectLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #363636;
  margin-bottom: 0px;
  line-height: 19px;
`;

export const CMSListWrapper = styled.div`
  position: relative;
`;

export const Breadcrumb = styled.ul`
  list-style: none;
  padding-left: 0;
  line-height: 19px;
  height: ${BreadcrumbHeight}px;
  margin-bottom: ${BreadcrumbMarginBottom}px;
  margin-top: 0px;

  & li:not(:first-of-type):last-of-type:before {
    content: "/\\00a0";
    padding: 0 4px;
    font-size: 16px;
    font-weight: 400;
    color: #363636;
  }

  & li:not(:first-of-type):not(:last-of-type):before {
    content: "/\\00a0";
    padding: 0 4px;
    font-size: 16px;
    font-weight: 700;
    color: #013563;
  }

  & li:not(:last-of-type) {
    a {
      font-weight: 700;
      color: #013563;
    }
  }
`;

export const BreadcrumbLi = styled.li`
  display: inline;
`;

export const BreadcrumbLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #363636;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const CMSListBorderWidth = 1;
export const CMSList = styled.ul`
  height: ${CMSNavigationWrapperHeight}px;
  list-style: none;
  margin: 0 -22px 0 0;
  padding: 0 18px 0 0;
  overflow-x: hidden;
  scrollbar-gutter: stable;

  &:before {
    content: "";
    position: absolute;
    top: ${BreadcrumbHeight + BreadcrumbMarginBottom}px;
    left: 0px;
    width: 550px;
    height: ${CMSNavigationWrapperHeight - 2 * CMSListBorderWidth}px;
    border: 1px solid #b9b9b9;
    border-radius: 4px;
    pointer-events: none;
  }

  /* scrollbar width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* scrollbar track */
  ::-webkit-scrollbar-track {
    border-radius: 80px;
    background: #b9b9b9;
  }

  /* scrollbar handle */
  ::-webkit-scrollbar-thumb {
    background: #013563;
    border-radius: 80px;
  }
`;

export const GoBackIcon = styled.div`
  &:before {
    content: url("/NextAssets/icons/angle-left.svg");
  }
`;

export const GoBackText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #363636;
  padding-left: 21px;
`;

const CMSListItemHeight = 52;
const CMSListItemVerticalPadding = 16;
export const CMSListItem = styled.li`
  display: flex;
  cursor: pointer;
  height: ${CMSListItemHeight - 2 * CMSListItemVerticalPadding}px;
  border-bottom: 1px solid #b9b9b9;
  padding: 16px 24px;

  &:hover {
    background-color: rgba(1, 53, 99, 0.04);
  }

  /* Remove border from last element only if the wrapper is scrolling (>6 elements) */
  &:nth-of-type(n + 6):last-of-type {
    border-bottom: none;
  }
`;

export const CMSListItemFolderIcon = styled.div`
  &:before {
    content: url("/NextAssets/icons/folder.svg");
  }
`;

export const CMSListItemText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #363636;
  padding-left: 16px;
  flex-grow: 1;
`;

export const CMSListItemAngleIcon = styled.div`
  &:before {
    content: url("/NextAssets/icons/angle-right.svg");
  }
`;

const CMSImgRadioBtnListBorderWidth = 1;
export const CMSImgRadioBtnList = styled.div`
  height: ${CMSNavigationWrapperHeight}px;
  margin: 0 -22px 0 0;
  padding: 0 18px 0 0;
  overflow-x: hidden;
  scrollbar-gutter: stable;

  &:before {
    content: "";
    position: absolute;
    top: ${BreadcrumbHeight + BreadcrumbMarginBottom}px;
    left: 0px;
    width: 550px;
    height: ${CMSNavigationWrapperHeight - 2 * CMSImgRadioBtnListBorderWidth}px;
    border: 1px solid #b9b9b9;
    border-radius: 4px;
    pointer-events: none;
  }

  /* scrollbar width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* scrollbar track */
  ::-webkit-scrollbar-track {
    border-radius: 80px;
    background: #b9b9b9;
  }

  /* scrollbar handle */
  ::-webkit-scrollbar-thumb {
    background: #013563;
    border-radius: 80px;
  }
`;

const CMSImgRadioBtnWrapperHeight = 52;
const CMSImgRadioBtnWrapperVerticalPadding = 18;
export const CMSImgRadioBtnWrapper = styled.div`
  display: flex;
  align-content: center;
  height: ${CMSImgRadioBtnWrapperHeight -
  2 * CMSImgRadioBtnWrapperVerticalPadding}px;
  border-bottom: 1px solid #b9b9b9;
  padding: 18px 24px;
  cursor: pointer;

  /* Remove border from last element only if the wrapper is scrolling (>6 elements) */
  &:nth-of-type(n + 6):last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(1, 53, 99, 0.04);
  }
`;

export const CMSImgRadioBtnLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #363636;
  margin: 0 0 0 16px;
  cursor: pointer;
`;

export const CMSImgRadioBtnInput = styled.input`
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #013563;
  border-radius: 4px;
  margin: 0 !important;
  cursor: pointer;
  pointer-events: none;

  &:checked {
    background-color: #013563;

    &:after {
      position: absolute;
      content: url("/NextAssets/icons/check.svg");
      left: 2px;
      top: -1px;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const SearchIcon = styled.div`
  &:before {
    content: url("/NextAssets/icons/search.svg");
    display: block;
    margin: 5px 14px 0 0;
  }
`;

export const CloseIcon = styled.div`
  &:before {
    content: url("/NextAssets/icons/cross-select.svg");
  }
  margin: 5px 14px 0 0;
`;
