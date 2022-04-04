import { Container, Grid, Box, styled, Typography } from "@mui/material";

import { Image } from "../../../HOC";

const DUMB_IMAGE = "/faq.png";

const Card = ({ data }) => {
  return (
    <Wrapper width={297} height={192}>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "20%",
          zIndex: 2,
        }}
      >
        <Typography>{data}</Typography>
      </Box>
      <ImageWrapper>
        <Image width={297} height={192} src={DUMB_IMAGE} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled(Box)(({}) => {
  return {
    position: "relative",
    transition: "all .3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  };
});

const ImageWrapper = styled(Box)(({}) => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    right: 0,
    bottom: 0,
  };
});
