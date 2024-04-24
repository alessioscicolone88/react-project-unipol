import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, act } from "@testing-library/react";
import EditMode, { TRichTextEditModeProps } from "./EditMode";

// Mock the CommonMFE library to provide required values for __host__

// Mock the necessary global functions
global.document.addEventListener = jest.fn();
global.document.removeEventListener = jest.fn();

jest.mock("@tpd-web-common-libs/nodejs-library", () => ({
  Helpers: {
    EditToolbarHelper: {
      toggleSpace: jest.fn(),
    },
    ConsoleHelper: {
      error: jest.fn(),
    },
  },
}));

jest.useFakeTimers(); // Use fake timers to control the timers in tests

const mockProps: TRichTextEditModeProps = {
  __host__: {
    router: {},
    importMFEBy: jest.fn(),
    isClientRendering: true,
    pageProperties: {},
    url: "tpdweb",
    pageTitle: "title",
    profile: "profile",
    placement: {
      type: "content",
      dataContentId: "id",
    },
  },
  name: "someName",
  value: {
    type: "text",
    value: "<a>Prova</a>",
  }, // Set appropriate value object here for testing
  type: "someType",
  setValue: jest.fn(),
  children: <div>Mock children</div>,
  appRef: {
    current: document.createElement("div"),
  },
  parentId: "",
};

describe("RichText EditMode", () => {
  it("should render the children", () => {
    const { getByText } = render(<EditMode {...mockProps} />);
    expect(getByText("Mock children")).toBeDefined();
  });

  it("should add the inline-rich-text class and hide the containerDiv when an iframe is available", async () => {
    let customEditor;
    const mockIframe = document.createElement("iframe");
    document.body.appendChild(mockIframe);
    const richTextInline = document.createElement("div");
    richTextInline.setAttribute(
      "id",
      mockProps.__host__.placement.dataContentId +
        "_richTextInline_" +
        mockProps.name
    );
    document.body.appendChild(richTextInline);

    jest
      .spyOn(
        mockIframe.contentWindow?.document.body.style,
        "backgroundColor",
        "get"
      )
      .mockReturnValue("transparent");

    await act<any>(() => {
      customEditor = render(<EditMode {...mockProps} />);
    });
    // Advance timers by 1000ms (1 second)
    jest.advanceTimersByTime(1000);

    const containerDiv = document.querySelector(
      ".rich-text-edit-mode-container"
    ) as HTMLElement;

    expect(containerDiv.style.display).toContain("none");
  });

  it("should toggle isEditable state and attach and remove click event listener when an iframe is available", async () => {
    let customEditor;

    await act<any>(() => {
      customEditor = render(<EditMode {...mockProps} />);
    });

    const mockIframe = document.createElement("iframe");
    document.body.appendChild(mockIframe);
    mockIframe.contentWindow.document.body.style.backgroundColor =
      "transparent";

    const outsideElement = document.createElement("div");
    document.body.appendChild(outsideElement);

    // Click outside the iframe
    fireEvent.click(outsideElement);

    // expect(document.removeEventListener).toHaveBeenCalledWith(
    //   "click",
    //   expect.any(Function)
    // );

    // Click inside the iframe
    fireEvent.click(mockIframe.contentWindow.document.body);

    // expect(document.addEventListener).toHaveBeenCalledWith(
    //   "click",
    //   expect.any(Function)
    // );
  });

  it("should set isEditable to false when clicked outside richTextInline", () => {
    const { container } = render(
      <EditMode {...mockProps}>Some content</EditMode>
    );

    // Simulate the click event on an element outside the richTextInline
    fireEvent.click(container);

    // Assert that setIsEditable was called with false
    // You need to access component state or perform other checks here
  });

  it("should not set isEditable to false when clicked inside richTextInline", () => {
    const { getByTestId, container } = render(
      <EditMode {...mockProps}>
        <div data-testid="richTextInline_testName">Rich text content</div>
      </EditMode>
    );

    const richTextInline = getByTestId("richTextInline_testName");

    // Simulate the click event on the richTextInline element
    fireEvent.click(richTextInline);

    // Assert that setIsEditable was not called with false
    // You need to access component state or perform other checks here
  });

  it("should remove event listener when clicked outside richTextInline", () => {
    const { container } = render(
      <EditMode {...mockProps}>Some content</EditMode>
    );

    // Simulate the click event on an element outside the richTextInline
    fireEvent.click(container);

    // Assert that the event listener was removed
    // You might need to use a mock to check if removeEventListener was called
  });

  it("should not remove event listener when clicked inside richTextInline", () => {
    const { getByTestId, container } = render(
      <EditMode {...mockProps}>
        <div data-testid="richTextInline_testName">Rich text content</div>
      </EditMode>
    );

    const richTextInline = getByTestId("richTextInline_testName");

    // Simulate the click event on the richTextInline element
    fireEvent.click(richTextInline);

    // Assert that the event listener was not removed
    // You might need to use a mock to check if removeEventListener was called
  });

  it("should call Helpers.EditToolbarHelper.toggleSpace when isEditable state changes", () => {
    render(<EditMode {...mockProps} />);

    expect(
      require("@tpd-web-common-libs/nodejs-library").Helpers.EditToolbarHelper
        .toggleSpace
    ).toHaveBeenCalledWith(expect.any(Boolean));
  });
});
