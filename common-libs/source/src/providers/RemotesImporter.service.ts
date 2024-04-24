import { Singleton } from "../class";
import { ConsoleHelper, EnvironmentHelper, ExecutionHelper } from "../helpers";
import { TExecImportRemoteEntry } from "../mfe/common-mfe/types";

type TExecElement = {
  __mfeName__: string;
  isClientSideImport: boolean;
  priority: number;
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
};
type TExecQueue = TExecElement[];

export class RemotesImporterService extends Singleton {
  static className = "RemotesImporterService";

  protected MfeAlreadyImportedBasePriority = 1000; //Priorità di base per i mfe già importati
  private _enableSortWithPriority = true; //Flag di accensione/spegnimento della logica di sort

  public execQueue: TExecQueue = []; //Lista di esecuzione con priorità
  public currentExecTask: null | Promise<any>;

  constructor() {
    super();
    this.currentExecTask = null;
  }

  get isExecuting() {
    return this.currentExecTask != null;
  }

  addInExecQueue(execObj: TExecElement): null {
    ConsoleHelper.info(
      `[RemotesImporterService] Added in Exec Queue`,
      JSON.stringify(execObj)
    );
    this.execQueue.push(execObj);
    if (this._enableSortWithPriority)
      this.execQueue.sort((a, b) => a.priority - b.priority);

    ConsoleHelper.info(
      "CurrentExecQueueStatus [",
      ...this.execQueue.map(
        (execObj) => `${execObj.__mfeName__} priority: ${execObj.priority}`
      ),
      "]"
    );

    if (!this.isExecuting) {
      this.execNextTask();
    }
    return null;
  }

  execNextTask() {
    if (this.execQueue.length > 0) {
      this.startExecution();
    } else {
      this.stopExecution();
    }
  }

  async startExecution() {
    ConsoleHelper.info(
      "[RemotesImporterService] [startExecution] Start Execution of import remotes"
    );
    this.currentExecTask = this.execAll();
  }

  stopExecution() {
    ConsoleHelper.info(
      "[RemotesImporterService] [stopExecution] Stop execution of import remotes"
    );
    this.currentExecTask = null;
  }

  async execAll(): Promise<null> {
    await this.exec();
    this.execNextTask();
    return null;
  }

  async exec(): Promise<null> {
    if (this.execQueue.length > 0) {
      const { __mfeName__, isClientSideImport, resolve, reject, priority } =
        this.execQueue.pop() as TExecElement;

      ConsoleHelper.info(
        `[RemotesImporterService] Executing with priority ${priority}`,
        __mfeName__,
        isClientSideImport
      );
      ConsoleHelper.info(
        "ExecQueueStatus after pop [",
        ...this.execQueue.map(
          (execObj) => `${execObj.__mfeName__} priority: ${execObj.priority}`
        ),
        "]"
      );

      try {
        if (!this.isAlreadyImported(__mfeName__, isClientSideImport)) {
          if (isClientSideImport) {
            // don't block the queue -> the import of remotes is in parallel for client side
            resolve(this.execImportRemoteBy(__mfeName__, isClientSideImport));
          } else {
            // block the queue and wait for the import -> the import of remotes is in serialized for server side
            const remote = await this.execImportRemoteBy(
              __mfeName__,
              isClientSideImport
            );
            resolve(remote);
          }
        } else {
          const remote = this.getRemote(__mfeName__, isClientSideImport);
          resolve(remote);
        }
      } catch (error) {
        reject(
          `[RemotesImporterService] ERROR: IMPORT ${__mfeName__} REMOTE \n ${error}`
        );
      }
    }

    return null;
  }
  async execImportRemoteBy(__mfeName__: string, isClientSideImport: boolean) {
    let execImport = this.getExecImport(__mfeName__);
    if (!execImport) {
      execImport = ExecutionHelper.stopExecutionAfter(
        () => this.importRemoteBy(__mfeName__),
        EnvironmentHelper.isRunningTest() ? 100 : 120000,
        `[RemotesImporterService] [startExecution] Timeout Error: Execution of ${__mfeName__} has took too long!`
      ).then((remote) => {
        this.setRemote(remote, isClientSideImport);
        return remote;
      });

      this.setExecImport(__mfeName__, execImport);
    }

    return execImport;
  }
  getRemote(__mfeName__: string, isClientSideImport: boolean): any {
    throw new Error("Method getRemote not implemented.");
  }
  setRemote(remote: any, isClientSideImport: boolean): void {
    throw new Error("Method setRemote not implemented.");
  }
  getExecImport(__mfeName__: string): TExecImportRemoteEntry | undefined {
    throw new Error("Method getExecImport not implemented.");
  }
  setExecImport(__mfeName__: string, execPromise: TExecImportRemoteEntry) {
    throw new Error("Method setExecImport not implemented.");
  }
  isAlreadyImported(__mfeName__: string, isClientSideImport: boolean): boolean {
    throw new Error("Method isAlreadyImported not implemented.");
  }
  importRemoteBy(__mfeName__: string): any {
    throw new Error("Method importRemoteBy not implemented.");
  }
}
