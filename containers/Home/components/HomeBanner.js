import { Box, Stack, Typography, useTheme, styled } from "@mui/material";
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
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ height: "20%" }}>
            <Typography variant="hairline1">TIÊU XÀI THỎA THÍCH</Typography>
            <Content>
              <Typography variant="hairline2">
                Tích bao nhiêu điểm Đổi bấy nhiêu tiền
              </Typography>
            </Content>

            <Typography variant="body2_bold">
              Ăn uống và mua sắm thả ga cùng với ứng dụng ĐỔI ĐIỂM
            </Typography>
          </Box>

          <Stack direction="row" spacing={3} sx={{ height: "30%" }}>
            <Image
              {...{
                src: "/img/image 3.png",
                width: "30%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <Image
              {...{
                src: "/img/image 4 (1).png",
                width: "30%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Stack>
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
