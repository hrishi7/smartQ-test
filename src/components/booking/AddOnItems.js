import React from "react";
import Grid from "@mui/material/Grid";
import Button from "../common/Button";

function AddOnItems({ options, itemSubMenu=[], addOns, handleAddOns }) {
  return (
    <Grid conatiner>
      <Grid item xs={12}>
        Choose Toppings
      </Grid>
      {options
        .filter((option) => itemSubMenu.includes(option.name))
        .map((option) => (
          <Grid item container xs={12}>
            <Grid item xs={3}>
              <img
                src={option.imageurl}
                style={{ width: "80px", height: "50px" }}
              />
            </Grid>
            <Grid item xs={3}>
              {option.name}
            </Grid>
            <Grid item xs={3}>
              $ {option.price}
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => handleAddOns(option)}>
                {addOns.some((e) => e.name === option.name) ? "-" : "+"}
              </Button>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
}

export default AddOnItems;
