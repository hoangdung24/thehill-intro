import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Image } from "../../../HOC";

export default function HomeBanner() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "90vh",
        backgroundColor: theme.palette.common.natural3,
      }}
    >
      <Image
        {...{
          src: "/img/Rectangle 5.jpg",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Stack
        direction="row"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "100%",
          width: "80vw",
          padding: "3rem",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography>TIÊU XÀI THỎA THÍCH</Typography>
          <Typography>TIÊU XÀI THỎA THÍCH</Typography>
          <Typography>TIÊU XÀI THỎA THÍCH</Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Image
            {...{
              src: "/img/Vector.png",
              width: "90%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
