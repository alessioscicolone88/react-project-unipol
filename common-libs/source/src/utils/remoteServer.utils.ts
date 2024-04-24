import { MFE_GENERAL_SETTINGS } from "../mfe";
import { TMFE_SETTINGS } from "../mfe/settings/types";

export type TRemoteServerOptions = {
  port: string;
  deploy_env_name: string;
  dirname: string;
};

export type TNodeJSDeps = {
  express: any;
  path: any;
  cors: any;
  compression: any;
  fs: any;
};

export function getFiles(dir: string, files: any, deps: any) {
  const { fs } = deps;
  files = files || {};
  try {
    const filesInDir = fs.readdirSync(dir);
    for (const i in filesInDir) {
      const fileName = filesInDir[i];
      const fileDir = dir + "/" + fileName;
      if (fs.statSync(fileDir).isDirectory()) {
        files[fileName] = getFiles(fileDir, {}, deps);
      } else {
        files["files"] = (files["files"] &&
          files["files"].concat(fileName)) || [fileName];
      }
    }
  } catch (error) {
    // nothing to do
  }

  return files;
}

export function renderingFileList(
  files: any,
  basePath: string,
  mfeName: string,
  env: string
) {
  const allFiles = (files && files[env] && files[env]["files"]) || [];
  return allFiles.length > 0
    ? allFiles
        .map((fileName: string) => {
          let colorLink = "black";
          switch (fileName) {
            case "main.js":
              colorLink = "#f59e00";
              break;
            case "remoteEntry.js":
              colorLink = env === "server" ? "blue" : "#00ac00";
              break;

            default:
              colorLink = "black";
              break;
          }
          return `<a style="color: ${colorLink}" href="/${basePath}/${mfeName}/${env}/${fileName}">${fileName}</a>`;
        })
        .join("<br/>")
    : `<h3 style="color:red;">ERRORE: FILE NON GENERATI</h3>`;
}
export function renderingIndexHtml(
  basePath: string,
  mfeSettings: TMFE_SETTINGS,
  dir: string,
  deps: any
) {
  const { fs } = deps;

  const filesMap = {
    ...Object.keys(mfeSettings).reduce((acc, __mfeName__) => {
      return {
        ...acc,
        [__mfeName__]: {
          client: {
            files: [],
          },
          server: {
            files: [],
          },
        },
      };
    }, {}),
    ...getFiles(dir, {}, { fs }),
  };

  const filesHtml = Object.entries(filesMap)
    .map(([mfeName, envFiles]) => {
      return `
        <tr>
          <td style="border: 1px solid black; padding:10px;">${mfeName}</td>
          <td style="border: 1px solid black; padding:10px;">
            <table>
              <tr>
                <td>client</td>
                <td style="border: 1px solid black; padding:10px;">${renderingFileList(
                  envFiles,
                  basePath,
                  mfeName,
                  "client"
                )}</td>
              </tr>      
              <tr>
                <td>server</td>
                <td style="border: 1px solid black; padding:10px;">${renderingFileList(
                  envFiles,
                  basePath,
                  mfeName,
                  "server"
                )}</td>
              </tr>      
            </table> 
          </td>
        </tr> 
      `;
    })
    .join("");

  return `
    <div>
      <h1>ALL AVAILABLE ${basePath}</h1>
      <table>
        <tr>
          <th>MFE_NAME</th>
          <th>FILES</th>
        </tr>
        ${filesHtml}
      </table> 
    </div>
  `;
}

export function runRemoteServer(
  remotesType: string,
  options: TRemoteServerOptions,
  deps: TNodeJSDeps,
  enableHeadersLog: Boolean = false
) {
  const { port: originalPort, deploy_env_name, dirname } = options;

  const { express, path, cors, compression, fs } = deps;

  const { localProdPort, basePath, mfeSettings } =
    MFE_GENERAL_SETTINGS[remotesType];

  const port =
    originalPort || (deploy_env_name === "local" && localProdPort) || "8080";

  const app = express();

  app.use(compression());

  app.use(
    cors({
      origin: [
        "http://localhost:3000", //local
        "https://dev.unipolsai.it", //development - new arch
        "https://sit.unipolsai.it", //integration - new arch
        "https://qa.unipolsai.it", //quality - new arch
        "https://fix.unipolsai.it", //hotfix - new arch
        "https://unipolsai.it", //production - new arch
        "https://www.unipolsai.it", //production - new arch
        "https://authoring-inte.unipolsai.it", //sit - HCL
        "https://authoring-svil.unipolsai.it", //dev - HCL
        "https://authoring-coll.unipolsai.it", //quality - HCL
        "https://authoring.unipolsai.it", //production - HCL
        "https://svil.unipolsai.it", //dev - old arch
        "https://inte.unipolsai.it", //sit - old arch
        "https://coll.unipolsai.it", //quality - old arch
        "https://evo-dev.unipolsai.it", //development - new arch
        "https://evo-sit.unipolsai.it", //integration - new arch
      ],
    })
  );
  app.use(function (req: any, _: any, next: any) {
    console.log("Resource Requested: ", req.url);
    enableHeadersLog && console.log("Request headers: ", JSON.stringify(req.headers));
    enableHeadersLog && console.log("Response headers: ", _.getHeaders());
    next();
  });
  app.use(`/${basePath}`, express.static(path.join(dirname, "../dist")));
  app.get(`/${basePath}/index.html`, (_: any, res: any) => {
    const dir = path.join(dirname, "../dist");
    const html = renderingIndexHtml(basePath, mfeSettings, dir, { fs });
    res.send(html);
  });

  app.listen(port, () => {
    console.log(
      `Node Express Server for ${basePath} is listening on PORT: ${port}`
    );
  });
}
