import { Container, Box, Grid, Typography } from "@mui/material";
import { SubHeader } from "../../components";
import createDOMPurify from "isomorphic-dompurify";

const PolicyPage = ({ dataPolicy, ...props }) => {
  const { items } = dataPolicy;
  const data = items?.[0];
  const content = data.content;

  return (
    <Box
      sx={{
        paddingBottom: 6,
      }}
    >
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
    </Box>
  );
};

export default PolicyPage;

// styled sheet
