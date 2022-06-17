import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { PAGES, types } from "../../apis";
import { transformUrl, prefetchData } from "../../libs";

export default function DemoNha({ ...props }) {
  return (
    <Box
      sx={{
        width: "90%",
        marginLeft: "auto",
      }}
    >
      <Box
        className="box"
        sx={{
          maxHeight: "200px",
          display: "flex",
          overflowX: "auto",
          width: "100%",
        }}
      >
        <Box className="item" sx={{ minWidth: "30%", backgroundColor: "red" }}>
          b1
        </Box>
        <Box className="item" sx={{ minWidth: "30%", backgroundColor: "red" }}>
          b1
        </Box>
        <Box className="item" sx={{ minWidth: "30%", backgroundColor: "red" }}>
          b1
        </Box>
        <Box className="item" sx={{ minWidth: "30%", backgroundColor: "red" }}>
          b1
        </Box>
      </Box>
    </Box>
  );
}
