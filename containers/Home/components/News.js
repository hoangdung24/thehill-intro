import { useCallback } from "react";
import { useRouter } from "next/router";
import { Button, Grid, Box } from "@mui/material";

import Link from "../../../components/Link";
import useMedia from "../../../hooks/useMedia";
import CardItem from "../../../components/Card/CardItem";

import { LineTitle, Container } from "../../../components";

export default function HomeNews({ data, blogHomeData }) {
  const { blog_title } = data;
  const router = useRouter();
  const { isSmDown, isMdDown, isSmUp } = useMedia();

  const handleDetailNew = useCallback((id) => {
    router.push(`/tin-tuc/${id}`);
  }, []);

  return (
    <Container
      id="blog"
      maxWidth="lg"
      sx={[
        {
          paddingBottom: 10,
        },
        isMdDown && {
          paddingBottom: 6,
        },
      ]}
    >
      <Box
        sx={[
          {
            paddingTop: 5,
            paddingBottom: 8,
          },
          isMdDown && {
            paddingBottom: 5,
          },
        ]}
      >
        <LineTitle titleData={blog_title} type="right" />
      </Box>

      <Grid container columnSpacing={6} rowSpacing={4}>
        {blogHomeData.map((data, idx) => {
          return (
            <Grid
              onClick={() => handleDetailNew(data.id)}
              key={idx}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <CardItem data={data} />
            </Grid>
          );
        })}

        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Link href="/tin-tuc" sx={{ textDecoration: "none" }}>
              <Button variant="outlined" color="secondary">
                XEM THÊM
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
