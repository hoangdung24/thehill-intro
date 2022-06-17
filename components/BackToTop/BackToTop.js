import { Box, useTheme } from "@mui/material";
import React from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import Link from "../Link";
import useMedia from "../../hooks/useMedia";

export default function BackToTop() {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "10%",
        right: isSmDown ? "5%" : "2%",
        zIndex: 12,
      }}
    >
      <Link href="#Home">
        <ArrowUpwardRoundedIcon
          sx={{
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "5px",
            padding: "5px",
            color: "white",
            fontSize: isSmDown ? "35px" : "40px",
          }}
        />
      </Link>
    </Box>
  );
}
