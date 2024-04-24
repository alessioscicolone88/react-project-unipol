import { isClientSide, isServerSide } from "./browser.utils";

describe("TpdWebLibs Browser Utils", () => {
  it("Testing Browser Utils library methods", () => {
    expect(isClientSide()).toEqual(true);
    expect(isServerSide()).toEqual(false);
  });
});
