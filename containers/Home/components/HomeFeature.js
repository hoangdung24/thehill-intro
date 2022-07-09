import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Image } from "../../../HOC";
import { Box, useTheme } from "@mui/system";
import LineTitle from "../../../components/LineTitle/LineTitle";
import { useMeasure } from "react-use";

const images = [
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
  "/phone/Untitled-1-02.png",
];

const valuelineTitle = {
  title: "Vé Đổi Điểm",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

export default function HomeFeature({ data }) {
  const { tutorial_title, tutorial_subtitle, tutorial_content } = data;
  const inputRef = useRef(null);
  const theme = useTheme();

  const [Ref, { width, height }] = useMeasure();

  // Mũi tên của Slick
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowCircleRightIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowCircleRightIcon />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  // >>>>>>> Biến Slick
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 7,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Box
      id="review-app"
      sx={{
        backgroundColor: theme.palette.common.natural3,
        marginBottom: "5.5rem",
      }}
    >
      <Box sx={{ width: "80vw", margin: "0 auto" }}>
        <LineTitle
          titleData={tutorial_title}
          subtitleData={tutorial_subtitle}
          type="left"
        />
        <Box
          sx={{
            position: "relative",
            ["& .slick-list"]: {},
            ["& .slick-center"]: {
              transition: "500ms",
              transform: "scale(1.1)",
              position: "relative",
              ["&::before"]: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 900,
                content: '""',
                backgroundImage: "url('/phone/borderPhone.png')",
                backgroundSize: "cover",
                transform: "scale(1.1)",
              },
            },
          }}
        >
          <Slider {...settings} className="classCHinhchinh">
            {tutorial_content.map((img, idx) => (
              <Box
                key={idx}
                // ref={inputRef}
                ref={Ref}
                sx={{ width: "100%", height: "60vh" }}
                className={
                  idx === imageIndex ? "slide activeSlide hello" : "slide"
                }
              >
                <Image
                  // ref={Ref}
                  src={img.value}
                  alt={img}
                  layout="fill"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />

                {/* <Image
                  {...{
                    
                    src: img,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                /> */}
              </Box>
            ))}
          </Slider>
          {/* <Box
            sx={{
              position: "absolute",
              top: 0,
              height: height,
              width: "100%",
              "& div span img": {
                transform: "scale(1)",
              },
            }}
          >
            <Image
              {...{
                src: "/phone/borderPhone.png",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
