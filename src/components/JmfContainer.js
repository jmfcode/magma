import * as React from "react";
import Box from "@mui/material/Box";

const JmfContainer = (props) => (
  <Box width="100vw" height="100vh" {...props}>
    {props.children}
  </Box>
);

export default JmfContainer;
