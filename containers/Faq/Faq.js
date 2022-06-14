import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";
import { Image } from "../../HOC";

const valuelineTitle = {
  title: "FAQ",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

const cardFAQ = [
  {
    title: "Danh Mục Câu Hỏi 1",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 2",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 3",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 4",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 5",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 6",
    img: "/img/Rectangle 5.jpg",
  },
];

export default function FAQ() {
  const renderCardFAQ = () => {
    return cardFAQ.map((item, index) => {
      return (
        <Grid item xs={4}>
          <Box
            sx={{
              borderRadius: "8px",
              position: "relative",
              height: "16rem",
              border: "4px solid rgba(177, 181, 195, 1)",
              "& img": {
                borderRadius: "5px",
              },
            }}
          >
            <Image
              {...{
                src: item.img,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="hairline1"
              sx={{ position: "absolute", top: "24px", left: "24px" }}
            >
              {item.title}
            </Typography>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ marginBottom: "7.8rem" }}>
      <BannerTop />
      <Box sx={{ width: "80vw", margin: "0 auto" }}>
        <LineTitle data={valuelineTitle} type="center" />
        <Grid container spacing={7} sx={{ marginTop: "2rem" }}>
          {renderCardFAQ()}
        </Grid>
      </Box>
    </Box>
  );
}
