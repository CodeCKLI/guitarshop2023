// MUI
import { IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// React Router
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-evenly" }}>
          <Stack alignItems={"center"} direction={"row"}>
            <IconButton
              sx={{ color: "whitesmoke" }}
              href="/"
              size="large"
              edge="end"
            >
              <GraphicEqIcon />
            </IconButton>
            <Typography variant="h6">GS2023</Typography>
          </Stack>

          <Stack alignItems={"center"} direction={"row"}>
            <Link style={{ textDecoration: "none" }} to={"/shop"}>
              <Button sx={{ color: "whitesmoke" }} color="inherit">
                Shop
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/about"}>
              <Button sx={{ color: "whitesmoke" }} color="inherit">
                About
              </Button>
            </Link>

            <Link style={{ textDecoration: "none" }} to={"/contact"}>
              <Button sx={{ color: "whitesmoke" }} color="inherit">
                Contact
              </Button>
            </Link>
          </Stack>

          <Stack alignItems={"center"} direction={"row"}>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <IconButton
                sx={{ color: "whitesmoke" }}
                href="/"
                size="large"
                edge="end"
              >
                <AccountCircleIcon />
              </IconButton>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/cart"}>
              <IconButton
                sx={{ color: "whitesmoke" }}
                href="/"
                size="large"
                edge="end"
              >
                <ShoppingBagIcon />
              </IconButton>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
