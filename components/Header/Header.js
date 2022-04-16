import { Box, Container, Stack, Typography, styled, Button } from "@mui/material";

import { Image } from "../../HOC";
import { useGlobal, useDevice } from "../../hooks";

const Header = ({ data, ...props }) => {
  const global = useGlobal();
  const { isMobile } = useDevice();

  return (
    <Wrapper headerHeight={global.state.headerHeight || 0}>
      <Background>
        <Image
          alt="banner"
          src={data.banner}
          WrapperProps={{
            sx: {
              width: "100%",
              height: "100%",
            },
          }}
          objectFit="cover"
        />
      </Background>

      <Container
        maxWidth="lg"
        sx={{
          height: 1,
        }}
      >
        <Stack
          spacing={5}
          sx={{
            height: 1,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontWeight: 700,
              maxWidth: 400,
            }}
          >
            {data.subtitle}
          </Typography>
          <Button variant="contained" disableElevation>
            Send App To Your Phone
          </Button>
        </Stack>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "headerHeight";
  },
})(({ theme, headerHeight }) => {
  return {
    position: "relative",
    width: "100vw",
    height: `calc(100vh - ${headerHeight}px)`,
    overflow: "hidden",
  };
});

const Background = styled(Box)(() => {
  return {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };
});
