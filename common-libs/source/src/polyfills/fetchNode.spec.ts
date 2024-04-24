import { fetchNodePolyfill } from "./fetchNode";

describe("fetch Node Polyfill", () => {
  it("Testing fetchNodePolyfill method with default", async () => {
    const importNodeFetch = () => Promise.resolve({ default: () => ({}) });
    await fetchNodePolyfill(importNodeFetch);

    expect(global.fetch).toBeDefined();
  });
});

describe("fetch Node Polyfill", () => {
  it("Testing fetchNodePolyfill method with default", async () => {
    const importNodeFetch = () => Promise.resolve(() => ({}));
    await fetchNodePolyfill(importNodeFetch);

    expect(global.fetch).toBeDefined();
  });
});
