import { Container, Box, Grid, Typography } from "@mui/material";
import { ReaderHTML, SubHeader } from "../../components";
import createDOMPurify from "isomorphic-dompurify";
import { Fragment } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";

const valuelineTitle = {
  title: "Chính Sách Sử Dụng",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

const PolicyPage = ({ dataPolicy, ...props }) => {
  const { items } = dataPolicy;

  const data = items?.[0];
  const content = data.body;
  return (
    <Fragment>
      {/* <SubHeader data={data} background={data.banner} /> */}
      <BannerTop />

      <Container maxWidth="lg">
        <LineTitle data={valuelineTitle} type="center" />
        <Grid container justifyContent={"center"} sx={{ marginTop: "5.5rem" }}>
          <Grid item xs={12} md={9}>
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
