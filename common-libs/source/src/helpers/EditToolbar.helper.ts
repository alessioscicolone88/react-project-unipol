import { EditModeHelper } from "./EditMode.helper";
import { EnvironmentHelper } from "./environment.helper";

export const EditToolbarHelper = {
  EditToolbarMarginTop: 50,

  toggleSpace(isShown: boolean): void {
    if (EnvironmentHelper.isClientSide() && typeof document === "object") {
      const bodyLayout = window.document.body;
      if (isShown) {
        bodyLayout.style.marginTop = `${this.EditToolbarMarginTop}px`;
        window.scrollBy(0, -this.EditToolbarMarginTop);
        EditModeHelper.setAttrIsEditingToBody(true);
      } else {
        bodyLayout.style.marginTop = "0";
        window.scrollBy(0, this.EditToolbarMarginTop);
        EditModeHelper.setAttrIsEditingToBody(false);
      }
    }
  },

  isAlreadyOpened() {
    return EditModeHelper.isEditingModeEnabled();
  },
};
