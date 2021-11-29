import * as React from "react";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//primary: main background color, secondary is container color, info is
//the CTA color

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1e0404",
    },
    secondary: {
      main: "#2d0707",
    },
    info: {
      main: "#db3737",
    },
    text: {
      primary: "#ffffff",
      secondary: "#00000",
    },
  },
});

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider theme={theme}>
              <HomePage />
            </ThemeProvider>
          }
        />
        <Route
          path="/blog"
          element={
            <ThemeProvider theme={theme}>
              <BlogPage />
            </ThemeProvider>
          }
        />
      </Routes>
    </Router>
  );
}
