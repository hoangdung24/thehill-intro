import { Grid, Box, Typography, Container } from "@mui/material";
import { Image } from "../../../HOC";
import { ReaderHTML } from "../../../components";

import Wrapper from "./Wrapper";

const SIZE = 300;

const AboutUs = ({ data, ...props }) => {
  return (
    <Wrapper id="about">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              {data.about_title}
            </Typography>
            <ReaderHTML content={data.about_content} />
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              paddingLeft: {
                xs: "0px !important",
                lg: "24px !important",
              },
            }}
          >
            <Box
              sx={{
                pointerEvents: "none",
                overflow: "hidden",
                width: {
                  lg: "100%",
                },
              }}
            >
              <Image
                src={data.about_image}
                height={SIZE}
                objectFit="cover"
                alt="IMAGE ABOUT US"
                WrapperProps={{
                  sx: {
                    width: {
                      lg: "100%",
                      xs: "calc(100vw + 24px)",
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default AboutUs;
