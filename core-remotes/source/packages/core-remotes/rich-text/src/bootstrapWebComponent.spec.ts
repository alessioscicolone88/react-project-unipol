import bootstrapClient from "./bootstrapClient";
describe("tpd-rich-text bootstrapComponents", () => {
  it("Testing imports", () => {
    const bootstrapWebComponent = require("./bootstrapWebComponent");
    expect(bootstrapWebComponent).toBeDefined();
  });
});
