import { allSettledFulfilledPromises } from "./promise.utils";

describe("TpdWebLibs Promise Utils", () => {
  it("Testing Promise Utils library methods", async () => {
    const array = ["firstPromise", "secondPromise"];
    const allPromisesRes = array.map((el) =>
      el === "firstPromise" ? Promise.resolve(el) : Promise.reject(el)
    );
    const res = await allSettledFulfilledPromises(allPromisesRes);
    expect(res).toHaveLength(1);
    expect(res[0]).toBe("firstPromise");
  });
});
