import { useState, useContext } from "react";

import { CartItemContext } from "../pages/MainPage";

// MUI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// React Router
import { Link } from "react-router-dom";

// Helper
import { saveObj, saveLocalObj } from "../helpers/SessionHelpers";

type guitarType = {
  id: number;
  brand: string;
  description: string;
  price: number;
  model: string;
  cover_URL: string;
  bodyColor: string;
};

export const ItemCard = ({ guitar }: { guitar: guitarType }) => {
  const [open, setOpen] = useState(false);

  const [dialogText, setDialogText] = useState("");

  const { updateCartNumber }: { updateCartNumber: any } =
    useContext(CartItemContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBagBTN = () => {
    const CartItem = {
      id: guitar?.id,
      model: guitar?.model,
      bodyColor: guitar?.bodyColor,
      amount: 1,
      price: guitar?.price,
      coverURL: guitar?.cover_URL,
      brand: guitar?.brand,
    };
    saveObj("cartItems", CartItem);

    setDialogText("Cart");

    updateCartNumber();

    setOpen(true);
  };

  const handleAddWish = () => {
    const wishItem = {
      id: guitar?.id,
      model: guitar?.model,
      bodyColor: guitar?.bodyColor,
      price: guitar?.price,
      coverURL: guitar?.cover_URL,
      brand: guitar?.brand,
    };

    console.log(wishItem);

    saveLocalObj("wishItems", wishItem);

    setDialogText("Wish List");

    setOpen(true);
  };

  return (
    <div>
      <Box padding={2}>
        <Card elevation={4}>
          <CardHeader
            action={
              <Box>
                <IconButton onClick={handleAddWish}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton onClick={handleAddBagBTN}>
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            }
            title={guitar.brand}
            subheader={guitar.model}
          ></CardHeader>

          <CardMedia
            sx={{ height: "300px", paddingX: 2 }}
            component={"img"}
            image={guitar.cover_URL}
          ></CardMedia>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {guitar.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {guitar.price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {guitar.bodyColor}
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              to="/details"
              style={{ width: "100%" }}
              state={{ guitarId: guitar.id }}
            >
              <Button fullWidth variant="contained">
                Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Item has been added to {dialogText}
          </DialogContentText>
        </DialogContent>
        <Stack direction={"row"} justifyContent={"center"}>
          <Button fullWidth onClick={handleClose}>
            Ok
          </Button>
        </Stack>
      </Dialog>
    </div>
  );
};
