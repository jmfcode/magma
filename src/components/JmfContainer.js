import * as React from "react";
import Box from "@mui/material/Box";

const JmfContainer = (props) => (
  <Box {...props} display="flex" flexDirection="column">
    {props.children}
  </Box>
);

export default JmfContainer;
