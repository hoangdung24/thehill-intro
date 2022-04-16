import { Grid, Typography, Box, styled, Container } from "@mui/material";
import { CustomerCard, ReaderHTML } from "../../../components";

import { Image } from "../../../HOC";

import Wrapper from "./Wrapper";

const CustomerBenefit = ({ data, ...props }) => {
  return (
    <Wrapper>
      <ImageBackground>
        <Image
          {...{
            src: data.customer_image,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ImageBackground>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={12} lg={6}>
            <Box
              sx={{
                textAlign: {
                  lg: "left",
                  sm: "center",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                {data.customer_title}
              </Typography>
              <ReaderHTML content={data.customer_subtitle} />
            </Box>
          </Grid>
          <Grid item md={12} lg={6}>
            <Grid container spacing={3}>
              {data.customer_content?.map((el, index) => {
                const { value } = el;

                return (
                  <Grid key={index} item xs={12} sm={6}>
                    <CustomerCard icon={value.icon} desc={value.desc} title={value.title} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default CustomerBenefit;

const ImageBackground = styled(Box)(() => {
  return {
    zIndex: -1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    pointerEvents: "none",
  };
});
