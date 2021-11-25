import * as React from "react";
import HomePage from "./components/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//primary: main background color, secondary is container color, info is
//the CTA color

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#E5E6E4",
    },
    secondary: {
      main: "#CFD2CD",
    },
    info: {
      main: "#FBFBF2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
