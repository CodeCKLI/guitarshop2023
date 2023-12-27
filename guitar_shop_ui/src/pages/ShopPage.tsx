import { useState, useEffect } from "react";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

// Components
import { ItemCard } from "../components/ItemCard";
import { DropDownMenu } from "../components/DropDownMenu";
import { LoadingCard } from "../components/loadingCard";

import { findAllGuitars } from "../helpers/DBHelpers";
import { text } from "stream/consumers";

export const ShopPage = () => {
  const [guitars, setGuitars] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isSort, setIsSort] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleSortChaneg = async (
    sortByWhat: string,
    sortWhatOrder: string
  ) => {
    console.log(sortByWhat, sortWhatOrder);

    setPage(1);
    setIsSort(true);
    setSortBy(sortByWhat);
    setSortOrder(sortWhatOrder);

    setGuitars([]);

    getAllGuitars(1, true, sortByWhat, sortWhatOrder, isFilter, brand, price);
  };

  const getAllGuitars = async (
    page: number,
    isSort: boolean,
    sortBy: string,
    sortOrder: string,
    isFilter: boolean,
    brand: string,
    price: string
  ) => {
    const data = await findAllGuitars(
      page,
      isSort,
      sortBy,
      sortOrder,
      isFilter,
      brand,
      price
    );
    setPageCount(data.totalPages);
    setGuitars(data.content);
    setIsLoading(false);
  };

  const handleFilterClicked = () => {
    if (brand == "" && price == "") {
      setIsLoading(true);
      getAllGuitars(1, false, "", "", false, "", "");
      return;
    }

    setIsFilter(true);
    console.log(isSort, sortBy, sortOrder, brand, price);
    getAllGuitars(1, isSort, sortBy, sortOrder, true, brand, price);
  };

  useEffect(() => {
    getAllGuitars(1, false, "", "", false, "", "");
  }, []);

  return (
    <>
      {isLoading ? (
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
          {/* SideBar */}
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
                  <Stack
                    width={"100%"}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h4">Filter</Typography>
                    <Button
                      onClick={() => {
                        setBrand("");
                        setPrice("");
                      }}
                      variant="test"
                    >
                      Reset
                    </Button>
                  </Stack>
                </ListItem>

                <Divider />

                <ListItem>
                  <Stack direction={"column"}>
                    <FormControl>
                      <FormLabel id="brand_radio">
                        <Typography variant="h5">Brand</Typography>
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="brand_radio"
                        defaultValue=""
                        name="brand_radio"
                        value={brand}
                        onChange={handleBrandChange}
                      >
                        <FormControlLabel
                          value="Fender"
                          control={<Radio />}
                          label="Fender"
                        />
                        <FormControlLabel
                          value="Epiphone"
                          control={<Radio />}
                          label="Epiphone"
                        />
                        <FormControlLabel
                          value="Ibanez"
                          control={<Radio />}
                          label="Ibanez"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                </ListItem>
                <Divider />
                <ListItem>
                  <Stack direction={"column"}>
                    <FormControl>
                      <FormLabel id="price_radio">
                        <Typography variant="h5">Price</Typography>
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="price_radio"
                        defaultValue=""
                        name="price_radio"
                        value={price}
                        onChange={handlePriceChange}
                      >
                        <FormControlLabel
                          value="under500"
                          control={<Radio />}
                          label="< 500 USD"
                        />
                        <FormControlLabel
                          value="under1000"
                          control={<Radio />}
                          label="< 1000 USD"
                        />
                        <FormControlLabel
                          value="under9999"
                          control={<Radio />}
                          label="< 9999 USD"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                </ListItem>
                <Divider />
                <ListItem>
                  <Button
                    onClick={handleFilterClicked}
                    fullWidth
                    variant="contained"
                  >
                    Filter
                  </Button>
                </ListItem>
              </List>
            </Stack>
          </Grid>

          {/* Main Session*/}
          <Grid item xs={12} md={10}>
            <Stack direction={"column"}>
              {/* Sorting Dropdown */}
              <Stack
                justifyContent={{ xs: "space-between", md: "space-between" }}
                flexDirection={"row"}
                alignItems={"center"}
                py={5}
                px={3}
                sx={{ gap: "2rem" }}
              >
                <TextField
                  id="search"
                  label="Search"
                  type="search"
                  variant="outlined"
                  sx={{ width: "40%" }}
                />
                <Stack direction={"row"} spacing={3}>
                  <Button
                    onClick={() => {
                      setGuitars([]);
                      getAllGuitars(1, false, "", "", false, "", "");
                    }}
                    variant="contained"
                  >
                    Reset
                  </Button>
                  <DropDownMenu handleSortChaneg={handleSortChaneg} />
                </Stack>
              </Stack>

              {/* Item Grid */}
              <Grid container justifyContent={"center"}>
                {guitars.length == 0 ? (
                  <Stack py={5}>
                    <Typography variant="h6">No guitar is found</Typography>
                  </Stack>
                ) : (
                  guitars.map((guitar) => {
                    return (
                      <Grid item key={guitar.id} xs={12} md={6} lg={4}>
                        <ItemCard guitar={guitar}></ItemCard>
                      </Grid>
                    );
                  })
                )}
              </Grid>

              {/* Paging */}
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(
                    event: React.ChangeEvent<unknown>,
                    value: number
                  ) => {
                    setPage(value);
                    getAllGuitars(
                      value,
                      isSort,
                      sortBy,
                      sortOrder,
                      isFilter,
                      brand,
                      price
                    );
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
