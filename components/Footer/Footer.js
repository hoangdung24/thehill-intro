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
import useMedia from "../../hooks/useMedia";
import { Fragment } from "react";
import { Image } from "../../HOC";

const Footer = ({ children, ...props }) => {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  const setting = useSetting();

  if (!setting) {
    return null;
  }
  // console.log("setting", setting);
  const { social_icons } = setting;
  // console.log("settingsetting", setting);
  return (
    <Fragment>
      <Box sx={{ width: "80vw" }} id="lien-he">
        <Grid container sx={{ marginBottom: "4rem" }} columnSpacing={3}>
          <FooterContent setting={setting} />
          {/* <Typography>{setting.address}</Typography> */}
        </Grid>

        <Stack
          className="iconne"
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{
            marginBottom: "1.6rem",
            color: theme.palette.primary.main,
            height: "8vh",
            width: "15vw",
            margin: "0 auto",
            marginBottom: "1.6rem !important",
          }}
        >
          {social_icons.map((item, index) => {
            return (
              <Image
                key={index}
                {...{
                  src: item.value.icon || "/img/Rectangle 5.jpg",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            );
          })}

          {/* {social_icons.map((item, index) => {
            // <Image
            //   {...{
            //     src: "/img/Rectangle 5.jpg",
            //     width: "100%",
            //     height: "100%",
            //     objectFit: "cover",
            //   }}
            // />;
          })} */}
          {/* <FacebookRoundedIcon />
          <FacebookRoundedIcon />
          <InstagramIcon />
          <InstagramIcon /> */}
        </Stack>
      </Box>
      <Box
        sx={[
          {
            margin: "0 auto",
            width: "70vw",
            borderTop: `1px solid ${theme.palette.common.natural4}`,
          },
          isSmDown && { width: "100vw" },
        ]}
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
    </Fragment>
  );
};

export default Footer;
