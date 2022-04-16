import Slider from "react-slick";
import Link from "next/link";
import { useEffect, useRef, useMemo } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Box, Typography, styled, Container, Stack, Button } from "@mui/material";
import { CardPartner } from "../../../components";

import Wrapper from "./Wrapper";

const SliderCarousel = ({ partnerData, data, ...props }) => {
  const ref = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (ref.current) {
      const listNode = ref.current.innerSlider.list;
      listNode.style.paddingLeft = "0px";
      listNode.style.paddingRight = "120px";
    }
  }, [ref]);

  const seeMoreButton = useMemo(() => {
    return (
      <Link href="/thuong-hieu-than-quen" passHref>
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
    <Wrapper id="partner">
      <WraperImage>
        <img
          src={data.partner_image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </WraperImage>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          marginBottom={6}
          justifyContent="space-between"
          sx={{
            position: "relative",
          }}
        >
          <Box></Box>
          <Typography
            variant="h4"
            sx={{
              color: "common.white",
              fontWeight: 700,
            }}
          >
            {data.partner_title}
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

        <Slider {...settings} ref={ref}>
          {partnerData?.items?.map((e, index) => (
            <CardPartner
              key={index}
              icon={e.image}
              name={e.name}
              description={e.description.substring(0, 50)}
              point_content={e.point_content}
              link={e.link}
            />
          ))}
        </Slider>
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

export default SliderCarousel;

// styled Sheet

const WraperImage = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "partner_image";
  },
})(({ theme }) => {
  return {
    zIndex: -1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  };
});
