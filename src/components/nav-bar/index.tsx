import { Dispatch, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { UserInterface } from "../../types/user";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../api/authApi";

const drawerWidth = 240;
const navItems = ["dashboard", "users"];
const navItemsMobile = ["dashboard", "users", "profile"];

export default function NavBar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [userData, setUserData]: [
    UserInterface,
    Dispatch<UserInterface | null>,
  ] = useLocalStorage<any>("userData", null);

  const {
    mutate: logoutMutate,
    isError,
    error,
  } = useMutation({
    mutationFn: logout,
  });

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateToProfile = () => navigate("/profile");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogOut = async (e: React.MouseEvent) => {
    e.preventDefault();

    logoutMutate();

    if (isError) {
      setErrorMessage(JSON.stringify(error));
      return; // Exit function early if error occurs
    }

    setUserData(null);
    navigate("/login");
  };

  // Drawer visible on Mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        arDB
      </Typography>
      <Divider />
      <List>
        {navItemsMobile.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton href={item} sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItemButton sx={{ textAlign: "center" }} onClick={handleLogOut}>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Nav Bar Component - Desktop */}
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            arDB
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} href={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar sx={{ width: 32, height: 32 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                  },
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleNavigateToProfile}>
                  <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer/Nav */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
