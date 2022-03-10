import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const filter = createTheme({
  palette: { primary: { main: "#064D9C" } },
});

class Filter extends Component {
  render() {
    return (
      <ThemeProvider theme={filter}>
        <FormControl
          fullWidth
          style={{ marginLeft: "10px", marginRight: "10px", width: 200 }}
        >
          <InputLabel id="demo-simple-select-label">
            {this.props.title}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.value}
            label={this.props.title}
            onChange={this.props.handleChange}
            style={{ height: "40px" }}
          >
            {this.props.options.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    );
  }
}

export default Filter;
