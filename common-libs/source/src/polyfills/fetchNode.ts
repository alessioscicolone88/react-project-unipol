export const fetchNodePolyfill = async (
  importNodeFetch: () => Promise<any>
) => {
  if (!global.fetch) {
    const nodeFetch = await importNodeFetch();
    const realFetch = nodeFetch.default || nodeFetch;

    const fetch = (...attrs: any) => {
      return realFetch
        .bind({})(...attrs)
        .catch((err: any) => {
          console.error("[ERROR] fetchNodePolyfill:", ...attrs);
          throw err;
        });
    };

    fetch.polyfill = true;
    global.fetch = fetch;
    global.Response = realFetch.Response;
    global.Headers = realFetch.Headers;
    global.Request = realFetch.Request;
  }
};
