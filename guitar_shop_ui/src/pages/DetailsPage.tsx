import { useState } from "react";

// MUI
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const DetailPage = () => {
  const [color, setColor] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
    console.log(event.target.value);
  };

  return (
    <>
      <Container>
        <Grid paddingY={5} container>
          <Grid item xs={12} md={6}>
            <Box px={10}>
              <Carousel autoPlay={false} navButtonsAlwaysVisible>
                <Stack
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
                    alt="The house from the offer."
                    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/413uPcI9fEL._AC_SX679_.jpg"
                  />
                </Stack>
                <Stack
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
                    alt="The house from the offer."
                    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51yOoOyshsL._AC_SL1000_.jpg"
                  />
                </Stack>
                <Stack
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
                    alt="The house from the offer."
                    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51knuSIB58L._AC_SL1000_.jpg"
                  />
                </Stack>
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              p={5}
              sx={{ backgroundColor: "#f3f3f3" }}
              direction={"column"}
              // alignItems={"center"}
              spacing={3}
            >
              <Typography variant="h4">Fender Stratocaster </Typography>
              <Typography variant="h6">GPta78BRRED </Typography>
              <Typography variant="h6">899.00 </Typography>

              <FormControl>
                <InputLabel id="color">Color</InputLabel>
                <Select
                  labelId="color"
                  id="color"
                  value={color}
                  label="Color"
                  onChange={handleChange}
                >
                  <MenuItem value={"red"}>Red</MenuItem>
                  <MenuItem value={"blue"}>Blue</MenuItem>
                  <MenuItem value={"green"}>Green</MenuItem>
                  <MenuItem value={"black"}>Black</MenuItem>
                </Select>
              </FormControl>

              <Button href="/cart" variant="contained" fullWidth>
                Add to Bag
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
