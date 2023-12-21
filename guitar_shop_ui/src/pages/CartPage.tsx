import { useState } from "react";

// MUI
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

// Icon
import CloseIcon from "@mui/icons-material/Close";

export const CartPage = () => {
  const [value, setValue] = useState(1);

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
          <Stack
            direction={"column"}
            divider={<Divider orientation="horizontal" flexItem />}
            width={"100%"}
            spacing={3}
          >
            <Typography variant="h4">Shopping Cart</Typography>
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
              <Box>
                <TextField
                  size="small"
                  id="amount"
                  label="amount"
                  type="number"
                  value={value}
                  InputProps={{
                    inputProps: { min: 1 },
                  }}
                  onChange={(e) => {
                    setValue(Number(e.target.value));
                  }}
                />
              </Box>
              <Typography>$899.00 USD</Typography>
              <Box sx={{ maxHeight: "10" }}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Stack>
            <Stack direction={"row"}>
              <Button>Coupon Code?</Button>
              <Button>Special Request?</Button>
            </Stack>
          </Stack>

          <Stack
            direction={"column"}
            divider={<Divider orientation="horizontal" flexItem />}
            width={{ xs: "100%", md: "50%" }}
            spacing={3}
          >
            <Typography variant="h4">Order Summary</Typography>
            <Stack direction={"column"}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>Breakdown: fender</Typography>
                <Typography>$899.00 USD</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Totla: </Typography>
              <Typography>$899.00 USD</Typography>
            </Stack>
            <Button href="/checkout" fullWidth variant="contained">
              Check Out
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
