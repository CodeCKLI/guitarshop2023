import { useState } from "react";

// MUI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import DeleteIcon from "@mui/icons-material/Delete";

// React Router
import { Link } from "react-router-dom";

export const WishListCard = ({ guitar, setGuitarsWish }: any) => {
  const [open, setOpen] = useState(false);

  const [dialogText] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveWish = () => {
    const result = localStorage.getItem("wishItems");

    if (result != null) {
      const wishItemsArr = JSON.parse(result);

      const removedList = wishItemsArr.filter(
        (item: any) => item.id !== guitar.id
      );
      console.log(removedList);

      localStorage.setItem("wishItems", JSON.stringify(removedList));

      setGuitarsWish(removedList);
    }
  };

  return (
    <div>
      <Box padding={2}>
        <Card elevation={4}>
          <CardHeader
            action={
              <Box>
                <IconButton onClick={handleRemoveWish}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            }
            title={guitar.brand}
            subheader={guitar.model}
          ></CardHeader>

          <CardMedia
            sx={{ height: "300px", paddingX: 2 }}
            component={"img"}
            image={guitar.coverURL}
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
