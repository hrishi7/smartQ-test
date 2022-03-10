import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Confirm from "../common/Confirm";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../actions/cart";

function Cart() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [callBackFunc, setCallbackFunc] = React.useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const openConfirm = (type) => {
    setOpen(true);
    setCallbackFunc(type);
  };
  const handleConfirm = (res) => {
    if (res) {
      if (callBackFunc == "ALL") {
        dispatch(clearCart());
      }
    }
    setOpen(false);
  };
  const onProceed = () => {
    navigate("/events/booking/payment");
  };
  return (
    <Card
      style={{ marginTop: "20px", borderRadius: "15px", marginRight: "20px" }}
    >
      <CardHeader
        style={{ backgroundColor: "#064D9C", color: "white" }}
        title={<Typography variant="body1">Cart Summary</Typography>}
        action={
          <IconButton
            aria-label="settings"
            onClick={() => openConfirm("ALL")}
            style={{ color: "white" }}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container>
          {state.cart && state.cart.items && state.cart.items.length > 0 ? (
            state.cart.items.map((item, index) => (
              <Grid
                item
                container
                xs={12}
                key={index}
                style={{ padding: "5px" }}
              >
                <Grid item xs={6}>
                  {item.foodname}{" "}
                </Grid>
                <Grid item xs={2}>
                  {item.qty}
                </Grid>
                <Grid item xs={2}>
                  $ {item.subTotal}
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    aria-label="settings"
                    onClick={() => dispatch(removeFromCart(item.foodid))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))
          ) : (
            <Typography>Your Cart is empty</Typography>
          )}
        </Grid>
        <Grid container>
          <Button variant="contained" onClick={() => onProceed()}>
            Proceed
          </Button>
        </Grid>
      </CardContent>
      <Confirm
        handleConfirm={handleConfirm}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Card>
  );
}

export default Cart;
