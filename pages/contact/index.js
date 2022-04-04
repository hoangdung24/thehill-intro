import { BoxContact, FormContact, SubHeader } from "../../components";
import { Stack, Box, Divider, Container, Grid } from "@mui/material";
import styled from "@emotion/styled";

const ContactPage = () => {
  return null;

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: 2,
      }}
    >
      <SubHeader title={"Contact Page"} />
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-around"
        alignItems={"center"}
      >
        <CustomBox item lg={6}>
          <BoxContact />
        </CustomBox>
        <CustomBox className="BoxFormContainer" item lg={6}>
          <FormContact />
        </CustomBox>
      </Grid>
    </Container>
  );
};

export default ContactPage;

const CustomBox = styled(Grid)(({ theme }) => {
  return {};
});
