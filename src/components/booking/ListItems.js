import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import makeStyles from "@mui/styles/makeStyles";
import { useDispatch, useSelector } from "react-redux";

import { getAllFoodItems } from "../../actions/foodItem";

import ListItem from "./ListItem";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
  },
}));

function ListItems({ selectedMenu }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(selectedMenu,state);
  const classes = useStyles();
  const {foodItem} = state;

  React.useEffect(() => {
    if (selectedMenu != null) {
      dispatch(getAllFoodItems(selectedMenu.category.categoryName));
    }else{
      dispatch(getAllFoodItems("Pizza"));
    }
  }, [selectedMenu]);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Card style={{ borderRadius: "15px" }}>
          <CardMedia
            component="img"
            height="194"
            image={
              selectedMenu != null
                ? selectedMenu.category.bannerImage
                : "https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/vector-italian-pizza-horizontal-banners.jpg"
            }
            alt="Paella dish"
          />
        </Card>
      </Grid>
      {foodItem && foodItem.allFoodItems.map((item,index) => (
        <Grid item xs={12} key={index}>
          <ListItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ListItems;
