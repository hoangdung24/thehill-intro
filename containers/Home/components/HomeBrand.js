import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import React from "react";
import CardBrand from "../../../components/Card/CardBrand";
import LineTitle from "../../../components/LineTitle/LineTitle";
import Link from "../../../components/Link";
import useMedia from "../../../hooks/useMedia";

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

const settings = {
  className: "center",
  centerPadding: "60px",
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeBrand({ data, brandHomeData }) {
  const { partner_title } = data;
  const { isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  const renderCardBrand = () => {
    return brandHomeData.map((item, index) => {
      if (isMdUp) {
        return (
          <Grid item key={index} xs={3}>
            <CardBrand data={item} />
          </Grid>
        );
      } else {
        return <CardBrand data={item} key={index} />;
      }
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: isSmDown ? "white" : theme.palette.common.natural3,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          margin: "0 auto",
        }}
      >
        <LineTitle titleData={partner_title} type="left" />

        {isMdUp ? (
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
        ) : (
          <Stack
            direction="row"
            // spacing={isSmDown ? 5 : 3}
            sx={{
              marginTop: "3rem",
              display: "flex",
              width: "90vw",
              overflowX: "auto",
              "& .slider-wrapper": {
                marginBottom: 0,
              },
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {renderCardBrand()}
          </Stack>
        )}
      </Box>
      <Link href="/tin-tuc" sx={{ textDecoration: "none" }}>
        <Button sx={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
          XEM THÊM
        </Button>
      </Link>
    </Box>
  );
}
