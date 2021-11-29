import * as React from "react";
import Box from "@mui/material/Box";

const JmfContainer = (props) => (
  <Box {...props} sx={{ height: "100vh" }}>
    {props.children}
  </Box>
);

export default JmfContainer;
