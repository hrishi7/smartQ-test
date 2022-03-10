import React from "react";
import Button from "./Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function Confirm({ handleConfirm, open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are You Sure You want to delete this item?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => handleConfirm(true)} variant="contained">
          Confirm
        </Button>

        <Button onClick={() => handleConfirm(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirm;
