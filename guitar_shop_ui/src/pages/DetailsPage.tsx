import { useState, useEffect, useContext } from "react";

import { CartItemContext } from "./MainPage";

// MUI
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { findGuitarByID, findGuitarByModel } from "../helpers/DBHelpers";

// React router
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Helper
import { saveObj } from "../helpers/SessionHelpers";

type guitarProp = {
  id: number;
  model: string;
  brand: string;
  description: string;
  cover_URL: string;
  price: number;
  colorOptions: string[];
  pictures: string[];
  bodyColor: string;
};

export const DetailPage = () => {
  const [guitar_ID, setGuitar_ID] = useState(0);
  const [guitarData, setGuitarData] = useState<guitarProp>();
  const [guitarPictures, setGuitarPictures] = useState([]);
  const [diffColor, setDiffColor] = useState([]);

  const [open, setOpen] = useState(false);

  const { updateCartNumber }: { updateCartNumber: any } =
    useContext(CartItemContext);

  const handleClose = () => {
    setOpen(false);
  };

  // Navigate
  const navigate = useNavigate();

  const location = useLocation();

  const handleRetrieveData = async () => {
    if (location.state) {
      const { guitarId } = location.state;
      setGuitar_ID(guitarId);

      console.log(`guitarId: ${guitarId}`);

      const data = await findGuitarByID(guitarId);
      setGuitarData(data);
      setGuitarPictures(data.pictures);

      const results = await findGuitarByModel(data.model);

      const list = results.map(
        ({ id, bodyColor }: { id: number; bodyColor: string }) => {
          return {
            id: id,
            bodyColor: bodyColor,
          };
        }
      );

      setDiffColor(list);
    }
  };

  const handleReload = async (guitarID: number) => {
    const data = await findGuitarByID(guitarID);
    setGuitarData(data);
    setGuitarPictures(data.pictures);

    const results = await findGuitarByModel(data.model);

    const list = results.map(
      ({ id, bodyColor }: { id: number; bodyColor: string }) => {
        return {
          id: id,
          bodyColor: bodyColor,
        };
      }
    );

    setDiffColor(list);
  };

  const handleAddBagBTN = () => {
    const CartItem = {
      id: guitarData?.id,
      model: guitarData?.model,
      color: guitarData?.bodyColor,
      amount: 1,
      price: guitarData?.price,
      coverURL: guitarData?.cover_URL,
    };

    saveObj("cartItems", CartItem);

    updateCartNumber();

    setOpen(true);
  };

  useEffect(() => {
    handleRetrieveData();
  }, []);

  useEffect(() => {
    if (guitar_ID != 0) {
      handleReload(guitar_ID);
    }
  }, [guitar_ID]);

  return (
    <>
      <Container>
        {guitar_ID != 0 ? (
          <Grid paddingY={5} container>
            {/* Carousel */}
            <Grid item xs={12} md={6}>
              <Box px={10}>
                <Carousel autoPlay={false} navButtonsAlwaysVisible>
                  {guitarPictures.map((picture) => {
                    return (
                      <Stack
                        key={picture}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          onClick={(e) => {
                            console.log(e.target);
                          }}
                          component="img"
                          sx={{
                            maxHeight: 300,
                          }}
                          src={picture}
                        />
                      </Stack>
                    );
                  })}
                </Carousel>
              </Box>
            </Grid>

            {/* Dialog */}
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Item has been added to cart
                </DialogContentText>
              </DialogContent>
              <Stack direction={"row"} justifyContent={"center"}>
                <Button fullWidth onClick={handleClose}>
                  Ok
                </Button>
              </Stack>
            </Dialog>

            {/* Order form */}
            <Grid item xs={12} md={6}>
              <Stack
                p={5}
                sx={{ backgroundColor: "#f3f3f3" }}
                direction={"column"}
                spacing={3}
              >
                <Typography variant="h4">{guitarData?.model} </Typography>
                <Typography variant="h6">
                  Brand: {guitarData?.brand}{" "}
                </Typography>
                <Typography variant="h6">
                  Body Color: {guitarData?.bodyColor}{" "}
                </Typography>
                <Typography variant="h6">${guitarData?.price} USD </Typography>

                <Stack direction={"row"} spacing={3}>
                  {diffColor.map((item: { id: number; bodyColor: string }) => {
                    return (
                      <Button
                        key={item.id}
                        onClick={() => {
                          setGuitar_ID(item.id);
                          console.log(`Item Id: ${item.id}`);
                        }}
                        // href="/details"
                        variant="outlined"
                      >
                        {item.bodyColor}
                      </Button>
                    );
                  })}
                </Stack>

                <Button onClick={handleAddBagBTN} variant="contained" fullWidth>
                  Add to Bag
                </Button>

                <Button variant="contained" href="/shop">
                  Back to shop
                </Button>
              </Stack>
            </Grid>
          </Grid>
        ) : (
          // No item found
          <Stack
            height={"70vh"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h2">Item Not Found</Typography>

            <Button variant="contained" href="/shop">
              Back to shop
            </Button>
          </Stack>
        )}
      </Container>
    </>
  );
};
