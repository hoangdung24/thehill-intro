import { FormContact, QRcode, SubHeader } from "../../components";
import { Box, Container, Grid } from "@mui/material";

const ContactPage = ({ dataContact, storeCategories, ...props }) => {
  const { items } = dataContact;
  const data = items?.[0];

  return (
    <Box>
      <SubHeader data={data} isBackground={true} background={data.banner} />
      <Container
        maxWidth="lg"
        sx={{
          paddingY: 8,
        }}
      >
        <Grid container spacing={3} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <QRcode />
            </Box>
          </Grid>
          <Grid className="BoxFormContainer" item xs={12} md={6}>
            <FormContact category={storeCategories} data={data} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
