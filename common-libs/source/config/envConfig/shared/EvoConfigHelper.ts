import * as PACKAGE_JSON from "../../../package.json";

export function __isEvoEnvBy(Package = PACKAGE_JSON): boolean {
  return (
    `${process.env.NODE_ENV}` != "test" &&
    !!Package &&
    !!Package.name &&
    !!Package.name.match("-evo/")
  );
}
