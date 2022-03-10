import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#064D9C",
    },
    secondary: {
      main: "#F4B63F",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#21134A",
    },
  },
});

export default class CustomButton extends React.Component {
  render() {
    return (
      <>
        <ThemeProvider theme={blueTheme}>
          <Button variant="contained" {...this.props} />
        </ThemeProvider>
      </>
    );
  }
}
