import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { ReaderHTML } from "../../../components";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

export default function HomeBanner({ data }) {
  const { banner, subtitle } = data;
  const { isSmDown, isMdDown } = useMedia();
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
          src: banner,
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
          height: isSmDown ? "auto" : "100%",
          width: "80vw",
          padding: isSmDown ? 0 : "3rem",
          [theme.breakpoints.down("md")]: {
            width: "90vw",
          },
          [theme.breakpoints.down("sm")]: {
            width: "80vw",
            display: "block",
            top: "50%",
            transform: "translateY(-50%) translateX(-50%)",
          },
        }}
      >
        <Box
          sx={{
            width: isMdDown ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            className="textBanner"
            sx={{
              "& span:after": {
                display: "none !important",
                backgroundColor: "red",
              },
              [theme.breakpoints.down("sm")]: {
                "& h2": {
                  fontSize: theme.typography.hairline1,
                },
                "& h1": {
                  fontSize: theme.typography.h5,
                },
                "& p": {
                  fontSize: theme.typography.body2_bold,
                },
              },
            }}
          >
            <ReaderHTML content={subtitle} />
          </Box>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              height: isSmDown ? "calc(8vw * 1.72)" : "calc(4vw * 1.72)",
              [theme.breakpoints.down("md")]: {
                width: "70%",
                "& .MuiBox-root": {
                  width: "50%",
                },
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                "& .MuiBox-root": {
                  width: "50%",
                },
              },
            }}
          >
            <Image
              {...{
                src: "/img/image 3.png",
                width: isSmDown ? "50%" : "30%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <Image
              {...{
                src: "/img/image 4 (1).png",
                width: isSmDown ? "50%" : "30%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Stack>
        </Box>

        {/* //phone 3d */}
        <Box
          sx={{
            width: isSmDown ? "100%" : "50%",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
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
