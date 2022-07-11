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
          xs={6}
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
      // fullWidth
      sx={[
        {
          textAlign: "center",
          margin: "0 auto",
          marginBottom: "8rem",
          [theme.breakpoints.down("md")]: {
            marginBottom: "5rem",
          },
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
