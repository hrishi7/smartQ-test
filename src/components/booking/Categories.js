import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategories } from "../../actions/category";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px",
    textAlign: "center",
  },
  containerItem: {
    cursor: "pointer",
    marginBottom: "10px",
  },
}));

function Categories({ selectedMenu, setSelectedMenu }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { category } = state;

  React.useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <Grid container className={classes.container}>
      {category &&
        category.allCategories &&
        category.allCategories.map((category, index) => (
          <Grid
            item
            xs={12}
            className={classes.containerItem}
            style={
              selectedMenu != null && selectedMenu.index == index
                ? { textDecoration: "underline" }
                : {}
            }
            onClick={() => setSelectedMenu({ index, category })}
          >
            <Grid item xs={12}>
              <img
                style={{ width: "50px", height: "50px" }}
                alt="name"
                src={category.icon}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>{category.categoryName}</Typography>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
}

export default Categories;
