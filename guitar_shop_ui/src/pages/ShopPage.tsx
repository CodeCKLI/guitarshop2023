import { useState, useEffect } from "react";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

// Components
import { ItemCard } from "../components/ItemCard";
import { DropDownM } from "../components/DropDownM";
import { LoadingCard } from "../components/loadingCard";

// import CircularProgress from "@mui/material/CircularProgress";
// import Skeleton from "@mui/material/Skeleton";

import { getAllGuitars } from "../helpers/DBHelpers";

export const ShopPage = () => {
  const [page, setPage] = useState(1);
  const [guitars, setGuitars] = useState<any[]>([]);

  const setAllGuitars = async () => {
    setGuitars(await getAllGuitars());
  };

  useEffect(() => {
    setAllGuitars();
  }, [guitars]);

  return (
    <>
      {guitars.length == 0 ? (
        <Stack
          width={"100%"}
          direction={{ xs: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          py={10}
        >
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </Stack>
      ) : (
        <Grid container>
          <Grid item xs={12} md={2}>
            <Stack
              pt={4}
              sx={{
                display: { xs: "none", md: "flex" },
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "sticky",
                top: 0,
              }}
            >
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem>
                  <Typography variant="h4">Filter</Typography>
                </ListItem>

                <Divider />

                <ListItem>
                  <Stack direction={"column"}>
                    <Typography variant="h5">Brand</Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Label" />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Required"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Disabled"
                      />
                    </FormGroup>
                  </Stack>
                </ListItem>
                <Divider />
                <ListItem>
                  <Stack direction={"column"}>
                    <Typography variant="h5">Price</Typography>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Label" />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Required"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Disabled"
                      />
                    </FormGroup>
                  </Stack>
                </ListItem>
                <Divider />
                <ListItem>
                  <Button fullWidth variant="contained">
                    Filter
                  </Button>
                </ListItem>
              </List>
            </Stack>
          </Grid>
          <Grid item xs={12} md={10}>
            <Stack direction={"column"}>
              <Stack
                justifyContent={{ xs: "space-between", md: "space-between" }}
                flexDirection={"row"}
                alignItems={"center"}
                py={3}
                px={3}
                sx={{ gap: "2rem" }}
              >
                <TextField
                  id="search"
                  label="Search"
                  type="search"
                  variant="outlined"
                  sx={{ width: "70%" }}
                />
                <DropDownM />
              </Stack>

              <Grid container>
                {guitars.map((guitar) => {
                  return (
                    <Grid item key={guitar.id} xs={12} md={6} lg={4}>
                      <ItemCard guitar={guitar}></ItemCard>
                    </Grid>
                  );
                })}
              </Grid>

              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Pagination
                  count={10}
                  page={page}
                  onChange={(
                    event: React.ChangeEvent<unknown>,
                    value: number
                  ) => {
                    setPage(value);
                  }}
                  color="primary"
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      )}
    </>
  );
};
