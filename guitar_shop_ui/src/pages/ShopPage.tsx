import { useState } from "react";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

// Components
import { ItemCard } from "../components/ItemCard";

// Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[50]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
);

export const ShopPage = () => {
  const [page, setPage] = useState(1);

  const guitars = [
    {
      id: 1,
      guitar_brand: "Jackson",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 3883,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "41M193J1",
    },
    {
      id: 2,
      guitar_brand: "Gibson",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 232,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "3C9H40CW",
    },
    {
      id: 3,
      guitar_brand: "Fender",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 3786,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "PNEVK3BF",
    },
    {
      id: 4,
      guitar_brand: "Taylor",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 4103,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "BB5385H4",
    },
    {
      id: 5,
      guitar_brand: "Fender",
      guitar_description: "Beautifully crafted acoustic guitar with rich tone",
      guitar_price: 4450,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "5E0YA0V0",
    },
    {
      id: 6,
      guitar_brand: "Ibanez",
      guitar_description:
        "High-end professional guitar with exceptional playability",
      guitar_price: 980,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "JSUD9T5L",
    },
    {
      id: 7,
      guitar_brand: "Epiphone",
      guitar_description: "Beautifully crafted acoustic guitar with rich tone",
      guitar_price: 661,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "9P56MNSD",
    },
    {
      id: 8,
      guitar_brand: "Fender",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 2999,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "GHMMI0Z1",
    },
    {
      id: 9,
      guitar_brand: "Schecter",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 1854,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "6MONOX93",
    },
    {
      id: 10,
      guitar_brand: "Martin",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 4476,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "4OA1A68Q",
    },
    {
      id: 11,
      guitar_brand: "Schecter",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 1199,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "66TW4466",
    },
    {
      id: 12,
      guitar_brand: "Schecter",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 3077,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "E1TL50H8",
    },
    {
      id: 13,
      guitar_brand: "Taylor",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 130,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "A25350VN",
    },
    {
      id: 14,
      guitar_brand: "Epiphone",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 3564,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "CA57R5EP",
    },
    {
      id: 15,
      guitar_brand: "Epiphone",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 3450,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "76Y3TZL5",
    },
    {
      id: 16,
      guitar_brand: "Taylor",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 4663,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "O8PBJD35",
    },
    {
      id: 17,
      guitar_brand: "Martin",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 4344,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "FRCNI550",
    },
    {
      id: 18,
      guitar_brand: "Martin",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 3700,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "Y4D85G94",
    },
    {
      id: 19,
      guitar_brand: "Schecter",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 3780,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "943T510H",
    },
    {
      id: 20,
      guitar_brand: "Taylor",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 106,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "O7F6012Z",
    },
    {
      id: 21,
      guitar_brand: "Ibanez",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 1416,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "D0IH35Y2",
    },
    {
      id: 22,
      guitar_brand: "Ibanez",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 3351,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "DA0120YZ",
    },
    {
      id: 23,
      guitar_brand: "PRS",
      guitar_description:
        "High-end professional guitar with exceptional playability",
      guitar_price: 796,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "W2D71MUJ",
    },
    {
      id: 24,
      guitar_brand: "Epiphone",
      guitar_description:
        "High-end professional guitar with exceptional playability",
      guitar_price: 831,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "29784Z60",
    },
    {
      id: 25,
      guitar_brand: "Gibson",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 4244,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "58TE8W9G",
    },
    {
      id: 26,
      guitar_brand: "Taylor",
      guitar_description:
        "High-end professional guitar with exceptional playability",
      guitar_price: 962,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "FU20Q809",
    },
    {
      id: 27,
      guitar_brand: "PRS",
      guitar_description: "Beautifully crafted acoustic guitar with rich tone",
      guitar_price: 1141,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "4LD6MBI6",
    },
    {
      id: 28,
      guitar_brand: "Jackson",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 1142,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "E1602M31",
    },
    {
      id: 29,
      guitar_brand: "PRS",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 4620,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "8U6LDV03",
    },
    {
      id: 30,
      guitar_brand: "Jackson",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 3029,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "9AUGM30Z",
    },
    {
      id: 31,
      guitar_brand: "Gretsch",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 4291,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "1E0QU680",
    },
    {
      id: 32,
      guitar_brand: "Martin",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 3071,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "QI2S8584",
    },
    {
      id: 33,
      guitar_brand: "Epiphone",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 3911,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "Z8L0OH9V",
    },
    {
      id: 34,
      guitar_brand: "Gibson",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 2295,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "W8B490BE",
    },
    {
      id: 35,
      guitar_brand: "Epiphone",
      guitar_description:
        "High-end professional guitar with exceptional playability",
      guitar_price: 4370,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "LUE81H97",
    },
    {
      id: 36,
      guitar_brand: "Epiphone",
      guitar_description:
        "High-end professional guitar with exceptional playability",
      guitar_price: 138,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "5A7A3KC5",
    },
    {
      id: 37,
      guitar_brand: "PRS",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 4529,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "719DJ743",
    },
    {
      id: 38,
      guitar_brand: "Gibson",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 1604,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "59K531R3",
    },
    {
      id: 39,
      guitar_brand: "Jackson",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 2096,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "88Z19U82",
    },
    {
      id: 40,
      guitar_brand: "Schecter",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 2757,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "WRT87PNO",
    },
    {
      id: 41,
      guitar_brand: "Gibson",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 744,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "O3122SGX",
    },
    {
      id: 42,
      guitar_brand: "Martin",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 457,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "1A5D0083",
    },
    {
      id: 43,
      guitar_brand: "PRS",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 3226,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "164BXC51",
    },
    {
      id: 44,
      guitar_brand: "Schecter",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 3137,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "7E95K51N",
    },
    {
      id: 45,
      guitar_brand: "Epiphone",
      guitar_description: "Unique and eye-catching guitar with stunning design",
      guitar_price: 1130,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "E7KP34DO",
    },
    {
      id: 46,
      guitar_brand: "Gretsch",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 2727,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "S83AVGE0",
    },
    {
      id: 47,
      guitar_brand: "Martin",
      guitar_description: "Sleek electric guitar with versatile sound",
      guitar_price: 2208,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "AFSLM6OA",
    },
    {
      id: 48,
      guitar_brand: "Fender",
      guitar_description: "Beautifully crafted acoustic guitar with rich tone",
      guitar_price: 152,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "V3R4K8GP",
    },
    {
      id: 49,
      guitar_brand: "Gibson",
      guitar_description:
        "High-end professional guitar with exceptional playability",
      guitar_price: 3138,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "ABZTW0DY",
    },
    {
      id: 50,
      guitar_brand: "Epiphone",
      guitar_description: "Vintage-style guitar with warm and resonant tones",
      guitar_price: 3722,
      guitar_picture:
        "https://www.andysmusic.com/cdn/shop/files/Gently-Used-Squier-Mini-Stratocaster-34-Size-Electric-Guitar-Black-Mint-Condition.jpg?v=1701747063",
      guitar_model: "OXUW7045",
    },
  ];

  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <>
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
                    <FormControlLabel control={<Checkbox />} label="Required" />
                    <FormControlLabel control={<Checkbox />} label="Disabled" />
                  </FormGroup>
                </Stack>
              </ListItem>
              <Divider />
              <ListItem>
                <Stack direction={"column"}>
                  <Typography variant="h5">Price</Typography>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Label" />
                    <FormControlLabel control={<Checkbox />} label="Required" />
                    <FormControlLabel control={<Checkbox />} label="Disabled" />
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
              justifyContent={"flex-end"}
              flexDirection={"row"}
              sx={{ width: "100" }}
              pt={4}
              pr={5}
            >
              <Dropdown>
                <MenuButton>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography>Sort by</Typography>
                    <ArrowDropDownIcon />
                  </Stack>
                </MenuButton>
                <Menu slots={{ listbox: Listbox }}>
                  <MenuItem onClick={createHandleMenuClick("relevant")}>
                    Most Relevant
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("recent")}>
                    Most Recent
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("price")}>
                    Sort by Price
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick("date")}>
                    Sort by Date
                  </MenuItem>
                </Menu>
              </Dropdown>
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
    </>
  );
};
