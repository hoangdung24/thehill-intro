import { Container, Box, Grid } from "@mui/material";
import { Fragment } from "react";
import { ReaderHTML } from "../../components";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";

const ConditionPage = ({ initData }) => {
  const data = initData[0].items[0];
  const content = data.content[0].value;
  return (
    <Fragment>
      <BannerTop data={data.banner} />

      <Container maxWidth="lg" sx={{ marginBottom: "15rem" }}>
        <LineTitle titleData={data.title} type="center" />
        <Grid container justifyContent={"center"} sx={{ marginTop: "5.5rem" }}>
          <Grid item xs={12} sx={{ textAlign: "justify" }}>
            <Box
              sx={{
                overflow: "hidden",
              }}
            >
              <ReaderHTML content={content} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default ConditionPage;

// styled sheet
