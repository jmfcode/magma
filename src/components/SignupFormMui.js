import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { withStyles } from "@mui/styles";

const styles = {
  input: {
    color: "white",
  },
};

function SignupFormMui(props) {
  const [email, setEmail] = useState("");

  return (
    <Box>
      <TextField
        required
        id="outlined-basic"
        label="Email"
        variant="outlined"
        color="info"
        onChange={(event) => setEmail(event.target.value)}
        focused
        InputProps={{
          className: props.input,
        }}
      />

      <Button
        sx={{ height: 56, marginLeft: 1 }}
        color="info"
        variant="contained"
        onClick={() => console.log(email)}
      >
        Submit
      </Button>
    </Box>
  );
}

export default withStyles(styles)(SignupFormMui);
