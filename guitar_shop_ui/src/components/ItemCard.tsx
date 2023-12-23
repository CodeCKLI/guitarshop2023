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
  guitar_brand: string;
  guitar_description: string;
  guitar_price: number;
  guitar_model: string;
  guitar_cover_URL: string;
};

export const ItemCard = ({ guitar }: { guitar: guitarType }) => {
  return (
    <div>
      <Box
        padding={2}
        marginBottom={10}
        sx={{
          maxHeight: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Card sx={{ padding: 1 }} elevation={4}>
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
            title={guitar.guitar_brand}
            subheader={guitar.guitar_model}
          ></CardHeader>

          <CardMedia
            component={"img"}
            image={guitar.guitar_cover_URL}
          ></CardMedia>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {guitar.guitar_description}
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
