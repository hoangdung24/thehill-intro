import { Box } from "@mui/material";
import React from "react";
import { Image } from "../../HOC";

export default function BannerTop() {
  return (
    <Box sx={{ height: "28.8rem" }}>
      <Image
        {...{
          src: "/img/Rectangle 5.jpg",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
