/**
 * @jest-environment node
 */
import * as BootstrapServer from "./bootstrapServer";

describe("Remotes rich-text bootstrapServer Export", () => {
  it("Testing export of method", () => {
    expect(BootstrapServer).toBeDefined();
  });
});
