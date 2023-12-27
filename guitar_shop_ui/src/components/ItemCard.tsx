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

type guitarType = {
  id: number;
  brand: string;
  description: string;
  price: number;
  model: string;
  cover_URL: string;
};

export const ItemCard = ({ guitar }: { guitar: guitarType }) => {
  return (
    <div>
      <Box padding={5} marginBottom={10}>
        <Card sx={{ padding: 2 }} elevation={4}>
          <CardHeader
            action={
              <Box>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
                <IconButton>
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            }
            title={guitar.brand}
            subheader={guitar.model}
          ></CardHeader>

          <CardMedia component={"img"} image={guitar.cover_URL}></CardMedia>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {guitar.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {guitar.price}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Button href="/details" fullWidth variant="contained">
              Details
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};
