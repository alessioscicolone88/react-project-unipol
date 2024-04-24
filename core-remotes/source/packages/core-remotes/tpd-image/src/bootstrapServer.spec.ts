/**
 * @jest-environment node
 */
import * as BootstrapServer from "./bootstrapServer";

describe("Remotes tpdImage bootstrapServer Export", () => {
  it("Testing export of method", () => {
    expect(BootstrapServer).toBeDefined();
  });
});
