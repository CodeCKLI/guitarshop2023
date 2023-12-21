import { useState } from "react";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const CheckOutPage = () => {
  const [value, setValue] = useState(1);

  return (
    <div>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"column"}
            divider={<Divider orientation="horizontal" flexItem />}
            width={{ xs: "100%", md: "55%" }}
            py={3}
          >
            <Stack py={4} direction={"column"} spacing={2}>
              <Typography variant="h4">Customer Info</Typography>
              <TextField
                required
                size="small"
                id="email"
                label="Eamil Address"
              />
              <TextField
                required
                size="small"
                id="first_name"
                label="First Name"
              />
              <TextField
                required
                size="small"
                id="last_name"
                label="Last Name"
              />
              <TextField
                required
                size="small"
                id="phone"
                label="Phone Number"
                helperText="We will not sale you any product :)"
              />
              <Typography variant="h5">Shipping Address</Typography>
              <TextField required size="small" id="country" label="County" />
              <TextField
                required
                size="small"
                id="address"
                label="Phyical Address"
              />
              <TextField required size="small" id="city" label="City" />
              <TextField
                required
                size="small"
                type="number"
                id="postal"
                label="Postal Code"
              />
              <Button variant="contained" fullWidth>
                Continue{" "}
              </Button>
            </Stack>
            <Stack direction={"column"}>
              <h1>Shipping Method</h1>{" "}
            </Stack>
            <Stack direction={"column"}>
              <h1>Payment</h1>
            </Stack>
            <Stack direction={"column"}>
              <h1>Confirm</h1>
            </Stack>
          </Stack>

          <Stack
            divider={<Divider orientation="horizontal" flexItem />}
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

            <Stack
              direction={"column"}
              divider={<Divider orientation="horizontal" flexItem />}
              width={"100%"}
              spacing={3}
            >
              <Stack
                width={"90%"}
                direction={"row"}
                justifyContent={"space-between"}
                alignSelf={"center"}
              >
                <Box
                  onClick={(e) => {
                    console.log(e.target);
                  }}
                  component="img"
                  sx={{ maxHeight: 120 }}
                  src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/413uPcI9fEL._AC_SX679_.jpg"
                />
                <Stack direction={"column"}>
                  <Typography variant="h5">Fender Stract</Typography>
                  <Typography>G387FX2F0</Typography>
                  <Typography>Black</Typography>
                  <Typography color={"gray"}>No add-ons</Typography>
                </Stack>
                <Stack direction={"column"}>
                  <Typography>Amount: </Typography>
                  <Typography>1</Typography>
                </Stack>
                <Typography>$899.00 USD</Typography>
              </Stack>
              <Stack direction={"row"}>
                <Button>Coupon Code?</Button>
                <Button>Special Request?</Button>
              </Stack>
            </Stack>

            <Stack direction={"column"} spacing={1}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Totla: </Typography>
                <Typography>$899.00 USD</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Shipping: </Typography>
                <Typography>$5.00 USD</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Tax: </Typography>
                <Typography>$5.00 USD</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="h5">Total: </Typography>
                <Typography variant="h5">$909.00 USD</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
