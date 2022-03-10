import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const textfiled = createTheme({
  palette: { primary: { main: "#064D9C" } },
});

class Textfield extends Component {
  render() {
    return (
      <ThemeProvider theme={textfiled}>
        <TextField {...this.props} />
      </ThemeProvider>
    );
  }
}

export default Textfield;
