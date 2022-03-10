import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "../components/common/TextField";
import SuccessDialog from "../components/common/SuccessDialog";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../actions/cart";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

function Payment() {
  const [open, setOpen] = React.useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    setOpen(true);
  };

  return (
    <Grid container>
      <Grid item xs={8}>
        <Grid item xs={12}>
          <Card
            style={{
              marginTop: "20px",
              borderRadius: "15px",
              marginRight: "20px",
            }}
          >
            <CardHeader
              title={<Typography variant="body1">Event Details</Typography>}
            />
            <CardContent>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  container
                  spacing={2}
                  style={{ marginBottom: "10px" }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Name"
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      value="Hrishikesh Baidya"
                      onChange={(event) => console.log(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Contact"
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      value="8090909090"
                      onChange={(event) => console.log(event.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  spacing={2}
                  style={{ marginBottom: "10px" }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Name"
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      value="Indiranagar ,Bengaluru, Karnataka"
                      onChange={(event) => console.log(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Event Date"
                      type="date"
                      fullWidth
                      size="small"
                      variant="outlined"
                      value="2022-03-24"
                      onChange={(event) => console.log(event.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  spacing={2}
                  style={{ marginBottom: "10px" }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Event Name"
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={"Hackathon 12"}
                      onChange={(event) => console.log(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Deivery Mode
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"PickUp"}
                        label="Age"
                        onChange={(e) => console.log(e.target.value)}
                      >
                        <MenuItem value={"Delivery"}>Delivery</MenuItem>
                        <MenuItem value={"PickUp"}>PickUp</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Card
          style={{
            marginTop: "20px",
            borderRadius: "15px",
            marginRight: "20px",
          }}
        >
          <CardHeader
            title={<Typography variant="body1">Payment Mode</Typography>}
          />
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Choose Payment method
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="COD"
                      control={<Radio />}
                      label="COD"
                    />
                    <FormControlLabel
                      value="net-banking"
                      control={<Radio />}
                      label="Net banking"
                    />
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label="Debit/Credit card"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Typography variant="h5">Selected Items</Typography>
              </Grid>
              {state.cart &&
                state.cart.items &&
                state.cart.items.map((item, index) => (
                  <Grid
                    item
                    container
                    xs={12}
                    key={index}
                    style={{ padding: "5px" }}
                  >
                    <Grid item xs={6}>
                      {item.foodname} - {item.subItems.join(",")}
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
                ))}
            </Grid>
            <Grid container>
              <Button variant="contained" onClick={() => handleCheckOut()}>
                CheckOut
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <SuccessDialog open={open} setOpen={setOpen} clearCart={clearCart} />
    </Grid>
  );
}

export default Payment;
