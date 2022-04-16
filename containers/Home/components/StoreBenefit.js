import { Grid, Typography, Box, Container } from "@mui/material";
import { CustomerCard, ReaderHTML } from "../../../components";
import { Image } from "../../../HOC";
const SIZE = 300;

import Wrapper from "./Wrapper";

const StoreBenefit = ({ data, ...props }) => {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
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
                src={data.store_image}
                WrapperProps={{
                  sx: {
                    width: {
                      lg: "100%",
                      xs: "calc(100vw + 24px)",
                    },
                  },
                }}
                height={SIZE}
                objectFit="cover"
              />
            </Box>
          </Grid>

          <Grid item lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {data.store_title}
                </Typography>
                <ReaderHTML content={data.store_desc} />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  {data.store_content?.map((el, index) => {
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
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default StoreBenefit;
