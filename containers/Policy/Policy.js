import { Container, Box, Grid, Typography } from "@mui/material";
import { ReaderHTML, SubHeader } from "../../components";
import createDOMPurify from "isomorphic-dompurify";
import { Fragment } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";

const PolicyPage = ({ initData }) => {
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
              // dangerouslySetInnerHTML={{
              //   __html: createDOMPurify.sanitize(content),
              // }}
            >
              <ReaderHTML content={content} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default PolicyPage;

// styled sheet
