import { Container, Box, Grid } from "@mui/material";
import { Fragment } from "react";
import { ReaderHTML, SubHeader } from "../../components";
import createDOMPurify from "isomorphic-dompurify";
import BannerTop from "../../components/BannerTop/BannerTop";
import LineTitle from "../../components/LineTitle/LineTitle";

const valuelineTitle = {
  title: "Điều Kiện và Điều Khoản",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};
const ConditionPage = ({ dataCondition, ...props }) => {
  const { items } = dataCondition;
  console.log("itemsitems", items);
  const data = items?.[0];

  const content = data.body;
  console.log("itemsitems", content);

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

export default ConditionPage;

// styled sheet
