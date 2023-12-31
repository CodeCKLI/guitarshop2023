import { useState } from "react";

// MUI
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";

import { useNavigate } from "react-router-dom";

// React cookie
import { useCookies } from "react-cookie";

export const UserInfoPage = () => {
  const [tabs, setTabs] = useState("info");

  const [cookies, setCookie, removeCookie] = useCookies(["jwt", "isLoggedIn"]);

  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ minHeight: "80vh" }}>
        <Stack
          sx={{
            gap: "3rem",
            display: "flex",
            flexDirection: { xs: "colum", md: "row" },
            pt: 5,
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Nav Paper */}
          <Paper
            sx={{
              width: { xs: "80%", md: "30%" },
              minHeight: { xs: 180, md: 200 },
            }}
            elevation={10}
          >
            <Stack sx={{ width: "100%" }}>
              <List>
                {/* Paper Title */}
                <ListItem>
                  <SettingsIcon color="primary" sx={{ marginRight: 1 }} />
                  <Typography>{"Manage account"}</Typography>
                </ListItem>

                <Divider />

                <ListItem>
                  <Button
                    sx={{ justifyContent: "flex-start" }}
                    fullWidth
                    variant="text"
                    onClick={() => {
                      setTabs("info");
                    }}
                  >
                    <Typography>{"Account details"}</Typography>{" "}
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    sx={{ justifyContent: "flex-start" }}
                    fullWidth
                    variant="text"
                    onClick={() => {
                      setTabs("history");
                    }}
                  >
                    <Typography>{"Order History"}</Typography>{" "}
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    sx={{ justifyContent: "flex-start" }}
                    fullWidth
                    variant="text"
                    onClick={() => {
                      setTabs("wish");
                    }}
                  >
                    <Typography>{"Wish List"}</Typography>{" "}
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    sx={{ justifyContent: "flex-start" }}
                    fullWidth
                    variant="text"
                    onClick={() => {
                      removeCookie("jwt");
                      removeCookie("isLoggedIn");
                      navigate("/shop");
                    }}
                  >
                    <Typography>{"Logout"}</Typography>{" "}
                  </Button>
                </ListItem>
              </List>
            </Stack>
          </Paper>

          {/* Outlet Paper */}

          {tabs == "info" ? <UserInfoPaper /> : null}
          {tabs == "history" ? <OrderHistoryPaper /> : null}
          {tabs == "wish" ? <WishListPaper /> : null}
        </Stack>
      </Box>
    </Container>
  );
};

const UserInfoPaper = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        minWidth: { xs: "80%", md: "60%" },
        minHeight: { xs: 300, md: 400 },
      }}
      spacing={3}
    >
      {/* UserInfo */}
      <Paper elevation={5}>
        <Stack
          sx={{
            direction: "colum",
            justifyContent: "center",
            alignItems: "center",
            py: 3,
            width: "100%",
          }}
        >
          <Stack sx={{ display: "flex", flexDirection: "row", width: "80%" }}>
            <SettingsIcon color="secondary" sx={{ marginRight: 1 }} />
            <Typography>{"Manage account"}</Typography>
          </Stack>

          <Stack
            sx={{
              direction: "colum",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              py: 4,
              width: "80%",
            }}
          >
            <TextField
              id="user_name"
              label="User Name"
              name="user_name"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <TextField
              id="full_name"
              label="Full Name"
              name="full_name"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <TextField
              id="email"
              label="Email Address"
              name="email"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <Button variant="contained" fullWidth>
              Save
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

const OrderHistoryPaper = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        minWidth: { xs: "80%", md: "60%" },
        minHeight: { xs: 300, md: 400 },
      }}
      spacing={3}
    >
      {/* Order History */}
      <Paper elevation={5}>
        <Stack
          sx={{
            direction: "colum",
            justifyContent: "center",
            alignItems: "center",
            py: 3,
            width: "100%",
          }}
        >
          <Stack sx={{ display: "flex", flexDirection: "row", width: "80%" }}>
            <SettingsIcon color="secondary" sx={{ marginRight: 1 }} />
            <Typography>{"Order History"}</Typography>
          </Stack>

          <Stack
            sx={{
              direction: "colum",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              py: 4,
              width: "80%",
            }}
          >
            <TextField
              id="user_name"
              label="User Name"
              name="user_name"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <TextField
              id="full_name"
              label="Full Name"
              name="full_name"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <TextField
              id="email"
              label="Email Address"
              name="email"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <Button variant="contained" fullWidth>
              Save
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

const WishListPaper = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        minWidth: { xs: "80%", md: "60%" },
        minHeight: { xs: 300, md: 400 },
      }}
      spacing={3}
    >
      {/* Order History */}
      <Paper elevation={5}>
        <Stack
          sx={{
            direction: "colum",
            justifyContent: "center",
            alignItems: "center",
            py: 3,
            width: "100%",
          }}
        >
          <Stack sx={{ display: "flex", flexDirection: "row", width: "80%" }}>
            <SettingsIcon color="secondary" sx={{ marginRight: 1 }} />
            <Typography>{"Wish List"}</Typography>
          </Stack>

          <Stack
            sx={{
              direction: "colum",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              py: 4,
              width: "80%",
            }}
          >
            <TextField
              id="user_name"
              label="User Name"
              name="user_name"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <TextField
              id="full_name"
              label="Full Name"
              name="full_name"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <TextField
              id="email"
              label="Email Address"
              name="email"
              variant="outlined"
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <Button variant="contained" fullWidth>
              Save
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
