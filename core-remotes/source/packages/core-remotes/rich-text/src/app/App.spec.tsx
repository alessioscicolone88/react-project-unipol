import React from "react";
import { render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

window.scrollBy = jest.fn();

describe("RichTextApp", () => {
  it("Testing rendering of component in preview mode", async () => {
    const propsMock = {
      id: "rich-text-1",
      __mfeName__: "richText",
      isEditMode: false,
      name: "name",
      value: { type: "text", value: "value" },
      type: "text",
      keywords: [],
    };

    let ComponentRenderer;

    await act<any>(() => {
      ComponentRenderer = render(<App {...propsMock} />);
    });

    await waitFor(() => {
      const mfeRichTextContainer =
        ComponentRenderer.container.getElementsByClassName(
          "rich-text-container"
        )[0];
      expect(mfeRichTextContainer).toBeDefined();
      const mfeRichTextPreview =
        ComponentRenderer.container.getElementsByClassName(
          "rich-text-preview-mode-container"
        )[0];
      expect(mfeRichTextPreview).toBeDefined();
      expect;
    });
  });

  it("Testing rendering of component in edit mode", async () => {
    const propsMock = {
      id: "rich-text-1",
      __mfeName__: "richText",
      isEditMode: true,
      name: "name",
      value: { type: "text", value: "value" },
      type: "text",
      keywords: [],
    };

    let ComponentRenderer;

    await act<any>(() => {
      ComponentRenderer = render(<App {...propsMock} />);
    });

    await waitFor(() => {
      const mfeRichTextEditor =
        ComponentRenderer.container.getElementsByClassName(
          "rich-text-edit-mode-container"
        )[0];
      expect(mfeRichTextEditor).toBeDefined();
    });
  });
});
