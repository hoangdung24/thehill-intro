import { QRcode,FooterTop, FooterBottom } from "../../components";
import { Container, Stack, Typography, Grid, Box, styled } from "@mui/material";

const SIZE = "2vw";

const TRANSITION = "all 0.5s";

const Footer = ({children, ...props}) => {
  return (
    <FootWraper>
      <Container maxWidth="xl">
        <FooterTop/>
        {/* <FooterBottom/>         */}
      </Container>
    </FootWraper>
  );
};

export default Footer;

// Styled Sheet

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});

const Subtile = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.grey[400],
    transition: TRANSITION,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  };
});

const FootWraper = styled(Box)(({theme}) => {
  return {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 85,
    paddingBottom: 50,
  }
})