const { spawnSync } = require("child_process");
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// MAC--> cd ./node_modules/@tpd-web-common-libs/ && rm -rf ./nodejs-library && ln -s ../../../../TPD-WEB/common-libs/source ./nodejs-library && cd ../../
// WINDOWS --> cd .\\node_modules\\@tpd-web-common-libs\\ && rmdir /s .\\nodejs-library && mklink /D .\\nodejs-library ..\\..\\..\\..\\common-libs\\source && cd ..\\..\\

const rootPath = path.resolve(__dirname, "..", "..");
const pathCommonLibs = path.join(rootPath, "node_modules", "@tpd-web-common-libs");
const pathNodeJsLibrary = path.join(pathCommonLibs, "nodejs-library");

let pathRelativeCommonLibsSource = path.resolve(rootPath, "..", "..", "common-libs", "source");

if (process.env.PATH_TPD_WEB_COMMON_LIBS) {
    pathRelativeCommonLibsSource = process.env.PATH_TPD_WEB_COMMON_LIBS;
    console.log(`uso la variabile d'ambiente PATH_TPD_WEB_COMMON_LIBS: ${pathRelativeCommonLibsSource}`);
}

if (process.platform === "win32") {
    if (fs.existsSync(pathNodeJsLibrary)) {
        runScript("rmdir", ["/q", "/s", pathNodeJsLibrary]);
    }
    runScript("mklink", ["/D", pathNodeJsLibrary, pathRelativeCommonLibsSource])
} else {
    runScript(`cd ${pathCommonLibs} && rm -rf ./nodejs-library && ln -s ${pathRelativeCommonLibsSource} ./nodejs-library && cd ../../`, []);
}

function runScript(command, params) {
    const result = spawnSync(command, params, { shell: true });
    console.log(result.stdout.toString());
    console.error(result.stderr.toString());
}
