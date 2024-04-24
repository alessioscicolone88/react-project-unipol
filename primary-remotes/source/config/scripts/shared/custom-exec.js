const { spawn } = require("child_process");

const args = process.argv.slice(2);
if(args.length !== 1){
    process.exit(1);
}
let command = args[0];
let params = "";

if(process.platform === "win32"){
    params = command;
    command = `cross-env`;
}

console.log(`command to run: ${command} ${params}`);
const ls = spawn(command, [params], {shell: true});

ls.stdout.on("data", data => {
    console.log(`${data}`);
});

ls.stderr.on("data", data => {
    console.log(`${data}`);
});

ls.on('error', (error) => {
    console.log(`${error.message}`);
});

ls.on("close", code => {
    console.log(`${code}`);
});
