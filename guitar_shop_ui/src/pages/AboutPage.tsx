import React from "react";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import codeing from "../assets/coding.svg";

export const AboutPage = () => {
  return (
    <div>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        pt={10}
        px={{ xs: 5, md: 0 }}
      >
        <Box component="img" src={codeing} sx={{ maxHeight: 300 }}></Box>
        <Stack direction={"column"} width={{ xs: "100%", md: "50%" }}>
          <Typography variant="h4">E-Commerce WebSite</Typography>
          <Typography variant="h6">
            Stack: React | Spring Boot | PostgreSQL | Docker |
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eaque asperiores, maxime rerum distinctio accusantium quas esse at?
            Pariatur rem laborum libero laboriosam repellat earum, quis alias,
            magnam nesciunt dolore facere dicta fugiat. Laborum facere labore
            aliquam nostrum maxime explicabo possimus fuga veritatis qui natus,
            unde veniam itaque! Quas pariatur fugiat consectetur, dolorum
            accusantium esse. Quas debitis magnam beatae, ut reiciendis rem
            dolor hic ratione! Tempora quia et fuga earum quo accusantium aut
            obcaecati ipsum odit corrupti voluptatem minus, debitis
            reprehenderit aliquid incidunt repellat perferendis veniam hic,
            consequatur neque explicabo odio aliquam distinctio. Culpa fugiat
            sunt, ab omnis quo ea.
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};
