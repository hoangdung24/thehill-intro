import Slider from "react-slick";
import { useRef } from "react";
import { Box, useTheme, Grid } from "@mui/material";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import { Image } from "../../../HOC";
import LineTitle from "../../../components/LineTitle/LineTitle";

import { Container } from "../../../components";
import { useMedia } from "../../../hooks";

const IMAGE_FRAME_RATIO = 390 / 790;
const IMAGE_RATIO = 351 / 767;
const IMAGE_HEIGHT = "65vh";

const settings = {
  infinite: true,

  speed: 300,
  slidesToShow: 5,
  centerMode: true,

  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "75px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "0px",
      },
    },
  ],
};

export default function Featured({ data }) {
  const slickRef = useRef();
  const { isMdDown } = useMedia();

  const theme = useTheme();
  const { tutorial_title, tutorial_subtitle, tutorial_content } = data;

  return (
    <Box
      id="tutorial"
      sx={[
        {
          backgroundColor: theme.palette.common.neutral3,
          paddingBottom: 10,
        },
        isMdDown && {
          paddingBottom: 6,
        },
      ]}
    >
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={[
                {
                  paddingTop: 5,
                  paddingBottom: 8,
                },
                isMdDown && {
                  paddingBottom: 0,
                },
              ]}
            >
              <LineTitle
                titleData={tutorial_title}
                subtitleData={tutorial_subtitle}
                type="left"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={[
            isMdDown && {
              width: "calc(100% + 64px)",
              marginLeft: "-32px",
            },
          ]}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                position: "relative",

                ["& .slick-slide"]: {
                  overflow: "hidden",
                },
                ["& .slick-track"]: {
                  paddingY: "4rem",
                },
                ["& .slick-center"]: {
                  ["& .wrapper-image"]: {
                    transform: "scale(1, 0.975)",
                  },
                },
              }}
            >
              <Slider ref={slickRef} {...settings}>
                {tutorial_content.map((el, idx) => {
                  return (
                    <Box key={idx}>
                      <Image
                        src={el.value}
                        width={`calc(${IMAGE_HEIGHT} * ${IMAGE_RATIO})`}
                        height={IMAGE_HEIGHT}
                        WrapperProps={{
                          sx: {
                            marginX: "auto",
                            transform: "scale(0.75)",
                            transition: "500ms",
                            overflow: "hidden",
                            borderRadius: "20px",
                            top: "6px",
                            maxHeight: "450px",
                            maxWidth: `calc(450px * ${IMAGE_RATIO})`,
                          },
                          className: "wrapper-image",
                        }}
                        objectFit="unset"
                      />
                    </Box>
                  );
                })}
              </Slider>

              <Box
                className="iphone-frame"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: `calc(${IMAGE_HEIGHT} * ${IMAGE_FRAME_RATIO})`,
                  height: `calc(${IMAGE_HEIGHT})`,
                  maxHeight: "450px",
                  maxWidth: `calc(450px * ${IMAGE_FRAME_RATIO})`,
                  zIndex: 2,
                  backgroundImage: "url('/iphone-frame.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transform: "translate(-50%, -50%) ",
                  pointerEvents: "none",
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function PrevArrow({ onClick }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        width: "36px",
        height: "36px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 1,
        borderRadius: "50%",
        borderColor: "primary.light",
        borderWidth: "2px",
        borderStyle: "solid",
        transform: "translateX(-54px)",
      }}
      onClick={onClick}
    >
      <ArrowRightAltOutlinedIcon
        sx={{
          transform: "rotate(180deg)",
          color: "primary.light",
        }}
      />
    </Box>
  );
}

function NextArrow({ onClick }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        width: "36px",
        height: "36px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 1,
        borderRadius: "50%",
        borderColor: "primary.light",
        borderWidth: "2px",
        borderStyle: "solid",
        transform: "translateX(18px)",
      }}
      onClick={onClick}
    >
      <ArrowRightAltOutlinedIcon
        sx={{
          color: "primary.light",
        }}
      />
    </Box>
  );
}
