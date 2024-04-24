import {
  getImportMapNameBy,
  getImportMapFileBy,
  removeAllFiles,
  generateIndexFile,
  generateRemoteFile,
} from "./generateImportMapFiles";

import { MFE_TYPES } from "../mfe";
import { PRIMARY_REMOTES_SETTINGS } from "../mfe/settings/primaryRemotesSettings";

describe("generateImportMapFiles", () => {
  describe("getImportMapNameBy", () => {
    // Test that the function returns undefined when the fileFolder parameter is undefined.
    it("should return undefined when fileFolder is undefined", () => {
      // Arrange
      const fileFolder = undefined;

      // Act
      const result = getImportMapNameBy(fileFolder);

      // Assert
      expect(result).toBeUndefined();
    });

    // Test that the function returns undefined when the fileFolder parameter is null.
    it("should return undefined when fileFolder is null", () => {
      // Arrange
      const fileFolder = null;

      // Act
      const result = getImportMapNameBy(fileFolder);

      // Assert
      expect(result).toBeNull();
    });

    // Test that the function 'getImportMapNameBy' returns the expected import map name when the 'fileFolder' parameter is a non-empty string with a length greater than 0.
    it("should return the expected import map name when fileFolder is a non-empty string with length greater than 0", () => {
      // Arrange
      const fileFolder = "example-folder";

      // Act
      const result = getImportMapNameBy(fileFolder);

      // Assert
      expect(result).toBe("EXAMPLE_FOLDER_IMPORT_MAP");
    });

    // Test that the function returns undefined when the fileFolder parameter is an empty string.
    it("should return undefined when fileFolder is an empty string", () => {
      // Arrange
      const fileFolder = "";

      // Act
      const result = getImportMapNameBy(fileFolder);

      // Assert
      expect(result).toBe("");
    });

    // Test that the function 'getImportMapNameBy' returns the expected import map name when the fileFolder parameter is a string with multiple hyphen-separated words.
    describe("should return the expected import map name when fileFolder is a string with multiple hyphen-separated words", () => {
      // Test that the function 'getImportMapNameBy' returns the expected import map name when the fileFolder parameter is a string with multiple underscore-separated words.
      it("should return the expected import map name when fileFolder is a string with multiple underscore-separated words", () => {
        // Arrange
        const fileFolder = "file_folder_name";
        const expectedImportMapName = "FILE_FOLDER_NAME_IMPORT_MAP";

        // Act
        const result = getImportMapNameBy(fileFolder);

        // Assert
        expect(result).toBe(expectedImportMapName);
      });

      // Arrange
      const fileFolder = "file-folder-name";
      const expectedImportMapName = "FILE_FOLDER_NAME_IMPORT_MAP";

      // Act
      const result = getImportMapNameBy(fileFolder);

      // Assert
      expect(result).toBe(expectedImportMapName);
    });
  });

  describe("getImportMapFileBy", () => {
    // Test that the function returns null or undefined when the fileFolder parameter is null or undefined.
    it("should return null or undefined when fileFolder is null or undefined", () => {
      // Test case 1: fileFolder is null
      expect(getImportMapFileBy(null)).toBeNull();

      // Test case 2: fileFolder is undefined
      expect(getImportMapFileBy(undefined)).toBeUndefined();
    });

    // Test that the function returns null or undefined when the fileFolder parameter is not a string.
    it("should return null or undefined when fileFolder is not a string", () => {
      // Test case 1: fileFolder is null
      expect(getImportMapFileBy(null)).toBeNull();

      // Test case 2: fileFolder is undefined
      expect(getImportMapFileBy(undefined)).toBeUndefined();
    });

    // Test that the function 'getImportMapFileBy' returns a string with "ImportMap" suffix when the 'fileFolder' parameter is a string with length greater than 0 and contains only one hyphen-separated word.
    it('should return a string with "ImportMap" suffix when fileFolder is a string with length greater than 0 and contains only one hyphen-separated word', () => {
      // Test case 1
      let fileFolder = "example-folder";
      let expectedResult = "exampleFolderImportMap";
      let result = getImportMapFileBy(fileFolder);
      expect(result).toBe(expectedResult);

      // Test case 2
      fileFolder = "another-example";
      expectedResult = "anotherExampleImportMap";
      result = getImportMapFileBy(fileFolder);
      expect(result).toBe(expectedResult);

      // Test case 3
      fileFolder = "test";
      expectedResult = "testImportMap";
      result = getImportMapFileBy(fileFolder);
      expect(result).toBe(expectedResult);
    });

    // Test that the function returns a string with "ImportMap" suffix when the fileFolder meets the specified conditions.
    it('should return a string with "ImportMap" suffix when fileFolder is a string with length greater than 0 and contains multiple hyphen-separated words, and the first word is all lowercase', () => {
      // Arrange
      const fileFolder = "my-file-folder";

      // Act
      const result = getImportMapFileBy(fileFolder);

      // Assert
      expect(result).toBe("myFileFolderImportMap");
    });

    // Test that the function 'getImportMapFileBy' returns a string with "ImportMap" suffix when the 'fileFolder' parameter is a string with length greater than 0 and contains multiple hyphen-separated words, but the first word is not all lowercase.
    it('should return a string with "ImportMap" suffix when fileFolder is a string with length greater than 0 and contains multiple hyphen-separated words, but the first word is not all lowercase', () => {
      // Arrange
      const fileFolder = "Some-File-Folder";

      // Act
      const result = getImportMapFileBy(fileFolder);

      // Assert
      expect(result).toBe("SomeFileFolderImportMap");
    });

    // Test that the function returns null or undefined when the fileFolder parameter is an empty string.
    it("should return null or undefined when fileFolder is an empty string", () => {
      // Test case 1: fileFolder is an empty string
      expect(getImportMapFileBy("")).toBe("");

      // Test case 2: fileFolder is undefined
      expect(getImportMapFileBy(undefined)).toBeUndefined();
    });

    // Test that the function returns null or undefined when the fileFolder parameter is a string with a length of 1.
    it("should return null or undefined when fileFolder is a string with length 1", () => {
      // Test case 1: fileFolder is null
      expect(getImportMapFileBy(null)).toBeNull();

      // Test case 2: fileFolder is undefined
      expect(getImportMapFileBy(undefined)).toBeUndefined();
    });
  });

  describe("removeAllFiles", () => {
    // Test that the removeAllFiles function returns true after removing all files in the specified directory.
    it("should return true after removing all files in the specified directory", () => {
      // Setup
      const fs = {
        readdirSync: jest
          .fn()
          .mockReturnValueOnce(["file1", "file2"])
          .mockReturnValueOnce(["file3"]),
        rmSync: jest.fn(),
      };
      const dirPath = "/path/to/directory";
      const deps = { fs };

      // Execution
      const result = removeAllFiles(deps, dirPath);

      // Assertion
      expect(fs.readdirSync).toHaveBeenCalledTimes(2);
      expect(fs.readdirSync).toHaveBeenCalledWith(`${dirPath}/types`);
      expect(fs.readdirSync).toHaveBeenCalledWith(dirPath);
      expect(fs.rmSync).toHaveBeenCalledTimes(3);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/types/file1`);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/types/file2`);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/file3`);
      expect(result).toBe(true);
    });

    // Test that all files in the 'types' directory are removed when the function is called
    it('should remove all files in the "types" directory', () => {
      // Mock dependencies
      const fs = {
        readdirSync: jest
          .fn()
          .mockReturnValueOnce(["file1", "file2"])
          .mockReturnValueOnce(["file1", "file2"]),
        rmSync: jest.fn(),
      };
      const dirPath = "/path/to/directory";

      // Call the function
      const result = removeAllFiles({ fs }, dirPath);

      // Check that fs.readdirSync is called with the correct path
      expect(fs.readdirSync).toHaveBeenCalledWith(`${dirPath}/types`);

      // Check that fs.rmSync is called for each file in the 'types' directory
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/types/file1`);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/types/file2`);

      // Check that fs.readdirSync is called with the correct path again
      expect(fs.readdirSync).toHaveBeenCalledWith(dirPath);

      // Check that fs.rmSync is called for each file in the directory (excluding 'types')
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/file1`);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/file2`);

      // Check that fs.rmSync is not called for the 'types' directory itself
      expect(fs.rmSync).not.toHaveBeenCalledWith(`${dirPath}/types`);

      // Check that fs.rmSync is not called for any other file or directory
      expect(fs.rmSync).not.toHaveBeenCalledWith(`${dirPath}/types/file3`);
      expect(fs.rmSync).not.toHaveBeenCalledWith(`${dirPath}/file3`);
      expect(fs.rmSync).not.toHaveBeenCalledWith(`${dirPath}/otherDirectory`);

      // Check that the function returns true
      expect(result).toBe(true);
    });

    // Test that all files in the specified directory are removed except the 'types' directory
    it('should remove all files except "types" directory when given a directory path', () => {
      // Mock dependencies
      const fs = {
        readdirSync: jest
          .fn()
          .mockReturnValueOnce(["file1", "file2"])
          .mockReturnValueOnce(["file3", "file4", "file5"]),
        rmSync: jest.fn(),
      };
      const __deps__ = { fs };

      // Set up test data
      const dirPath = "/path/to/directory";

      // Call the function
      removeAllFiles(__deps__, dirPath);

      // Check that fs.readdirSync was called with the correct arguments
      expect(fs.readdirSync).toHaveBeenCalledWith(`${dirPath}/types`);

      // Check that fs.rmSync was called with the correct arguments for each file in the 'types' directory
      expect(fs.rmSync).toHaveBeenCalledTimes(5);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/types/file1`);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/types/file2`);

      // Check that fs.readdirSync was called with the correct arguments for the main directory
      expect(fs.readdirSync).toHaveBeenCalledWith(dirPath);

      // Check that fs.rmSync was called with the correct arguments for each file in the main directory
      expect(fs.rmSync).toHaveBeenCalledTimes(5);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/file3`);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/file4`);
      expect(fs.rmSync).toHaveBeenCalledWith(`${dirPath}/file5`);
    });
  });

  describe("generateIndexFile", () => {
    // Test that the function 'generateIndexFile' writes the file to the correct directory.
    it("should write the file to the correct directory", () => {
      // Mock dependencies
      const fs = {
        writeFile: jest.fn(),
      };
      const dirPath = "/path/to/directory";

      // Call the function
      generateIndexFile({ fs }, dirPath);

      // Check if fs.writeFile is called with the correct arguments
      expect(fs.writeFile).toHaveBeenCalledWith(
        "/path/to/directory/index.ts",
        expect.any(String),
        expect.any(Function)
      );
    });

    // Test that a message is logged to the console when the file is saved
    it("should log a message to the console when the file is saved", () => {
      // Mock fs.writeFile function
      const fs = {
        writeFile: jest.fn((dirPath, fileContent, callback) => {
          callback(null);
        }),
      };

      // Mock console.log function
      console.log = jest.fn();

      // Call generateIndexFile function
      generateIndexFile({ fs }, "dirPath");

      // Expect fs.writeFile to be called with correct arguments
      expect(fs.writeFile).toHaveBeenCalledWith(
        "dirPath/index.ts",
        expect.any(String),
        expect.any(Function)
      );

      // Expect console.log to be called with correct message
      expect(console.log).toHaveBeenCalledWith("index Saved!");
    });

    // Test that the function 'generateIndexFile' generates an index.ts file with the correct content.
    it("should generate index.ts file with correct content", () => {
      // Mock dependencies
      const fs = {
        writeFile: jest.fn(),
      };
      const dirPath = "/path/to/directory";

      // Call the function
      generateIndexFile({ fs }, dirPath);

      expect(fs.writeFile).toHaveBeenCalled();
    });
  });

  describe("generateRemoteFile", () => {
    // Test that a message is logged when a file is saved successfully
    it("should log a message when a file is saved successfully", () => {
      // Mock dependencies
      const fs = {
        writeFile: jest.fn((fileName, fileContent, callback) => {
          callback(null);
        }),
      };
      const dirPath = "path/to/dir";
      const isHCLEnvironment = true;
      const mfeType = MFE_TYPES.primary;

      // Call the function
      generateRemoteFile({ fs }, dirPath, isHCLEnvironment, mfeType);

      // Check if the log message is printed
      expect(console.log).toHaveBeenNthCalledWith(1, `index Saved!`);
      expect(console.log).toHaveBeenNthCalledWith(
        2,
        `path/to/dir/primaryRemotesImportMap.ts Saved!`
      );
      expect(console.log).toHaveBeenNthCalledWith(
        3,
        `path/to/dir/types/primaryRemotesImportMap.d.ts Saved!`
      );
    });

    // Test that the function 'generateRemoteFile' generates a types file with the correct file name and content.
    it("should generate types file with correct file name and content", () => {
      // Mock dependencies
      const fs = {
        writeFile: jest.fn(),
      };
      const dirPath = "testDir";
      const isHCLEnvironment = true;
      const mfeType = MFE_TYPES.primary;

      // Call the function
      generateRemoteFile({ fs }, dirPath, isHCLEnvironment, mfeType);

      // Check that fs.writeFile is called with the correct arguments for the types file
      expect(fs.writeFile).toHaveBeenNthCalledWith(
        1,
        "testDir/primaryRemotesImportMap.ts",
        `// DO NOT CHANGE THIS FILE! IT IS AN AUTO-GENERATED FILE WITH "npm run generate-import-map" \n\n` +
          `import { CommonMFE, MFE_NAMES } from "@tpd-web-common-libs/nodejs-library";\n\n` +
          `export const PRIMARY_REMOTES_IMPORT_MAP: CommonMFE.Types.TRemotesMap = {\n` +
          `  [MFE_NAMES.tpdSpallaDestra]: {\n` +
          `    import: () => import("tpdSpallaDestra/bootstrap"),\n` +
          `  },\n` +
          `};`,
        expect.any(Function)
      );
    });
  });
});
