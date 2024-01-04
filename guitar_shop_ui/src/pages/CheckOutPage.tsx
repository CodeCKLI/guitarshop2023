import { useState, useEffect, useContext } from "react";

import { NavLogInContext, CartItemContext } from "../pages/MainPage";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// React cookie
import { useCookies } from "react-cookie";

import { useNavigate } from "react-router-dom";

import { ceateOrder } from "../helpers/DBHelpers";

export const CheckOutPage = () => {
  const [guitars, setGuitars]: any = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal]: any = useState(0);
  const [tax, setTax] = useState(0);
  const [dialogText, setDialogText] = useState("");
  const [shipping] = useState(5.0);

  const [isShowInfo, setIsShowInfo] = useState("flex");
  const [isShowShip, setIsShowShip] = useState("none");
  const [isShowPay, setIsShowPay] = useState("none");
  const [isShowConfirm, setIsShowConfirm] = useState("none");

  const [isSumInfo, setIsSumInfo] = useState("none");
  const [isSumShip, setIsSumShip] = useState("none");
  const [isSumPay, setIsSumPay] = useState("none");

  const [email, setEmail] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  const [method, setMethod] = useState("visa");
  const [cardNumber, setCardNumber] = useState("");
  const [cardcsv, setCardcsv] = useState("");

  const [open, setOpen] = useState(false);

  const { isNavLoggedIn }: { isNavLoggedIn: any } = useContext(NavLogInContext);
  const {
    updateCartNumber,
  }: { cartItemNumber: any; setCartItemNumber: any; updateCartNumber: any } =
    useContext(CartItemContext);

  const [cookies] = useCookies(["jwt", "isLoggedIn", "userName", "userID"]);

  const handleClose = () => {
    setOpen(false);
  };

  const getGuitars = () => {
    const guitarsStr = sessionStorage.getItem("cartItems");

    if (guitarsStr != null) {
      const guitarsArr = JSON.parse(guitarsStr);

      const totalCost = guitarsArr.reduce(
        (accumulator: number, currentProduct: any) => {
          return accumulator + currentProduct.price * currentProduct.amount;
        },
        0
      );

      setGuitars(guitarsArr);

      const totalTax = totalCost * 0.06;

      setTax(totalTax);

      setTotal(Number(totalCost).toFixed(2));

      console.log(guitarsArr);
      return;
    }
  };

  const navigate = useNavigate();

  const handleConfirmClicked = async () => {
    setLoading(true);

    const userID = cookies.userID;

    console.log(userID);

    if (userID != null) {
      const result: any = await ceateOrder(
        email,
        Fname,
        Lname,
        phone,
        country,
        address,
        city,
        postal,
        method,
        cardNumber,
        cardcsv,
        Number(userID),
        "Penning",
        JSON.stringify(guitars),
        Number(tax.toFixed(2)),
        shipping,
        total
      );
      console.log(result);

      sessionStorage.removeItem("cartItems");

      updateCartNumber();

      setDialogText(`Order ID ${result.orderID} is placed succesfully! Please check your email
      or user order page if you have logged in`);
    } else {
      const result: any = await ceateOrder(
        email,
        Fname,
        Lname,
        phone,
        country,
        address,
        city,
        postal,
        method,
        cardNumber,
        cardcsv,
        undefined,
        "Penning",
        JSON.stringify(guitars),
        Number(tax.toFixed(2)),
        shipping,
        total
      );
      console.log(result);

      sessionStorage.removeItem("cartItems");

      updateCartNumber();

      setDialogText(`Order ID ${result.orderID} is placed succesfully! Please check your email
      or user order page if you have logged in`);
    }

    setTimeout(() => {
      setOpen(true);
    }, 3000);
  };

  useEffect(() => {
    getGuitars();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          {/* Forms */}
          <Stack direction={"column"} width={{ xs: "100%", md: "55%" }} py={3}>
            {/* Buttons */}
            <Stack marginY={2} direction={"row"} spacing={2}>
              <Button href="/cart" sx={{ width: "30%" }} variant="outlined">
                Back to cart
              </Button>
              <Button
                onClick={() => {
                  setIsShowInfo("flex");
                  setIsShowShip("none");
                  setIsShowPay("none");
                  setIsShowConfirm("none");

                  setIsSumInfo("none");
                  setIsSumShip("none");
                  setIsSumPay("none");

                  setLoading(false);
                }}
                sx={{ width: "30%" }}
                variant="outlined"
              >
                Redo
              </Button>
            </Stack>

            {/* Cautions */}
            <Typography color={"red"}>
              Caution! This page is for educational purpose only
            </Typography>
            <Typography color={"red"}>
              No payment is made | No information is store nor processed | No
              product is sold
            </Typography>

            {/* Customer Info */}
            <Typography py={2} variant="h4">
              Customer Info
            </Typography>

            <Divider orientation="horizontal" flexItem />

            <Stack display={isShowInfo} py={4} direction={"column"} spacing={2}>
              <TextField
                required
                size="small"
                id="email"
                label="Eamil Address"
                onChange={(event) => {
                  setEmail(event.target.value);
                  console.log(event.target.value);
                }}
              />
              <TextField
                required
                size="small"
                id="first_name"
                label="First Name"
                onChange={(event) => {
                  setFname(event.target.value);
                  console.log(event.target.value);
                }}
              />
              <TextField
                required
                size="small"
                id="last_name"
                label="Last Name"
                onChange={(event) => {
                  setLname(event.target.value);
                  console.log(event.target.value);
                }}
              />
              <TextField
                required
                size="small"
                id="phone"
                label="Phone Number"
                onChange={(event) => {
                  setPhone(event.target.value);
                  console.log(event.target.value);
                }}
                helperText="We will not sale you any product :)"
              />
              <Button
                onClick={() => {
                  setIsShowInfo("none");
                  setIsShowShip("flex");
                  setIsSumInfo("flex");
                }}
                variant="contained"
                fullWidth
              >
                Continue
              </Button>
            </Stack>

            <Stack display={isSumInfo} direction={"column"}>
              <Typography variant="h6" color={"grey"}>
                {`${Fname} ${Lname}`}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {email}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {phone}
              </Typography>
            </Stack>

            {/* Shipping Method */}
            <Typography py={2} variant="h4">
              Shipping Method
            </Typography>

            <Divider orientation="horizontal" flexItem />

            <Stack display={isShowShip} py={4} direction={"column"} spacing={2}>
              <Typography variant="h5">Shipping Address</Typography>
              <TextField
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                required
                size="small"
                id="country"
                label="County"
              />
              <TextField
                required
                size="small"
                id="address"
                label="Phyical Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <TextField
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
                size="small"
                id="city"
                label="City"
              />
              <TextField
                required
                size="small"
                type="number"
                id="postal"
                label="Postal Code"
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  setIsShowShip("none");
                  setIsShowPay("flex");
                  setIsSumShip("flex");
                }}
                variant="contained"
                fullWidth
              >
                Continue
              </Button>
            </Stack>

            <Stack display={isSumShip} direction={"column"}>
              <Typography variant="h6" color={"grey"}>
                {address}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {city}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {country}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {postal}
              </Typography>
            </Stack>

            {/* Payment */}
            <Typography py={2} variant="h4">
              Payment
            </Typography>

            <Divider orientation="horizontal" flexItem />

            <Stack display={isShowPay} py={4} direction={"column"} spacing={2}>
              <FormControl>
                <FormLabel id="method">Payment Method</FormLabel>
                <RadioGroup
                  aria-labelledby="method"
                  defaultValue="visa"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    console.log(e.target.defaultValue);
                    setMethod(e.target.defaultValue);
                  }}
                >
                  <Stack direction={"row"}>
                    <FormControlLabel
                      value="visa"
                      control={<Radio />}
                      label="Visa"
                    />
                    <FormControlLabel
                      value="master"
                      control={<Radio />}
                      label="Master"
                    />
                    <FormControlLabel
                      value="inperson"
                      control={<Radio />}
                      label="InPerson"
                    />
                  </Stack>

                  {method != "inperson" ? (
                    <Stack spacing={2}>
                      <TextField
                        required
                        size="small"
                        id="cardnumber"
                        label="Card number"
                        onChange={(e) => {
                          setCardNumber(e.target.value);
                        }}
                        helperText="Please use 4242 4242 4242 4242"
                      />
                      <TextField
                        required
                        size="small"
                        id="cardcsv"
                        label="cardcsv"
                        onChange={(e) => {
                          setCardcsv(e.target.value);
                        }}
                        helperText="Please use 424"
                      />
                    </Stack>
                  ) : null}
                </RadioGroup>
              </FormControl>

              <Button
                onClick={() => {
                  setIsShowPay("none");
                  setIsShowConfirm("flex");
                  setIsSumPay("flex");
                }}
                variant="contained"
                fullWidth
              >
                Continue
              </Button>
            </Stack>

            <Stack display={isSumPay} direction={"column"}>
              <Typography variant="h6" color={"grey"}>
                {method}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {cardNumber}
              </Typography>
              <Typography variant="h6" color={"grey"}>
                {cardcsv}
              </Typography>
            </Stack>

            {/* Confirm */}
            <Typography py={2} variant="h4">
              Confirm
            </Typography>

            <Divider orientation="horizontal" flexItem />

            <Stack
              display={isShowConfirm}
              py={4}
              direction={"column"}
              spacing={2}
            >
              <LoadingButton
                loading={loading}
                loadingIndicator={
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <h3>Processing</h3>
                    <CircularProgress color="inherit" size={16} />
                  </Stack>
                }
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleConfirmClicked}
              >
                Confirm Order
              </LoadingButton>
            </Stack>
          </Stack>

          {/* Order Summary */}
          <Stack
            spacing={2}
            sx={{ backgroundColor: "#f3f3f3" }}
            direction={"column"}
            width={{ xs: "100%", md: "40%" }}
            my={5}
            p={4}
            position={"sticky"}
            top={0}
          >
            <Typography variant="h4">Order Summary</Typography>

            <Divider orientation="horizontal" flexItem />

            {/* Items */}
            <Stack direction={"column"} width={"100%"} spacing={3}>
              {guitars.map((guitar: any) => {
                return (
                  <Stack
                    key={guitar.id}
                    width={"100%"}
                    direction={"column"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h6">{guitar.model}</Typography>
                    <Typography>{guitar.bodyColor}</Typography>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Typography>{`Qty: ${guitar.amount}`}</Typography>
                      <Typography variant="h6">
                        {Number(guitar.price * guitar.amount).toFixed(2)}
                      </Typography>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>

            {/* Total & Tax % Shipping */}
            <Stack direction={"column"} spacing={1}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Total before tax and shipping: </Typography>
                <Typography>{total}</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Shipping: </Typography>
                <Typography>$5.00 USD</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Tax: </Typography>
                <Typography>{tax.toFixed(2)}</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Total after tax and sipping: </Typography>
                <Typography variant="h5">
                  {(Number(total) + tax + 5.0).toFixed(2)}
                  USD
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* Dialog */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Order Status"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {dialogText}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  navigate("/shop");
                }}
              >
                Back to Shop
              </Button>

              {isNavLoggedIn ? (
                <Button
                  onClick={() => {
                    navigate("/user");
                  }}
                  autoFocus
                >
                  Check your order
                </Button>
              ) : null}
            </DialogActions>
          </Dialog>
        </Stack>
      </Container>
    </div>
  );
};
