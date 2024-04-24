import bootstrapClient from "./bootstrapClient";
describe("tpd-image bootstrapComponents", () => {
  it("Testing imports", () => {
    const bootstrapWebComponent = require("./bootstrapWebComponent");
    expect(bootstrapWebComponent).toBeDefined();
  });
});
