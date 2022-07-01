import { Box, Stack, Typography, useTheme, styled } from "@mui/material";
import React from "react";
import { ReaderHTML } from "../../../components";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

export default function HomeBanner({ data }) {
  const { banner, subtitle } = data;
  const { isSmDown } = useMedia();
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
          [theme.breakpoints.down("sm")]: {
            display: "block",
            top: "50%",
            transform: "translateY(-50%) translateX(-50%)",
          },
        }}
      >
        <Box
          sx={{
            width: isSmDown ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{}}>
            <ReaderHTML content={subtitle} />
            {/* <Typography variant="hairline1">TIÊU XÀI THỎA THÍCH</Typography>
            <Content>
              <Typography variant="hairline2">
                Tích bao nhiêu điểm Đổi bấy nhiêu tiền
              </Typography>
            </Content>

            <Typography variant="body2_bold">
              Ăn uống và mua sắm thả ga cùng với ứng dụng ĐỔI ĐIỂM
            </Typography> */}
          </Box>

          <Stack
            direction="row"
            spacing={3}
            sx={{ height: isSmDown ? "10vh" : "30%" }}
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
            [theme.breakpoints.down("sm")]: {
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

const Content = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.neutral2,
    marginBottom: 10,

    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.neutral2,
      marginBottom: 1,
    },
  };
});
