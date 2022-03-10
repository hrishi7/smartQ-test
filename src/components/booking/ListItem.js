import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import TextField from "../common/TextField";
import Filter from "../common/Filter";
import Button from "../common/Button";

import AddOnItems from "./AddOnItems";

import { useDispatch } from "react-redux";
import data from "../../data";

import { addToCart } from "../../actions/cart";

function ListItem({
  foodname,
  foodid,
  fooddescription,
  price,
  imageurl,
  sessionlist = null,
  submenu,
}) {
  const dispatch = useDispatch();
  const [qty, setQty] = React.useState(0);
  const [selectedSession, setSelectedSession] = React.useState("");
  const [subTotal, setSubtotal] = React.useState("0");
  const [kitchenNote, setKitchenNote] = React.useState("");
  const [addOnOpen, setAddOnOpen] = React.useState(false);
  const [addOns, setAddOns] = React.useState([]);

  const calculateSubTotal = () => {
    let subTotal = parseFloat(price) * parseInt(qty);
    addOns.forEach((item) => {
      subTotal += parseFloat(item.price);
    });
    setSubtotal(Math.round(subTotal));
  };

  React.useEffect(() => {
    calculateSubTotal();
  }, [addOns, qty]);

  const handleAddOns = (addOn) => {
    let index = addOns.findIndex((item) => item.name == addOn.name);
    if (index != -1) {
      let prevAddOns = [...addOns];
      prevAddOns.splice(index, 1);
      setAddOns(prevAddOns);
    } else {
      let prevAddOns = [...addOns];
      prevAddOns.push(addOn);
      setAddOns(prevAddOns);
    }
  };

  const handleCart = () => {
    let item = {
      foodid,
      foodname,
      qty,
      subTotal,
      kitchenNote,
      selectedSession,
      subItems: addOns.map((addOn) => addOn.name),
    };
    dispatch(addToCart(item));
  };

  return (
    <Card style={{ marginTop: "20px", borderRadius: "15px" }}>
      <CardHeader
        avatar={
          <Avatar style={{ width: "100px", height: "100px" }}>
            <img
              alt="name"
              style={{ width: "100px", height: "100px" }}
              src={
                imageurl
                  ? imageurl
                  : "https://storage.googleapis.com/smartqprdnz_pub/im/fi/compassevents/CS.jpg"
              }
            />
          </Avatar>
        }
        action={
          <Typography style={{ marginTop: "20px" }}>$ {price}</Typography>
        }
        title={foodname}
        subheader={
          <div>
            <Typography>{fooddescription}</Typography>
            <Button onClick={() => setAddOnOpen(!addOnOpen)}>
              {addOnOpen == true ? "close" : "AddOns"}
            </Button>
          </div>
        }
      />
      <CardContent>
        <Collapse in={addOnOpen}>
          <AddOnItems
            options={data.submenu}
            itemSubMenu={submenu}
            addOns={addOns}
            handleAddOns={handleAddOns}
          />
        </Collapse>
        <Divider style={{ marginTop: "5px", marginBottom: "5px" }} />
        <Grid container style={{ padding: "5px" }}>
          <Grid item xs={3}>
            <TextField
              label="Quantity"
              type="text"
              fullWidth
              size="small"
              variant="outlined"
              value={qty}
              onChange={(event) => setQty(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Filter
              title="Sessions"
              handleChange={(e) => setSelectedSession(e.target.value)}
              options={sessionlist == null ? [] : sessionlist}
              value={selectedSession}
            />
          </Grid>
          <Grid item xs={3}>
            $ {subTotal}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container>
          <Grid item xs={7}>
            <TextField
              label="Note To the Kitchen"
              type="text"
              fullWidth
              size="small"
              variant="outlined"
              value={kitchenNote}
              onChange={(event) => setKitchenNote(event.target.value)}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Button onClick={() => handleCart()}>Add To Cart</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ListItem;
