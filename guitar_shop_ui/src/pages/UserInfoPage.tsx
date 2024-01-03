import { useState, useEffect, useContext } from "react";
import { NavLogInContext } from "../pages/MainPage";

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
import Grid from "@mui/material/Grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";

import { useNavigate } from "react-router-dom";

// React cookie
import { useCookies } from "react-cookie";

import { WishListCard } from "../components/WishListCard";

import { getOrdersByAppuserID } from "../helpers/DBHelpers";

export const UserInfoPage = () => {
  const [tabs, setTabs] = useState("info");

  const [cookies, setCookie, removeCookie] = useCookies([
    "jwt",
    "isLoggedIn",
    "userID",
    "userName",
  ]);

  const navigate = useNavigate();

  const {
    isNavLoggedIn,
    setIsNavLoggedIn,
  }: { isNavLoggedIn: any; setIsNavLoggedIn: any } =
    useContext(NavLogInContext);

  useEffect(() => {
    if (!isNavLoggedIn) {
      navigate("/");
    }
  }, []);

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
                      removeCookie("userID");
                      removeCookie("userName");

                      setIsNavLoggedIn(false);

                      navigate("/login");
                    }}
                  >
                    <Typography>{"Logout"}</Typography>
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
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");

  const [cookies, setCookie, removeCookie] = useCookies([
    "jwt",
    "isLoggedIn",
    "userName",
    "userID",
  ]);

  useEffect(() => {
    setUserID(cookies.userID);
    setUserName(cookies.userName);
  }, []);

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
              id="user_ID"
              label="User ID"
              name="user_id"
              variant="outlined"
              value={userID}
              fullWidth
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                console.log(e);
              }}
            />
            <TextField
              id="user_name"
              label="User Name"
              name="user_name"
              variant="outlined"
              value={userName}
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
  const [orders, setOrders] = useState([]);

  const [cookies, setCookie, removeCookie] = useCookies([
    "jwt",
    "isLoggedIn",
    "userName",
    "userID",
  ]);

  const retrieveOrders = async () => {
    const result = await getOrdersByAppuserID(cookies.userID);
    console.log(result);
    setOrders(result);
  };

  useEffect(() => {
    retrieveOrders();
  }, []);

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
              width: "90%",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Order ID</TableCell>
                      <TableCell align="right">Payment</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((orders: any) => (
                      <TableRow
                        key={orders.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {orders.id}
                        </TableCell>
                        <TableCell align="right">
                          {orders.paymentMethod}
                        </TableCell>
                        <TableCell align="right">{orders.status}</TableCell>
                        <TableCell align="right">{orders.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* <Stack direction={"row"} spacing={2}>
                <Typography variant="h6">id</Typography>
                <Typography variant="h6">Payment</Typography>
                <Typography variant="h6">Status</Typography>
              </Stack> */}

              {/* <Typography variant="h6">Total</Typography> */}
            </Stack>

            {/* {orders.map((order: any) => {
              return (
                <Stack
                  key={order.id}
                  direction={"row"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Stack direction={"row"} spacing={2}>
                    <Typography>{order.id}</Typography>
                    <Typography>{order.paymentMethod}</Typography>
                    <Typography>{order.status}</Typography>
                  </Stack>

                  <Typography>{order.total}</Typography>
                </Stack>
              );
            })} */}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

const WishListPaper = () => {
  const [guitarsWish, setGuitarsWish] = useState([]);

  useEffect(() => {
    const wishItems = localStorage.getItem("wishItems");

    if (wishItems != null) {
      const wishItemArr = JSON.parse(wishItems);
      console.log(wishItemArr);

      setGuitarsWish(wishItemArr);
    }
  }, []);

  return (
    <Stack
      direction={"column"}
      sx={{
        minWidth: { xs: "80%", md: "60%" },
        minHeight: { xs: 300, md: 400 },
      }}
      spacing={3}
    >
      {/* WishList */}
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
            <Stack
              sx={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <Typography variant="h5">{"Wish List"}</Typography>
            </Stack>
            <Grid paddingX={1} container>
              {guitarsWish.length == 0 ? (
                <Stack py={5}>
                  <Typography variant="h6">No guitar is found</Typography>
                </Stack>
              ) : (
                guitarsWish.map((guitar: any) => {
                  return (
                    <Grid item key={guitar.id} xs={12} md={6}>
                      <WishListCard
                        guitar={guitar}
                        setGuitarsWish={setGuitarsWish}
                      ></WishListCard>
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
