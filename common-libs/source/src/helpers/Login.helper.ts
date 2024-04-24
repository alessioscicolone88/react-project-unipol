import { EnvironmentHelper } from "./environment.helper";
import { SessionHelper } from "./Session.helper";

export class LoginHelper extends null {
  // * Read-only * //
  private static _userLogged = false;
  public static get userLogged(): boolean {
    return LoginHelper._userLogged;
  }

  static {
    // Initialization:
    if (EnvironmentHelper.isClientSide()) {
      SessionHelper.getData("_isLogged")
        .then((val) => {
          this._userLogged = val;
        })
        .catch((e) => {
          console.error("Failed to initialize _userLogged. ", e);
        });
    }
    // Subscriptions:
    // Subscribe login
    SessionHelper.subscribeSetDataInSession((e) => {
      const detail = (e as any).detail as { key: string; value: any };
      if (detail.key === "_isLogged") {
        this._userLogged = detail.value;
      }
    });
    // Subscribe logout
    SessionHelper.subscribeDeleteDataInSession((e) => {
      const detail = (e as any).detail as { key: string; value: any };
      if (detail.key === "_isLogged") {
        this._userLogged = false;
      }
    });
    // Subscribe session storage cleared
    SessionHelper.subscribeDeleteAllDataInSession(() => {
      this._userLogged = false;
    });
  }
}
