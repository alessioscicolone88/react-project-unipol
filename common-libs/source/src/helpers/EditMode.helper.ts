import { EnvironmentHelper } from "./environment.helper";

export const EditModeHelper = {
  toggleEditingMode(): void {
    this.setAttrIsEditingToBody(!this.isEditingModeEnabled());
  },

  isEditingModeEnabled(): boolean {
    return this.getAttrIsEditingFromBody() === "true";
  },

  setAttrIsEditingToBody(value: boolean): void {
    if (EnvironmentHelper.isClientSide() && typeof document === "object") {
      window.document.body.setAttribute("isEditing", `${value}`);
    }
  },

  getAttrIsEditingFromBody(): string {
    if (EnvironmentHelper.isClientSide() && typeof document === "object") {
      return window.document.body.getAttribute("isEditing") || "false";
    } else {
      return "false";
    }
  },
};
