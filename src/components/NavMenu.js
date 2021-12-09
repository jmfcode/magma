import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function NavMenu() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navToBlog = () => navigate("/blog");
  const navToHome = () => navigate("/");

  const showBlog = false;

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-expanded={open ? "true" : undefined}
        id="demo-positioned-button"
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box minWidth={250} maxWidth={350}>
          <MenuItem onClick={navToHome}>
            <Typography color="#000">Home</Typography>
          </MenuItem>
        </Box>

        <Divider />

        <Box minWidth={250} maxWidth={350}>
          <MenuItem onClick={navToBlog}>
            <Typography color="#000">Blog</Typography>
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}
