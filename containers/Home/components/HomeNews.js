import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CardItem from "../../../components/Card/CardItem";
import LineTitle from "../../../components/LineTitle/LineTitle";

const arrayHomeNews = [
  {
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
];

const valuelineTitle = {
  title: "Vé Đổi Điểm",
};

export default function HomeNews() {
  const renderHomeNew = () => {
    return arrayHomeNews.map((data, index) => {
      return (
        <Grid item xs={4}>
          <CardItem data={data} />
        </Grid>
      );
    });
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "8rem",
        width: "80vw",
      }}
    >
      <LineTitle data={valuelineTitle} type="right" />
      <Grid container columnSpacing={7} sx={{ marginTop: "2rem" }}>
        {/* <Grid item xs={4}>
          <CardItem />
              </Grid> */}
        {renderHomeNew()}
      </Grid>

      <Button sx={{ marginTop: "2rem" }}>
        <Typography variant="button2">Xem Thêm</Typography>
      </Button>
    </Box>
  );
}

{
  /* <Box
sx={{
  borderRadius: "0.25rem",
  background:
    "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
  backdropFilter: "blur(4px)",
  border: "1px solid black",
}}
>
<Box
  sx={{
    position: "relative",
    backgroundColor: "red",
    marginTop: 1,
    cursor: "pointer",
    minHeight: 48,
  }}
>
  <Image
    src="/img/Rectangle 5.jpg"
    width="100%"
    height="100%"
    layout="fill"
    objectFit="cover"
  ></Image>
  <Stack>
    <Typography variant="body_small">Awesome collection</Typography>
    <Typography variant="body_small">31/12/2022</Typography>
    <Typography variant="body_small">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.Lorem ipsum
      dolor sit amet consectetur adipiscing elit.
    </Typography>
  </Stack>
</Box>
</Box> */
}
