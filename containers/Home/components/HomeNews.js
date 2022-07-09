import { Button, Container, Grid, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import CardItem from "../../../components/Card/CardItem";
import LineTitle from "../../../components/LineTitle/LineTitle";
import Link from "../../../components/Link";
import useMedia from "../../../hooks/useMedia";

export default function HomeNews({ data, blogHomeData }) {
  const theme = useTheme();
  const { blog_title } = data;
  const router = useRouter();
  const { isSmDown } = useMedia();

  const handleDetailNew = (id) => {
    router.push(`tin-tuc/${id}`);
  };
  const renderHomeNew = () => {
    return blogHomeData.map((data, index) => {
      return (
        <Grid
          onClick={() => handleDetailNew(data.id)}
          key={index}
          item
          xs={12}
          md={4}
          // sx={[isSmDown && { marginBottom: "1.75rem" }]}
          sx={{
            [theme.breakpoints.up("md")]: {
              paddingTop: "0 !important",
            },
            [theme.breakpoints.down("sm")]: {
              "&:first-child": {
                paddingTop: "0 !important",
              },
            },
          }}
        >
          <CardItem data={data} />
        </Grid>
      );
    });
  };
  return (
    <Container
      sx={[
        {
          textAlign: "center",
          margin: "0 auto",
          marginBottom: "8rem",
          // width: "80vw",
        },
        isSmDown && { marginBottom: "3.5rem" },
      ]}
    >
      <LineTitle titleData={blog_title} type="right" />
      <Grid
        container
        spacing={7}
        sx={{
          marginTop: "2rem",
        }}
      >
        {renderHomeNew()}
      </Grid>

      <Link href="/tin-tuc" sx={{ textDecoration: "none" }}>
        <Button sx={{ marginTop: "2rem" }}>
          <Typography variant="button2">Xem Thêm</Typography>
        </Button>
      </Link>
    </Container>
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
