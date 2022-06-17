import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import React from "react";
import CardBrand from "../../../components/Card/CardBrand";
import LineTitle from "../../../components/LineTitle/LineTitle";
import Link from "../../../components/Link";
import useMedia from "../../../hooks/useMedia";
import Slider from "react-slick";
import { width } from "@mui/system";

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

export default function HomeBrand() {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  const renderCardBrand = () => {
    return arrayHomeNews.map((item, index) => {
      if (isMdUp) {
        return (
          <Grid item key={index} xs={3}>
            <CardBrand data={item} />
          </Grid>
        );
      } else {
        return <CardBrand data={item} />;
      }
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
            spacing={2}
            className="asdasdasdadasdadadada"
            sx={{ display: "flex", width: "90vw", overflowX: "auto" }}
          >
            {renderCardBrand()}
          </Stack>
        )}
      </Box>
      <Link href="/tin-tuc">
        <Button sx={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
          XEM THÊM
        </Button>
      </Link>
    </Box>
  );
}
