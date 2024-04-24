const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const pathDir = path.resolve(__dirname, "../../dist");

if (process.platform === "win32") {
  if (fs.existsSync(pathDir)) {
    runScript("rmdir", ["/q", "/s", pathDir]);
    console.log("la cartella dist è stata cancellata");
  } else {
    console.log("la cartella dist non esite");
  }
} else {
  runScript("rm", ["-rf", pathDir]);
  console.log("cartella dist cancellata");
}

function runScript(command, params) {
  const result = spawnSync(command, params, { shell: true });
  console.log(result.stdout.toString());
  console.error(result.stderr.toString());
}
