import { EnvironmentHelper } from "./environment.helper";

async function stopExecutionAfter(
  mainExecution: () => Promise<any>,
  duration: number,
  errorMessage: string
) {
  return Promise.race([
    mainExecution(),
    new Promise(function (resolve) {
      setTimeout(resolve, duration);
    }).then(function () {
      throw new Error(errorMessage);
    }),
  ]);
}

function execClientSide(mainExecution: () => any) {
  return EnvironmentHelper.isClientSide() && mainExecution && mainExecution();
}

export const ExecutionHelper = {
  stopExecutionAfter,
  execClientSide,
};
