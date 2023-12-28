import { useState, useEffect, useContext } from "react";

import { CartItemContext } from "../pages/MainPage";

// MUI
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  Avatar,
} from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import Stack from "@mui/material/Stack";

// MUI Icons
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { deepPurple } from "@mui/material/colors";

// React Router
import { Link } from "react-router-dom";

const pages = ["Shop", "About"];
const userInfo = {
  name: "Dicky",
};

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isLogIn, setIsLogIn] = useState(false);

  const {
    cartItemNumber,
    updateCartNumber,
  }: { cartItemNumber: any; updateCartNumber: any } =
    useContext(CartItemContext);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    updateCartNumber();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack alignItems={"center"} direction={"row"}>
            <IconButton
              sx={{
                display: { xs: "none", sm: "flex" },
                color: "whitesmoke",
                mr: 1,
              }}
              href="/"
              size="large"
              edge="end"
            >
              <GraphicEqIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              G.S.23
            </Typography>
          </Stack>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                style={{ textDecoration: "none" }}
                to={`/${page.toLowerCase()}`}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "whitesmoke", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="end"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/${page.toLowerCase()}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography variant="h6" color={"primary"}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Stack sx={{ flexGrow: 1 }} alignItems={"center"} direction={"row"}>
            <IconButton
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "whitesmoke",
                mr: 1,
              }}
              href="/"
              size="large"
              edge="end"
            >
              <GraphicEqIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "flex", sm: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              G.S.23
            </Typography>
          </Stack>

          <Button
            sx={{ color: "whitesmoke" }}
            onClick={() => setIsLogIn(!isLogIn)}
          >
            Login
          </Button>

          <Stack alignItems={"center"} direction={"row"}>
            {isLogIn ? (
              <Link style={{ textDecoration: "none" }} to={"/user"}>
                <Button sx={{ color: "whitesmoke" }} size="large">
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {userInfo.name[0]}
                  </Avatar>
                </Button>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                <IconButton sx={{ color: "whitesmoke" }} size="large">
                  <AccountCircleIcon />
                </IconButton>
              </Link>
            )}

            <Link style={{ textDecoration: "none" }} to={"/cart"}>
              <IconButton sx={{ color: "whitesmoke" }} size="large">
                <ShoppingBagIcon />
                <Typography>{cartItemNumber}</Typography>
              </IconButton>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
