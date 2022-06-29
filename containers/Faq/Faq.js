import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";

const valuelineTitle = {
  title: "FAQ",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

const cardFAQ = [
  {
    title: "Danh Mục Câu Hỏi 1",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 2",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 3",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 4",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 5",
    img: "/img/Rectangle 5.jpg",
  },
  {
    title: "Danh Mục Câu Hỏi 6",
    img: "/img/Rectangle 5.jpg",
  },
];

export default function FAQ({ initData }) {
  const router = useRouter();
  const [listingFAQ, detailFAQ] = initData;
  const { banner, title } = listingFAQ.items[0];
  const listData = detailFAQ.items;
  console.log("initData", router);

  const { isSmUp, isSmDown, isMdUp } = useMedia();

  const handleFAQ = (id) => {
    console.log("handleFAQ", router.pathname);
    router.push(`${router.pathname}/${id}`);
  };

  const renderCardFAQ = () => {
    if (!listData) {
      return null;
    }

    return listData.map((item, index) => {
      // console.log("first", item.id);
      return (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
          onClick={() => handleFAQ(item.id)}
        >
          <Box
            sx={{
              cursor: "pointer",
              borderRadius: "8px",
              position: "relative",
              height: "16rem",
              border: "4px solid rgba(177, 181, 195, 1)",
              "& img": {
                borderRadius: "5px",
              },
            }}
          >
            <Image
              {...{
                src: item.thumbnail,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="hairline1"
              sx={{ position: "absolute", top: "24px", left: "24px" }}
            >
              {item.title}
            </Typography>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ marginBottom: "7.8rem" }}>
      <BannerTop data={banner} />
      <Box sx={{ width: "80vw", margin: "0 auto" }}>
        <LineTitle titleData={title} type="center" />
        <Grid
          container
          spacing={7}
          sx={[
            { marginTop: "2rem" },
            isSmDown && {
              marginTop: "0.5rem",
            },
          ]}
        >
          {renderCardFAQ()}
        </Grid>
      </Box>
    </Box>
  );
}
