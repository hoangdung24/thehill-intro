import { Box, Grid, Stack, useTheme } from "@mui/material";
import React from "react";
import CardBrand from "../../../components/Card/CardBrand";
import LineTitle from "../../../components/LineTitle/LineTitle";

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
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
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
            marginBottom: "3.5rem",
            paddingBottom: "3.5rem",
            height: "100%",
          }}
        >
          {renderCardBrand()}
        </Grid>
      </Box>
    </Box>
  );
}
