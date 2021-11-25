import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar({ auth, accountName, ...props }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} {...props}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row-reverse",
            }}
          >
            {auth && (
              <Typography noWrap>
                {accountName.slice(0, 4) + "..." + accountName.slice(-4)}
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
