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
import { useNavigate } from "react-router-dom";

// From helper
import { userSignin, authenticateUser } from "../helpers/DBHelpers";

// React cookie
import { useCookies } from "react-cookie";

export const LoginPage = () => {
  const [alertmsg, setAlertmsg] = useState("");

  const [isLoginPage, setIsLoginPage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies(["jwt", "isLoggedIn"]);

  const navigate = useNavigate();

  const onSignInBTNClicked = async () => {
    if (email == "" || password == "" || firstName == "" || lastName == "") {
      return;
    }

    setLoading(true);

    const result = await userSignin(firstName, lastName, email, password);
    console.log(result);

    setLoading(false);

    if (result.success) {
      setAlertmsg(`User ${firstName} ${lastName} is created`);
      setCookie("isLoggedIn", true);
      setCookie("jwt", result.access_token);
    } else {
      setCookie("isLoggedIn", false);
      setAlertmsg(`Invaild SignIn e.g.User exist`);
    }
  };

  const onLoginBTNClicked = async () => {
    if (email == "" || password == "") {
      return;
    }

    setLoading(true);

    const result = await authenticateUser(email, password);
    console.log(result);

    setLoading(false);

    if (result.success) {
      setAlertmsg(`Welcome Back! ${email}`);
      setCookie("isLoggedIn", true);
      setCookie("jwt", result.access_token);

      navigate("/user");
    } else {
      setCookie("isLoggedIn", false);
      setAlertmsg(`Invaild SignIn e.g.User exist`);
    }
  };

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
              minHeight: { xs: 400, md: 500 },
            }}
            elevation={10}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "450px",
                width: "100%",
              }}
            >
              {alertmsg !== "" ? (
                <Alert
                  onClick={() => {
                    setAlertmsg("");
                  }}
                  sx={{ width: "75%" }}
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
                value={email}
                sx={{ mt: 2, width: "70%" }}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setEmail(e.target.value);
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
                value={password}
                sx={{ width: "70%" }}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setPassword(e.target.value);
                }}
                required
              />
              {isLoginPage ? (
                <Box sx={{ width: "70%" }}>
                  <Typography variant="body2" align="center" sx={{ my: 3 }}>
                    {"Don't have an account? "}
                    <Link
                      to={""}
                      onClick={() => {
                        setAlertmsg("");
                        setIsLoginPage(false);
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
                    onClick={onLoginBTNClicked}
                  >
                    Login
                  </LoadingButton>
                </Box>
              ) : (
                <Box sx={{ width: "100%" }}>
                  <TextField
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    variant="standard"
                    value={firstName}
                    sx={{ width: "70%" }}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
                    ) => {
                      setFirstName(e.target.value);
                    }}
                    required
                  />
                  <TextField
                    name="lastname"
                    label="Last Name"
                    id="lastname"
                    variant="standard"
                    value={lastName}
                    sx={{ width: "70%" }}
                    onChange={(
                      e: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                      >
                    ) => {
                      setLastName(e.target.value);
                    }}
                    required
                  />
                  <Typography variant="body2" align="center" sx={{ my: 3 }}>
                    {"Already have an account? "}
                    <Link
                      to={""}
                      onClick={() => {
                        setAlertmsg("");
                        setIsLoginPage(true);
                      }}
                    >
                      Login
                    </Link>
                  </Typography>
                  <LoadingButton
                    loading={loading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ width: "70%" }}
                    onClick={onSignInBTNClicked}
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
