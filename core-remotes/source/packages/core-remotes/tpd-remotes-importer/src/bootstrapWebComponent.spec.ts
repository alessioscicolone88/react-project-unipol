import bootstrapClient from "./bootstrapClient";
describe("tpdItem bootstrapComponents", () => {
  it("Testing imports", () => {
    const bootstrapWebComponent = require("./bootstrapWebComponent");
    expect(bootstrapWebComponent).toBeDefined();
  });
});
