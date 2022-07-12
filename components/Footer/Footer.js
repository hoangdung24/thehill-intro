import {
  Divider as MuiDivider,
  Box,
  Grid,
  useTheme,
  Typography,
  Stack,
} from "@mui/material";

import dynamic from "next/dynamic";

import { useSetting } from "../../hooks";
import useMedia from "../../hooks/useMedia";
import { Fragment } from "react";
import { Image } from "../../HOC";

const FooterContent = dynamic(() => import("./FooterContent"), {
  ssr: false,
});

const Footer = ({ children, ...props }) => {
  const { isSmDown, isMdDown } = useMedia();
  const theme = useTheme();
  const setting = useSetting();
  const { social_icons } = setting;

  if (!setting) {
    return null;
  }

  return (
    <Fragment>
      <Box sx={{ width: "80vw" }} id="lien-he">
        <Grid container sx={{ marginBottom: "4rem" }} columnSpacing={3}>
          <FooterContent setting={setting} />
        </Grid>

        <Stack
          className="iconne"
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{
            marginBottom: "1.6rem",
            color: theme.palette.primary.main,
            height: isMdDown
              ? isSmDown
                ? "calc(4vw * 1.72)"
                : "calc(3vw * 1.72)"
              : "calc(1.8vw * 1.72)",
            width: isMdDown ? (isSmDown ? "55%" : "40%") : "22%",
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
