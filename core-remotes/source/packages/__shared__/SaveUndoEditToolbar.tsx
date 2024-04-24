import React from "react";
import { createPortal } from "react-dom";

type TSaveUndoEditToolbar = {
  name: string;
  onCancel: (event: any) => void;
  onSave: (event: any) => void;
  children: React.ReactNode;
};

export const SaveUndoEditToolbar = (props: TSaveUndoEditToolbar) => {
  const { name, onCancel, onSave, children } = props;

  const undoButtonText = "ANNULLA";
  const saveButtonText = "SALVA";

  return (
    <>
      <div className="editing_description_label">
        <span>{name}</span>
      </div>
      {children}
      {createPortal(
        <div className="editing_toolbar">
          <div className="editing_buttons">
            <button className="editing_undo" type="button" onClick={onCancel}>
              {undoButtonText}
            </button>
            <button className="editing_save" type="button" onClick={onSave}>
              {saveButtonText}
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
