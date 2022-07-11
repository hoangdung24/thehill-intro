import { Box, Container, Grid, useTheme, Typography } from "@mui/material";
import React from "react";
import LineTitle from "../../../components/LineTitle/LineTitle";
import { Image } from "../../../HOC";

export default function ExchangePointsHome({ data }) {
  const theme = useTheme();
  const { about_title, about_content } = data;
  const renderContent = () => {
    return about_content.map((item, index) => {
      return (
        <Grid item xs={12} md={4} key={index}>
          <Box
            sx={{
              width: "100%",
              height: "calc(18vw * 1.72)",
              [theme.breakpoints.down("md")]: {
                height: "calc(60vw * 1.72)",
              },
            }}
          >
            <Image
              {...{
                src: item.value.image,
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />
          </Box>

          <Typography
            variant="body2"
            sx={{ marginTop: "1.5rem", textAlign: "justify !important" }}
          >
            {item.value.description.length > 150
              ? item.value.description.substr(0, 175) + "..."
              : item.value.description}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        [theme.breakpoints.down("md")]: {
          // width: "85vw",
        },
      }}
    >
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
