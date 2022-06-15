import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import React from "react";
import CardBrand from "../../../components/Card/CardBrand";
import LineTitle from "../../../components/LineTitle/LineTitle";
import Link from "../../../components/Link";

const arrayHomeNews = [
  {
    img: "/logoBrand/image 8-1.png",
    title: "Điểm Tích Lũy: 15",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    img: "/logoBrand/image 8-2.png",
    title: "Điểm Tích Lũy: 15",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    img: "/logoBrand/image 8-3.png",
    title: "Điểm Tích Lũy: 15",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    img: "/logoBrand/image 8.png",
    title: "Điểm Tích Lũy: 15",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];
const valuelineTitle = {
  title: "Vé Đổi Điểm",
};

export default function HomeBrand() {
  const theme = useTheme();
  const renderCardBrand = () => {
    return arrayHomeNews.map((item, index) => {
      return (
        <Grid item key={index} xs={3}>
          <CardBrand data={item} />
        </Grid>
      );
    });
  };
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.natural3,
        marginBottom: "5.5rem",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          margin: "0 auto",
        }}
      >
        <LineTitle data={valuelineTitle} type="left" />
        <Grid
          container
          columnSpacing={10}
          sx={{
            paddingTop: "2rem",
            height: "100%",
          }}
        >
          {renderCardBrand()}
        </Grid>
      </Box>
      <Link href="/tin-tuc">
        <Button sx={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
          XEM THÊM
        </Button>
      </Link>
    </Box>
  );
}
