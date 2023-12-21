// MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// React Router
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        width={"100%"}
        justifyContent={"center"}
        spacing={5}
        py={10}
      >
        <NavPaper />
        <ContactPaper />
      </Stack>
    </Box>
  );
};

const NavPaper = () => {
  return (
    <Stack direction={"column"} width={{ xs: "100%", sm: "30%" }}>
      <Typography variant="h6">Site Map</Typography>
      <Divider />
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          fontFamily: "monospace",
        }}
      >
        Home
      </Link>
      <Link
        to={"/shop"}
        style={{
          textDecoration: "none",
          fontFamily: "monospace",
        }}
      >
        Shopping
      </Link>
      <Link
        to={"/about"}
        style={{
          textDecoration: "none",
          fontFamily: "monospace",
        }}
      >
        About
      </Link>
    </Stack>
  );
};

const ContactPaper = () => {
  return (
    <Stack direction={"column"} width={{ xs: "100%", sm: "30%" }}>
      <Typography variant="h6">Contact Us</Typography>
      <Divider></Divider>
      <Link to={"https://ckli-portfolio.onrender.com/"}>
        <Typography>@2023 The Full-Stack-Developer ChunKai Li</Typography>
      </Link>
      <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      <Typography>Address: 123 Fake Dr, Fake Town, US</Typography>
      <Typography>Email: faker2023@gs2023.com</Typography>
      <Typography>Phone: 555-Faker-7665</Typography>
    </Stack>
  );
};
