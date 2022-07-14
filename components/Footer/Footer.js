import { Divider, Box, Grid, useTheme, Typography, Stack } from "@mui/material";

import dynamic from "next/dynamic";

import { useSetting } from "../../hooks";
import useMedia from "../../hooks/useMedia";
import { Fragment } from "react";
import { Image } from "../../HOC";
import Link from "../Link";

const FooterContent = dynamic(() => import("./FooterContent"), {
  ssr: false,
});

const Footer = ({ children, ...props }) => {
  const { isSmDown, isMdDown } = useMedia();
  const theme = useTheme();
  const setting = useSetting();

  if (!setting) {
    return null;
  }
  const { social_icons } = setting;
  return (
    <Fragment>
      <Box
        sx={{
          paddingX: 4,
        }}
      >
        <FooterContent setting={setting} />

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems={"center"}
          sx={{
            color: theme.palette.primary.main,
            marginBottom: 3,
          }}
        >
          {social_icons.map((item, index) => {
            return (
              <Link key={index} href={item.value.link}>
                <Image
                  {...{
                    src: item.value.icon,
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            );
          })}
        </Stack>
      </Box>
      <Box
        sx={[
          {
            width: "100%",
          },
        ]}
      >
        <Divider
          sx={[
            {
              width: "60vw",
              marginX: "auto",
            },
            isSmDown && {
              width: "100%",
            },
          ]}
        />

        <Typography
          variant="hairline2"
          sx={{
            marginY: 4,
            display: "block",
            textAlign: "center",
            color: theme.palette.common.neutral2,
            textTransform: "uppercase",
          }}
        >
          Copyright © 2022 Đổi Điểm. All rights reserved
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Footer;
