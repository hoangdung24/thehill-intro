import { Box, Stack, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import LineTitle from "../../../components/LineTitle/LineTitle";
import { Image } from "../../../HOC";

const arrayHomeNews = [
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5-2.png",
  },
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5-1.png",
  },
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5-3.png",
  },
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5.png",
  },
];

const valuelineTitle = {
  title: "Vé Đổi Điểm",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

export default function HomeBenefit() {
  const renderIconBenefit = () => {
    return arrayHomeNews.map((item, index) => {
      return (
        <Grid item xs={12} sx={{ height: "100%" }} key={index}>
          <Stack direction="row" alignItems="center" sx={{ height: "100%" }}>
            <Box sx={{ width: "40%", height: "100%" }}>
              <Image
                layout="fill"
                src={item.img}
                width="100%"
                height="100%"
                objectFit="none"
              />
            </Box>
            <Box sx={{ width: "60%" }}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.secondary.light,
                  marginBottom: "1rem",
                }}
              >
                Tích Điểm
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      );
    });
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "80vw",

        margin: "0 auto",
        marginBottom: "3rem",
      }}
    >
      <LineTitle data={valuelineTitle} type="right" />
      <Box
        sx={{
          marginTop: "4.5rem",
          height: "51.6rem",
          border: "2px solid rgba(244, 244, 244, 0.6)",
          borderRadius: "1rem",
          backgroundImage:
            "linear-gradient(145.36deg, rgba(244, 244, 244, 0.4) -4.23%, rgba(244, 244, 244, 0.2) 102.58%)",
        }}
      >
        <Stack direction="row" sx={{ height: "100%" }}>
          <Box item sx={{ width: "50%", height: "100%" }}>
            <Image
              src="/img/Mockup 1.png"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Box>
          <Box sx={{ width: "50%", padding: "4.3rem" }}>
            <Grid container className="plplplp" sx={{ height: "25%" }}>
              {renderIconBenefit()}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
