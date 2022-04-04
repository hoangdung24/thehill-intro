import { SubHeader } from "../../components";
import { Stack, Box, Grid, Container } from "@mui/material";
import Blog from "../../containers/News/components/Blog";
import Tag from "../../containers/News/components/Tag";
import { Fragment } from "react";

const FilterNews = () => {
  return null;

  return (
    <Fragment>
      <SubHeader title="We are tech giant with 50k+ clients " />
      <Container maxWidth="xl">
        <Stack spacing={2} direction="column">
          <Box>
            <Blog />
          </Box>
          <Box>
            <Grid container direction="row" justifyContent="center" alignContent="center">
              <Grid item xs={3}>
                <Tag />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default FilterNews;
