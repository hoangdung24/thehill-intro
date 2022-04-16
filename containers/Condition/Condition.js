import { Container, Box, Grid } from "@mui/material";
import { Fragment } from "react";
import { SubHeader } from "../../components";
import createDOMPurify from "isomorphic-dompurify";

const ConditionPage = ({ dataCondition, ...props }) => {
  const { items } = dataCondition;
  const data = items?.[0];
  const content = data.content;

  return (
    <Fragment>
      <SubHeader data={data} background={data.banner} />

      <Container maxWidth="lg">
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                overflow: "hidden",
              }}
              dangerouslySetInnerHTML={{
                __html: createDOMPurify.sanitize(content),
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default ConditionPage;

// styled sheet
