import { Box } from "@mui/material";
import React from "react";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";

export default function BannerTop(innitData) {
  const data = innitData;
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  return (
    <Box sx={[{ height: "28.8rem" }, isSmDown && { height: "14.4rem" }]}>
      <Image
        {...{
          src: data ? innitData?.data : "/img/Rectangle 5.jpg",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
