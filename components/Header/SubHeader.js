import { Grid, Typography, Box, styled, Container } from "@mui/material";
import { ButtonShape } from "../../components";
import { Image } from "../../HOC";
import { useGlobal } from "../../hooks";

const SubHeader = ({ background, data }) => {
  const global = useGlobal();

  return (
    <Wrapper headerHeight={global.state.headerHeight || 0}>
      <WrapperImage>
        <Image
          alt="banner"
          src={background}
          WrapperProps={{
            sx: {
              width: "100%",
              height: "100%",
            },
          }}
          objectFit="cover"
        />
      </WrapperImage>
      <Container
        maxWidth="lg"
        sx={{
          height: 1,
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <ButtonShape title={data.subtitle} isBackground={true} backgroundColor={"#0E185F"} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Title
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              {data.title}
            </Title>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default SubHeader;

// Styled Sheet

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.black,
  };
});

const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "headerHeight";
  },
})(({ headerHeight }) => {
  return {
    position: "relative",
    width: "100vw",
    height: `calc(100vh - ${headerHeight}px)`,
    overflow: "hidden",
  };
});

const WrapperImage = styled(Box)(({ theme }) => {
  return {
    zIndex: -1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  };
});
