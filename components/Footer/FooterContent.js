import {
  useTheme,
  Divider as MuiDivider,
  Box,
  styled,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import React, { Fragment } from "react";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";
import InputSendMail from "../Input/InputSendMail";
import Link from "../Link";

export default function FooterContent({ setting }) {
  const { isSmDown, isMdDown } = useMedia();
  const theme = useTheme();

  if (setting == undefined) {
    return null;
  }
  const {
    address,
    tax_code,
    hotline,
    email,
    title_column_1,
    title_column_2,
    title_column_3,
    link_in_column_1,
    link_in_column_2,
    logo_footer,
  } = setting;
  // console.log("title_column_1", link_in_column_1);

  return (
    <Fragment>
      <Grid
        item
        xs={12}
        md={2}
        sx={[isSmDown && { height: "6rem", marginBottom: "2rem" }]}
      >
        <Box
          sx={[
            { height: "10vh" },
            isSmDown && { height: "100%", width: "27vw" },
            isMdDown && { height: "10vh", width: "20vw", marginBottom: "2rem" },
          ]}
        >
          <Image
            {...{
              src: logo_footer,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              alt: "logo footer",
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={2} sx={[isSmDown && { marginBottom: "2rem" }]}>
        <Box>
          <Title
            variant="body2_bold"
            sx={[isSmDown && { marginBottom: "1.5rem" }]}
          >
            {title_column_1}
          </Title>
          {link_in_column_1.map((item, index) => {
            return (
              <Link
                className="dayne"
                key={index}
                href={item.value.link}
                sx={{
                  textDecoration: "none",
                  transition: "all 0.5s",
                  "& p:hover": {
                    color: theme.palette.primary.light,
                  },
                }}
              >
                <Content>{item.value.title}</Content>
              </Link>
            );
          })}
        </Box>
      </Grid>

      <Grid item xs={12} md={2} sx={[isSmDown && { marginBottom: "2rem" }]}>
        <Box>
          <Title variant="body2_bold">{title_column_2}</Title>
          {link_in_column_2.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.value.link}
                sx={{
                  textDecoration: "none",
                  transition: "all 0.5s",
                  "& p:hover": {
                    color: theme.palette.primary.light,
                  },
                }}
              >
                <Content>{item.value.title}</Content>
              </Link>
            );
          })}
        </Box>
      </Grid>

      <Grid item xs={12} md={3} sx={[isSmDown && { marginBottom: "2rem" }]}>
        <Box>
          <Title variant="body2_bold">{title_column_3}</Title>
          <Content sx={{ marginBottom: "0.5rem !important" }}>
            {address}
          </Content>
          <Content>MST: {tax_code}</Content>
          <Link href={"tel:" + hotline} sx={{ textDecoration: "none" }}>
            <Content>SĐT: {hotline}</Content>
          </Link>

          <Content>Email: {email}</Content>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Box>
          <Title variant="body2_bold">Đăng ký nhận tin</Title>
          <Content>Đăng ký với chúng tôi để nhận ưu đãi mỗi ngày.</Content>
          <InputSendMail />
          <Stack
            direction="row"
            spacing={1}
            sx={[
              {
                height: "3rem",
                [theme.breakpoints.down("md")]: {
                  height: "6rem",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                  height: "4rem",
                },
              },
              isSmDown && { height: "4rem" },
            ]}
          >
            <Image
              {...{
                src: "/img/image 6.png",
                width: "100%",
                height: isMdDown
                  ? isSmDown
                    ? "calc(7vw * 1.72)"
                    : "calc(8vw * 1.72)"
                  : "calc(2vw * 1.72)",
                objectFit: "container",
              }}
            />
            <Image
              {...{
                src: "/img/image 7.png",
                width: "100%",
                height: isMdDown
                  ? isSmDown
                    ? "calc(7vw * 1.72)"
                    : "calc(8vw * 1.72)"
                  : "calc(2vw * 1.72)",
                objectFit: "container",
              }}
            />
          </Stack>
        </Box>
      </Grid>
    </Fragment>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    display: "block",
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.black,
      marginBottom: "1.5rem",
    },
  };
});

const Content = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.natural2,
    marginBottom: 10,

    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.neutral2,
      marginBottom: 1,
    },
  };
});
