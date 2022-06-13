import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Image } from "../../../HOC";

const array = [];

export default function ExchangePointsHome({ data }) {
  return (
    <Grid
      container
      sx={{ backgroundColor: "gray", width: "80vw", margin: "0 auto" }}
    >
      <Grid item xs={4}>
        <Box>
          <Image
            layout="fill"
            objectFit="cover"
            height="100%"
            src="/img/avt-05 1 1 (1).png"
            WrapperProps={{
              sx: {
                width: "100%",
                height: "100%",
              },
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box>xs=4</Box>
      </Grid>
      <Grid item xs={4}>
        <Box>xs=4</Box>
      </Grid>
    </Grid>
  );
}
