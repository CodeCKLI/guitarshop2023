// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// React Router
import { Link } from "react-router-dom";

// Video
import guitarplaying from "../assets/guitarplaying.mp4";
import guitarbro from "../assets/guitarbro.svg";

export const LandingPage = () => {
  return (
    <>
      {/* Desktop Text */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 50,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "whitesmoke",
          fontFamily: "monospace",
          zIndex: 999,
          pt: 10,
        }}
      >
        <Typography fontWeight={"bold"} variant="h2">
          Guitar Shop 2023
        </Typography>
        <Typography variant="h5" fontWeight={"bold"}>
          Just ONE more guitar!
        </Typography>
        <Link to={"/shop"} style={{ textDecoration: "none" }}>
          <Button
            href="/shop"
            size="large"
            sx={{
              m: 4,
              color: "whitesmoke",
              borderColor: "whitesmoke",
              fontWeight: 900,
              borderWidth: "0.5em",
              "&:hover": {
                color: "whitesmoke",
                borderColor: "whitesmoke",
                borderWidth: "0.5em",
              },
            }}
            variant="outlined"
          >
            Shop NOW
          </Button>
        </Link>
      </Box>

      {/* Desktop Video */}
      <Box sx={{ position: "relative" }} display={{ xs: "none", md: "block" }}>
        <video
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          src={guitarplaying}
          autoPlay
          loop
          muted
        />
        {/* Overlay */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, .7)",
          }}
        ></Box>
      </Box>

      {/* Mobile Landing */}
      <Box
        py={10}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        display={{ xs: "block", md: "none" }}
      >
        <Box component={"img"} src={guitarbro} width={"100%"}></Box>
        <Typography fontWeight={"bold"} variant="h2">
          Guitar Shop 2023
        </Typography>
        <Typography fontWeight={"bold"} variant="h5">
          Just ONE more guitar!
        </Typography>
        <Link to={"/shop"} style={{ textDecoration: "none" }}>
          <Button
            href="/shop"
            size="large"
            sx={{
              m: 4,
              fontWeight: 900,
              borderWidth: "0.5em",
              "&:hover": {
                borderWidth: "0.5em",
              },
            }}
            variant="outlined"
          >
            Shop NOW
          </Button>
        </Link>
      </Box>
    </>
  );
};
