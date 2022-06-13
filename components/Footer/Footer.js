import {
  Divider as MuiDivider,
  Container,
  Box,
  styled,
  Grid,
  useTheme,
  Typography,
  Stack,
} from "@mui/material";
import { useSetting } from "../../hooks";
import { FooterTop, FooterBottom } from "../../components";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterContent from "./FooterContent";

const Footer = ({ children, ...props }) => {
  const theme = useTheme();
  const { logo_footer } = useSetting();

  return (
    <Box sx={{ width: "80vw" }}>
      <Grid container sx={{ marginBottom: "4rem" }} spacing={3}>
        <FooterContent />
      </Grid>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{ marginBottom: "1.6rem", color: theme.palette.primary.main }}
      >
        <FacebookRoundedIcon />
        <FacebookRoundedIcon />
        <InstagramIcon />
        <InstagramIcon />
      </Stack>

      <Box
        sx={{
          margin: "0 auto",
          width: "70vw",
          borderTop: `1px solid ${theme.palette.common.natural4}`,
        }}
      >
        <Typography
          variant="hairline2"
          sx={{
            margin: "2rem",
            display: "block",
            textAlign: "center",
            color: theme.palette.common.natural2,
          }}
        >
          Copyright © 2022 Đổi Điểm. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

// Styled Sheet

// const FootWraper = styled(Box)(({ theme }) => {
//   return {
//     alignItems: "center",
//     width: "100%",
//   };
// });

// <Box id="contact">
//   <Container maxWidth="lg">
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         <Box
//           sx={{
//             paddingBottom: 2,
//             pointerEvents: "none",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: {
//               xs: "center",
//               lg: "flex-start",
//             },
//             justifyContent: {
//               xs: "center",
//               lg: "flex-start",
//             },
//           }}
//         >
//           <img src={logo_footer} height={"auto"} width={"150px"} alt="logo footer" />
//         </Box>
//       </Grid>

//       <Grid item xs={12}>
//         <FooterBottom />
//       </Grid>

//       <Grid item xs={12}>
//         <FooterTop />
//       </Grid>
//     </Grid>
//   </Container>
// </Box>
