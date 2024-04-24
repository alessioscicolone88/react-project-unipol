const fs = require("fs");
const path = require("path");

function findAndDelete(pathParent) {
  fs.readdir(pathParent, { withFileTypes: true }, (error, files) => {
    if (files) {
      const directoriesInDIrectory = files
        .filter((item) => {
          if (item.isDirectory() && item.name === "node_modules") {
            return true;
          } else if (
            item.isDirectory() &&
            (item.name === "packages" || pathParent.includes("packages"))
          ) {
            findAndDelete(path.join(pathParent, item.name));
          }
        })
        .map((item) => path.join(pathParent, item.name));

      if (directoriesInDIrectory.length > 0) {
        directoriesInDIrectory.forEach((item) => {
          console.log(`Cancellato: ${item}`);
          fs.rmSync(item, { recursive: true, force: true });
        });
      }
    }
  });
}

function findAndDeleteFile(pathParent) {
  fs.readdir(pathParent, { withFileTypes: true }, (error, files) => {
    if (files) {
      const directoriesInDIrectory = files
        .filter((item) => {
          if (item.isFile() && item.name === "package-lock.json") {
            return true;
          } else if (
            item.isDirectory() &&
            (item.name === "packages" || pathParent.includes("packages"))
          ) {
            findAndDeleteFile(path.join(pathParent, item.name));
          }
        })
        .map((item) => path.join(pathParent, item.name));

      if (directoriesInDIrectory.length > 0) {
        directoriesInDIrectory.forEach((item) => {
          console.log(`Cancellato: ${item}`);
          fs.rmSync(item, { recursive: true, force: true });
        });
      }
    }
  });
}

findAndDelete(__dirname);
findAndDeleteFile(__dirname);
