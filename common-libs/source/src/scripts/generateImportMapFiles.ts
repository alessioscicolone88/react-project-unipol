import { MFE_GENERAL_SETTINGS, MFE_TYPES } from "../mfe";

export function getImportMapNameBy(fileFolder: string | null | undefined) {
  return (
    fileFolder &&
    fileFolder.length > 0 &&
    fileFolder
      .split("-")
      .map((e) => e.toUpperCase())
      .join("_") + "_IMPORT_MAP"
  );
}

export function getImportMapFileBy(fileFolder: string | null | undefined) {
  return (
    fileFolder &&
    fileFolder.length > 0 &&
    fileFolder.replace(/-([a-zA-Z])/g, function (k) {
      return k[1].toUpperCase();
    }) + "ImportMap"
  );
}

export function removeAllFiles({ fs }: any, dirPath: string) {
  fs.readdirSync(`${dirPath}/types`).forEach((file: string) =>
    fs.rmSync(`${dirPath}/types/${file}`)
  );
  fs.readdirSync(dirPath).forEach((file: string) => {
    if (file != "types") {
      fs.rmSync(`${dirPath}/${file}`);
    }
  });

  return true;
}

export function generateIndexFile({ fs }: any, dirPath: string) {
  const fileFolders = Object.values(MFE_GENERAL_SETTINGS).map(
    (settings) => settings.fileFolder
  );

  const fileContent =
    `// DO NOT CHANGE THIS FILE! IT IS AN AUTO-GENERATED FILE WITH "npm run generate-import-map" \n\n` +
    `import { CommonMFE } from "@tpd-web-common-libs/nodejs-library";\n` +
    fileFolders
      .map((fileFolder) => {
        return `import { ${getImportMapNameBy(
          fileFolder
        )} } from "./${getImportMapFileBy(fileFolder)}";\n`;
      })
      .join("") +
    "\n" +
    `const IMPORT_REMOTES_MAP: CommonMFE.Types.TRemotesMap = {\n` +
    fileFolders
      .map((fileFolder) => {
        return `  ...${getImportMapNameBy(fileFolder)},\n`;
      })
      .join("") +
    `};\n\n` +
    `export default IMPORT_REMOTES_MAP;`;

  fs.writeFile(dirPath + "/index.ts", fileContent, function (err: any) {
    if (err) throw err;
    console.log("index Saved!");
  });
}

export function generateRemoteFile(
  { fs }: any,
  dirPath: string,
  isHCLEnvironment: boolean,
  mfeType: string
) {
  const fileFolder = MFE_GENERAL_SETTINGS[mfeType].fileFolder;
  const mfeSettings = MFE_GENERAL_SETTINGS[mfeType].mfeSettings;

  const fileName = `${dirPath}/${getImportMapFileBy(fileFolder)}.ts`;

  const mfeSettingsValues = Object.values(mfeSettings).filter((mfeSetting) => {
    return !isHCLEnvironment || !mfeSetting.skipImportingInCMS;
  });

  const fileContent =
    `// DO NOT CHANGE THIS FILE! IT IS AN AUTO-GENERATED FILE WITH "npm run generate-import-map" \n\n` +
    `import { CommonMFE, MFE_NAMES } from "@tpd-web-common-libs/nodejs-library";\n\n` +
    `export const ${getImportMapNameBy(
      fileFolder
    )}: CommonMFE.Types.TRemotesMap = {\n` +
    mfeSettingsValues
      .map((mfeSetting) => {
        return (
          `  [MFE_NAMES.${mfeSetting.__mfeName__}]: {\n` +
          `    import: () => import("${mfeSetting.__mfeName__}/bootstrap"),\n` +
          `  },\n`
        );
      })
      .join("") +
    `};`;

  fs.writeFile(fileName, fileContent, function (err: any) {
    if (err) throw err;
    console.log(`${fileName} Saved!`);
  });

  const fileTypeName = `${dirPath}/types/${getImportMapFileBy(
    fileFolder
  )}.d.ts`;

  const fileTypeContent =
    `// DO NOT CHANGE THIS FILE! IT IS AN AUTO-GENERATED FILE WITH "npm run generate-import-map" \n\n` +
    mfeSettingsValues
      .map((mfeSetting) => {
        return `declare module "${mfeSetting.__mfeName__}/bootstrap";\n`;
      })
      .join("");

  fs.writeFile(fileTypeName, fileTypeContent, function (err: any) {
    if (err) throw err;
    console.log(`${fileTypeName} Saved!`);
  });

  return true;
}

export function generateImportMapFiles(
  dirPath: string,
  isHCLEnvironment: boolean,
  __deps__: any
) {
  removeAllFiles(__deps__, dirPath);
  generateIndexFile(__deps__, dirPath);
  Object.values(MFE_TYPES).forEach((mfeType) => {
    generateRemoteFile(__deps__, dirPath, isHCLEnvironment, mfeType);
  });
}
