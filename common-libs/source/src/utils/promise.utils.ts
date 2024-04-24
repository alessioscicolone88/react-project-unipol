export function allSettledFulfilledPromises(
  value: Promise<any>[]
): Promise<any[]> {
  return Promise.allSettled(value).then((results) =>
    results
      .map((res) => (res.status === "fulfilled" ? res.value : null))
      .filter((res) => !!res)
  );
}
