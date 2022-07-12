import { Box, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import Link from "../Link";
import useMedia from "../../hooks/useMedia";
import { useWindowScroll } from "react-use";

export default function BackToTop() {
  const { y } = useWindowScroll();
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  useEffect(() => {
    if (y > 880) {
      return;
    }
    if (y < 50) {
      return;
    }
  }, [y]);
  // console.log(y);

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
            transform: "translateY(-600px)",
          }}
        />
      </Link>
    </Box>
  );
}
