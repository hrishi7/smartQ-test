import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Categories from "../components/booking/Categories";
import ListItems from "../components/booking/ListItems";
import Cart from "../components/booking/Cart";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = React.useState(null);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ marginLeft: "100px", marginTop: "20px" }}
        >
          Build Your Menu
        </Typography>
      </Grid>
      <Grid item container xs={12} direction="row">
        <Grid item xs={2}>
          <Categories
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </Grid>
        <Grid item xs={6}>
          <ListItems selectedMenu={selectedMenu} />
        </Grid>
        <Grid item xs={4}>
          <Cart />
        </Grid>
      </Grid>
    </Grid>
  );
}
