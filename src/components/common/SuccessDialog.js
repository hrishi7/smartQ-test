import React from "react";
import Button from "./Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function SuccessDialog({ setOpen, open, clearCart }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Thank You . For Placing the Order With Us"}
      </DialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
            dispatch(clearCart());
          }}
        >
          Close
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
            dispatch(clearCart());
            navigate("/events/booking");
          }}
          variant="contained"
        >
          Order More
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SuccessDialog;
