import { Container, Box, styled, Grid } from "@mui/material";
import { useSetting } from "../../hooks";
import { FooterTop, FooterBottom } from "../../components";

const Footer = ({ children, ...props }) => {
  const { logo_footer } = useSetting();

  return (
    <FootWraper id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                paddingBottom: 2,
                pointerEvents: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: {
                  xs: "center",
                  lg: "flex-start",
                },
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                },
              }}
            >
              <img src={logo_footer} height={"auto"} width={"150px"} alt="logo footer" />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <FooterBottom />
          </Grid>

          <Grid item xs={12}>
            <FooterTop />
          </Grid>
        </Grid>
      </Container>
    </FootWraper>
  );
};

export default Footer;

// Styled Sheet

const FootWraper = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "30px",
  };
});
