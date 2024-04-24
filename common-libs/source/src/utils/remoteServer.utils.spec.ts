import {
  MFE_TYPES,
  TMFE_GENERAL_SETTINGS,
  TMFE_SETTINGS,
} from "../mfe/settings/types";
import {
  TNodeJSDeps,
  TRemoteServerOptions,
  getFiles,
  renderingFileList,
  renderingIndexHtml,
  runRemoteServer,
} from "./remoteServer.utils";

describe("Remote Server Utils", () => {
  describe("runRemoteServer", () => {
    // Server starts listening on specified port
    it("should start listening on specified port when port is specified", () => {
      const options: TRemoteServerOptions = {
        port: "8080",
        deploy_env_name: "local",
        dirname: "dist",
      };

      const listenSpy = jest.fn();

      const express = () => ({
        use: jest.fn(),
        listen: listenSpy,
        static: jest.fn(),
        get: jest.fn(),
      });
      express.static = () => ({});

      const deps: TNodeJSDeps = {
        express,
        path: {
          join: () => "./dist",
        },
        cors: () => ({}),
        compression: () => ({}),
        fs: {},
      };

      runRemoteServer(MFE_TYPES.primary, options, deps);

      expect(listenSpy).toHaveBeenCalledWith("8080", expect.any(Function));
    });
  });

  describe("renderingIndexHtml", () => {
    // Renders a table with MFE names and their corresponding files for both client and server environments.
    it("should render a table with MFE names and their corresponding files for both client and server environments", () => {
      // Mock data
      const dir = "/path/to/directory";
      const deps = {
        fs: {
          readdirSync: jest.fn(),
          statSync: jest.fn(),
        },
      };

      // Mock MFE_GENERAL_SETTINGS
      const MFE_GENERAL_SETTINGS: TMFE_SETTINGS = {
        exampleMFE: {
          __mfeName__: "exampleMFE",
          type: MFE_TYPES.primary,
          devClientPort: 8001,
          devServerPort: 8001,
        },
      };

      // Call the function
      const result = renderingIndexHtml(
        MFE_TYPES.primary,
        MFE_GENERAL_SETTINGS,
        dir,
        deps
      );

      // Assertions
      expect(result).toContain("<table>");
      expect(result).toContain("<th>MFE_NAME</th>");
      expect(result).toContain("<th>FILES</th>");
      expect(result).toContain("exampleMFE");
      expect(result).toContain("<td>client</td>");
      expect(result).toContain("<td>server</td>");
      expect(result).toContain("ERRORE: FILE NON GENERATI");
    });
  });

  describe("renderingFileList", () => {
    // Returns a string of HTML code with links to files when given an object of files and valid input parameters.
    it("should return a string of HTML code with links to files when given an object of files and valid input parameters", () => {
      // Mock data
      const files = {
        client: {
          files: ["main.js", "remoteEntry.js"],
        },
        server: {
          files: ["main.js", "remoteEntry.js"],
        },
      };
      const basePath = "exampleFolder";
      const mfeName = "exampleMFE";
      const env = "client";

      // Call the function
      const result = renderingFileList(files, basePath, mfeName, env);

      // Assertions
      expect(result).toContain(
        '<a style="color: #f59e00" href="/exampleFolder/exampleMFE/client/main.js">main.js</a>'
      );
      expect(result).toContain(
        '<a style="color: #00ac00" href="/exampleFolder/exampleMFE/client/remoteEntry.js">remoteEntry.js</a>'
      );
    });
  });

  describe("getFiles", () => {
    // Successfully reads all files in a directory
    it("should read all files in a directory", () => {
      const fs = {
        readdirSync: jest.fn().mockReturnValue(["file1.txt", "file2.txt"]),
        statSync: jest.fn().mockReturnValue({ isDirectory: () => false }),
      };
      const result = getFiles("/path/to/directory", {}, { fs });
      expect(result).toEqual({ files: ["file1.txt", "file2.txt"] });
      expect(fs.readdirSync).toHaveBeenCalledWith("/path/to/directory");
      expect(fs.statSync).toHaveBeenCalledWith("/path/to/directory/file1.txt");
      expect(fs.statSync).toHaveBeenCalledWith("/path/to/directory/file2.txt");
    });
  });
});
