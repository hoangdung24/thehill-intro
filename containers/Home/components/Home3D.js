import { Box } from "@mui/material";
import React from "react";
import { Image } from "../../../HOC";

export default function Home3D() {
  return (
    <Box sx={{ height: "70vh", marginTop: "2.5rem" }}>
      <Image
        {...{
          src: "/img/Vector.png",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
