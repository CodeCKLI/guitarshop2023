import { useState } from "react";

// MUI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";

// React Router
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [alertmsg, setAlertmsg] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Box sx={{ minHeight: "80vh" }}>
        <Stack
          display={"flex"}
          direction={"row"}
          justifyContent={"center"}
          textAlign={"center"}
          pt={6}
        >
          <Paper
            sx={{
              minWidth: { xs: 350, md: 400 },
              minHeight: { xs: 350, md: 400 },
            }}
            elevation={10}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "325px",
                width: "100%",
              }}
            >
              {alertmsg !== "" ? (
                <Alert
                  onClick={() => {
                    setAlertmsg("");
                  }}
                  sx={{ mt: 2, mb: 2, width: "75%" }}
                  severity="warning"
                >
                  {alertmsg}
                </Alert>
              ) : null}
              <Typography variant="h5">Sign In | Create Account</Typography>
              <TextField
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="standard"
                sx={{ mt: 2, width: "70%" }}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  console.log(e);
                }}
                required
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="standard"
                sx={{ width: "70%" }}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  console.log(e);
                }}
                required
              />
              {isLogin ? (
                <Box sx={{ width: "70%" }}>
                  <Typography variant="body2" align="center" sx={{ my: 3 }}>
                    {"Don't have an account? "}
                    <Link
                      to={""}
                      onClick={() => {
                        setAlertmsg("");
                        setIsLogin(false);
                      }}
                    >
                      Sign up
                    </Link>
                  </Typography>
                  <LoadingButton
                    loading={loading}
                    loadingIndicator={
                      <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                      >
                        <Typography> Connecting </Typography>
                        <CircularProgress color="inherit" size={16} />
                      </Stack>
                    }
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      setLoading(!loading);
                    }}
                  >
                    Login
                  </LoadingButton>
                </Box>
              ) : (
                <Box sx={{ width: "70%" }}>
                  <Typography variant="body2" align="center" sx={{ my: 3 }}>
                    {"Already have an account? "}
                    <Link
                      to={""}
                      onClick={() => {
                        setAlertmsg("");
                        setIsLogin(true);
                      }}
                    >
                      Login
                    </Link>
                  </Typography>
                  <LoadingButton
                    loading={loading}
                    loadingIndicator={
                      <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                      >
                        <Typography> Verifiying </Typography>
                        <CircularProgress color="inherit" size={16} />
                      </Stack>
                    }
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      setLoading(!loading);
                    }}
                  >
                    Sign In
                  </LoadingButton>
                </Box>
              )}
            </Box>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};
