import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import "@testing-library/jest-dom";

const propsMock = {
  id: "tpdRemotesImporter",
  __mfeName__: "tpdRemotesImporter",
  type: "tpdRemotesImporter",
};

describe("tpdRemotesImporterApp", () => {
  it("Testing rendering of component", async () => {
    let ComponentRenderer;
    await act(() => {
      ComponentRenderer = render(<App {...propsMock} />);
      return Promise.resolve();
    });

    const containerDiv = ComponentRenderer.container.getElementsByClassName(
      "tpd-remotes-importer-container"
    )[0];
    expect(containerDiv).toBeDefined();
    expect(containerDiv).toBeInTheDocument();
  });
});
