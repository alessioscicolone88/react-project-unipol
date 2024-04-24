import { ConsoleHelper } from "./Console.helper";

type TRequestFetch = {
  condition: (url: any) => boolean;
  json: (url: string, options: any) => any;
};

export const FetchHelper = {
  mock: (requests: TRequestFetch[]) => {
    (global as any).fetch = (url: string, options: any) => {
      const currentRequest: any = requests.find((request: TRequestFetch) =>
        request.condition(url)
      );
      return Promise.resolve({
        headers: null,
        redirected: false,
        status: 200,
        statusText: "ok",
        type: null,
        ok: true,
        url: null,
        clone: null,
        body: null,
        bodyUsed: null,
        arrayBuffer: null,
        blob: null,
        formData: null,
        text: null,
        json: () => {
          const response =
            !!currentRequest && typeof currentRequest.json === "function"
              ? currentRequest.json(url, options)
              : {};
          ConsoleHelper.log("Request Mocked: ", url, response);
          return response;
        },
      });
    };
  },
};
