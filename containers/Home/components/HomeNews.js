import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CardItem from "../../../components/Card/CardItem";
import LineTitle from "../../../components/LineTitle/LineTitle";
import Link from "../../../components/Link";
import useMedia from "../../../hooks/useMedia";

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

export default function HomeNews({ data, blogHomeData }) {
  const { blog_title } = data;
  console.log("data", blogHomeData);

  const { isMdUp, isSmDown, isSmUp } = useMedia();
  const renderHomeNew = () => {
    return blogHomeData.map((data, index) => {
      return (
        <Grid
          key={index}
          item
          xs={12}
          md={4}
          sx={[isSmDown && { marginBottom: "1.75rem" }]}
        >
          <CardItem data={data} />
        </Grid>
      );
    });
  };
  return (
    <Box
      sx={[
        {
          textAlign: "center",
          margin: "0 auto",
          marginBottom: "8rem",
          width: "80vw",
        },
        isSmDown && { marginBottom: "3.5rem" },
      ]}
    >
      <LineTitle titleData={blog_title} type="right" />
      <Grid container columnSpacing={7} sx={{ marginTop: "2rem" }}>
        {renderHomeNew()}
      </Grid>

      <Link href="/tin-tuc" sx={{ textDecoration: "none" }}>
        <Button sx={{ marginTop: "2rem" }}>
          <Typography variant="button2">Xem Thêm</Typography>
        </Button>
      </Link>
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
