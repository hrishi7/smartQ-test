import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  container: {
    height: "80px",
    backgroundColor: "#F5BC31",
    // position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
    justifyContent:"center"
  },
  copyrightText: {
    fontSize: 15,
    marginTop: 20,
    opacity: 0.8,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.container}>
      <Typography className={classes.copyRightText}>
        &#169; SMARTQ | ALL RIGHTS RESERVED
      </Typography>
    </Grid>
  );
}
