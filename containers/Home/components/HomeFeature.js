import React, { useState } from "react";
import Slider from "react-slick";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Image } from "../../../HOC";
import { Box, useTheme } from "@mui/system";

const images = [
  "/phone/Đăng nhập.jpg",
  "/phone/Frame 1.png",
  "/phone/Home.png",
  "/phone/Menu Quán.png",
  "/phone/Thành Viên 2.png",
  "/phone/Thành Viên.png",
  "/phone/Tìm kiếm quán.png",
  "/phone/Tìm kiếm quán.png",
];

export default function HomeFeature() {
  const theme = useTheme();
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
      sx={{
        backgroundColor: theme.palette.common.natural3,
        marginBottom: "5.5rem",
      }}
    >
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box
            className={idx === imageIndex ? "slide activeSlide hello" : "slide"}
          >
            <Image
              src={img}
              alt={img}
              layout="fill"
              width="100%"
              height="400px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
