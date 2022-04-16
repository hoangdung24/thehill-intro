import Link from "next/link";
import { useState, useMemo } from "react";

import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { BlogItem } from "../../../components";

import Wrapper from "./Wrapper";

const Blog = ({ blogList, data, ...props }) => {
  const items = blogList?.items || [];
  const [minHeight, setMinHeight] = useState(0);

  const seeMoreButton = useMemo(() => {
    return (
      <Link href="/tin-tuc" passHref>
        <Button
          disableRipple
          sx={{
            "&:hover": {
              background: "unset",
            },
          }}
          endIcon={
            <ArrowForwardIosIcon
              sx={{
                fontSize: "16px !important",
              }}
            />
          }
        >
          Xem Thêm
        </Button>
      </Link>
    );
  }, []);

  return (
    <Wrapper id="blog">
      <Container maxWidth="lg">
        <Stack marginBottom={6}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              position: "relative",
            }}
          >
            <Box></Box>
            <Typography
              variant="h4"
              sx={{
                color: "#16215c",
                fontWeight: 700,
              }}
            >
              {data.blog_title}
            </Typography>
            <Box></Box>

            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              {seeMoreButton}
            </Box>
          </Stack>

          <Typography
            variant="subtitle"
            sx={{
              color: "#727777",
              textAlign: "center",
            }}
          >
            {data.blog_subtitle}
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {items.map((el, index) => {
            return (
              <Grid item md={4} key={index}>
                <BlogItem
                  {...{
                    minHeight,
                    setMinHeight,
                    ...el,
                  }}
                />
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            textAlign: "right",
            marginTop: 6,
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          {seeMoreButton}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Blog;
