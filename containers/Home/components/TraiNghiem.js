import { Box } from "@mui/material";

import Slider from "react-slick";
import { Image } from "../../../HOC";

export default function TraiNghiem({ data }) {
  const { tutorial_title, tutorial_subtitle, tutorial_content } = data;
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <Box
      className="qweqwe"
      sx={{ width: "80%", margin: "0 auto", height: "calc(20vw * 1.72)" }}
    >
      <Image
        {...{
          src: "/img/Rectangle 5.jpg",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Slider {...settings}>
        <Box sx={{ backgroundColor: "gray" }}>
          <Image
            {...{
              src: "/img/Rectangle 5.jpg",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ backgroundColor: "gray" }}>
          <h3>2</h3>
        </Box>
        <Box sx={{ backgroundColor: "gray" }}>
          <h3>3</h3>
        </Box>
        <Box sx={{ backgroundColor: "gray" }}>
          <h3>4</h3>
        </Box>
        <Box sx={{ backgroundColor: "gray" }}>
          <h3>5</h3>
        </Box>
        <Box sx={{ backgroundColor: "gray" }}>
          <h3>6</h3>
        </Box>
        <Box sx={{ backgroundColor: "gray" }}>
          <h3>7</h3>
        </Box>
      </Slider>
    </Box>
  );
}
