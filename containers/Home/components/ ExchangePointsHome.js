import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LineTitle from "../../../components/LineTitle/LineTitle";
import { Image } from "../../../HOC";

const valuelineTitle = {
  title: "Về Đổi Điểm",
};

const arrayExchangePoint = [
  {
    img: "/img/Rectangle 5.jpg",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of",
  },
  {
    img: "/img/Rectangle 5.jpg",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of",
  },
  {
    img: "/img/Rectangle 5.jpg",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of",
  },
];

export default function ExchangePointsHome({ data }) {
  const { about_title } = data;
  const renderContent = () => {
    return arrayExchangePoint.map((item, index) => {
      return (
        <Grid item xs={12} md={4} key={index}>
          <Image
            {...{
              src: item.img,
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="body2"
            sx={{ marginTop: "1.5rem", textAlign: "justify !important" }}
          >
            {item.subtitle}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Container maxWidth="lg">
      <LineTitle type="left" titleData={about_title} />
      <Grid
        container
        sx={{
          marginTop: "4.5rem",
        }}
        columnSpacing={11}
      >
        {renderContent()}
      </Grid>
    </Container>
  );
}
