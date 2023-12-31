import { useState, useEffect, useContext } from "react";

import { CartItemContext } from "../pages/MainPage";

// MUI
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// React Router
import { Link } from "react-router-dom";

// Icon
import CloseIcon from "@mui/icons-material/Close";

export const CartPage = () => {
  const [guitars, setGuitars]: any = useState([]);
  const [total, setTotal]: any = useState(0);

  const { updateCartNumber }: { updateCartNumber: any } =
    useContext(CartItemContext);

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

      setTotal(Number(totalCost).toFixed(2));

      setGuitars(guitarsArr);
    }
  };

  useEffect(() => {
    getGuitars();
  }, []);

  return (
    <>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent={"space-bwtween"}
          spacing={2}
          py={10}
        >
          {/* Items display */}
          <Stack direction={"column"} width={"100%"} spacing={3}>
            <Typography variant="h4">Shopping Cart</Typography>

            <Divider orientation="horizontal" flexItem />

            {/* Item cards */}
            {guitars.length > 0 ? (
              guitars.map(
                (guitar: {
                  id: number;
                  model: string;
                  brand: string;
                  description: string;
                  coverURL: string;
                  price: number;
                  colorOptions: string[];
                  pictures: string[];
                  bodyColor: string;
                  amount: number;
                }) => {
                  return (
                    <Stack
                      key={guitar.id}
                      width={"90%"}
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignSelf={"center"}
                    >
                      <Box
                        component="img"
                        sx={{ maxWidth: 150 }}
                        src={guitar?.coverURL}
                      />
                      <Stack direction={"column"} width={"50%"}>
                        <Typography variant="h6">{guitar?.model}</Typography>
                        <Typography>{guitar?.brand}</Typography>
                        <Typography>{guitar?.bodyColor}</Typography>
                        <Typography variant="h6">
                          {guitar?.price * guitar.amount}
                        </Typography>
                      </Stack>

                      <Stack direction={"column"} spacing={2}>
                        <Box>
                          <FormControl fullWidth>
                            <InputLabel id="qty">Qty:</InputLabel>
                            <Select
                              labelId="qty"
                              id="qty"
                              value={String(guitar?.amount)}
                              label="Qty"
                              onChange={(e: any) => {
                                guitars.filter((item: any) => {
                                  if (item.id == guitar.id) {
                                    return (item.amount = e.target.value);
                                  }
                                });
                                const jsonObject = JSON.stringify(guitars);

                                sessionStorage.setItem("cartItems", jsonObject);
                                getGuitars();
                              }}
                            >
                              {[...Array(10)].map((e, i) => (
                                <MenuItem key={i} value={i + 1}>
                                  {i + 1}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </Stack>

                      <Box sx={{ maxHeight: "10" }}>
                        <IconButton
                          onClick={() => {
                            const index = guitars.indexOf(guitar);
                            if (index > -1) {
                              guitars.splice(index, 1);
                            }
                            const guitarsJSON = JSON.stringify(guitars);
                            sessionStorage.setItem("cartItems", guitarsJSON);
                            getGuitars();
                            updateCartNumber();
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </Stack>
                  );
                }
              )
            ) : (
              <Stack direction={"row"} justifyContent={"center"}>
                <Typography>{"<No items in cart>"}</Typography>
              </Stack>
            )}
          </Stack>

          {/* Order Summary */}
          <Stack
            direction={"column"}
            width={{ xs: "100%", md: "50%" }}
            spacing={3}
          >
            <Typography variant="h4">Order Summary</Typography>

            <Divider orientation="horizontal" flexItem />

            {guitars.map(
              (guitar: {
                id: number;
                model: string;
                brand: string;
                description: string;
                coverURL: string;
                price: number;
                colorOptions: string[];
                pictures: string[];
                bodyColor: string;
                amount: number;
              }) => {
                return (
                  <Stack key={guitar.id} direction={"column"}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Stack direction={"column"} sx={{ width: "70%" }}>
                        <Typography>{guitar.model}</Typography>
                        <Typography>{guitar.bodyColor}</Typography>
                      </Stack>
                      <Typography
                        sx={{
                          width: "30%",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        {`${Number(guitar.price * guitar.amount).toFixed(
                          2
                        )} USD`}
                      </Typography>
                    </Stack>
                  </Stack>
                );
              }
            )}

            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="h5" sx={{ width: "60%" }}>
                Total:{" "}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >{`${total} USD`}</Typography>
            </Stack>

            <Link to={"/checkout"} style={{ textDecoration: "none" }}>
              <Button fullWidth variant="contained">
                Process to CheckOut
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
