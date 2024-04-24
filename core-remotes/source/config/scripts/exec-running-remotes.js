const { spawn, exec } = require("child_process");

const runningRemotes = require("./shared/running-remotes");

function execRunningRemotes(command, isNXCommand) {
  console.log(`Exec Command ${command}...`);

  exec(`npm run lerna-list`, (error, stdout, stderr) => {
    const allRemotes = stdout
      .split("\n")
      .filter((line) => !!line.match(/^@tpd-web/));

    console.log("All remotes:");
    console.log(allRemotes);

    let activeRemotesScope = "";

    if (runningRemotes.length > 0) {
      const activeRemotes = runningRemotes.filter((remote) => allRemotes.includes(remote));

      console.log(`Starting remotes:`);
      activeRemotes.forEach((remote) => {
        console.log(`-> ${remote}`);
      });

      if (isNXCommand === "true") {
        activeRemotesScope = `--projects=${activeRemotes.join(",")}`
      } else {
        activeRemotesScope = activeRemotes.length > 1
          ? `--scope '{${activeRemotes.join(",")}}'`
          : `--scope ${activeRemotes[0]}`;
      }
    } else {
      console.log(`Starting ALL remotes`);
    }

    const spawnCommand = activeRemotesScope
      ? spawn("npm", ["run", command, "--", activeRemotesScope], { shell: true })
      : spawn("npm", ["run", command], { shell: true });

    spawnCommand.stdout.on('data', function (data) {
      console.log(data.toString());
    });
    
    spawnCommand.stderr.on('data', function (data) {
      console.log(data.toString());
    });
    
    spawnCommand.on('exit', function (code) {
      console.log('TASK COMPLETED');
    });
  });
}

execRunningRemotes(process.argv[2], process.argv[3] || false);