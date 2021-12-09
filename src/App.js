import * as React from "react";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import BlogPost from "./components/BlogPost";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//primary: main background color, secondary is container color, info is
//the CTA color

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#EBF6FE",
    },
    info: {
      main: "#256EFF",
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
      sub: "#666666",
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
        <Route
          path="/blog/what-is-ideaDAO"
          element={
            <ThemeProvider theme={theme}>
              <BlogPost />
            </ThemeProvider>
          }
        />
      </Routes>
    </Router>
  );
}
