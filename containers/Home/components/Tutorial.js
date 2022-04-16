import { Grid, Box, Typography, styled, Container } from "@mui/material";
import { Image } from "../../../HOC";
import { ReaderHTML } from "../../../components";

import Wrapper from "./Wrapper";

const SIZE = 300;

const Tutorial = ({ data, ...props }) => {
  return (
    <Wrapper id="tutorial">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              {data.tutorial_title}
            </Typography>
            <ReaderHTML content={data.tutorial_content} />
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
                src={data.tutorial_image}
                height={SIZE}
                alt="IMAGE Hướng dẫn"
                WrapperProps={{
                  sx: {
                    width: {
                      lg: "100%",
                      xs: "calc(100vw + 24px)",
                    },
                  },
                }}
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Tutorial;
