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
import { useSetting } from "../../hooks";
import useMedia from "../../hooks/useMedia";
import InputSendMail from "../Input/InputSendMail";
const SIZE = "100px";

export default function FooterContent() {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();
  // const setting = useSetting();
  // const {
  //   logo_footer,
  //   title_column_1,
  //   title_column_2,
  //   title_column_3,
  //   link_in_column_1,
  //   link_in_column_2,
  //   social_icons,
  //   email,
  //   hotline,
  //   working_desc,
  // } = useSetting();

  return (
    <Fragment>
      <Grid
        item
        xs={12}
        md={2}
        sx={[isSmDown && { height: "6rem", marginBottom: "2rem" }]}
      >
        <Box
          sx={[{ height: "42%" }, isSmDown && { height: "100%", width: "43%" }]}
        >
          <Image
            {...{
              src: "/img/Logo-theHill.png",
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
            Về Chúng Tôi
          </Title>
          <Content>Điều khoản và điều kiện</Content>
          <Content>Điều khoản và điều kiện</Content>
        </Box>
      </Grid>
      <Grid item xs={12} md={2} sx={[isSmDown && { marginBottom: "2rem" }]}>
        <Box>
          <Title variant="body2_bold">Về Chúng Tôi</Title>
          <Content>Điều khoản và điều kiện</Content>
          <Content>Điều khoản và điều kiện</Content>
        </Box>
      </Grid>
      <Grid item xs={12} md={3} sx={[isSmDown && { marginBottom: "2rem" }]}>
        <Box>
          <Title variant="body2_bold">Địa Chỉ</Title>
          <Content>
            13 đường số 33, Phường An Khánh, Thành Phố Thủ Đức, Thành Phố Hồ Chí
            Minh, Việt Nam
          </Content>
          <Content>MST: 123456789</Content>
          <Content>SĐT: 0909999999</Content>
          <Content>Email:asdfsdfsdfsd</Content>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box>
          <Title variant="body2_bold">Đăng Ký Nhận Tin</Title>
          <Content>Đăng ký với chung tôi để nhận ưu đãi mỗi ngày.</Content>
          <InputSendMail />
          <Stack
            direction="row"
            spacing={2}
            sx={[{ height: "3rem" }, isSmDown && { height: "4rem" }]}
          >
            <Image
              {...{
                src: "/img/image 6.png",
                width: "100%",
                height: "100%",
                objectFit: "container",
              }}
            />
            <Image
              {...{
                src: "/img/image 7.png",
                width: "100%",
                height: "100%",
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

const Divider = styled(MuiDivider)(({ theme }) => {
  return {
    marginBottom: 32,
    marginTop: 32,
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  };
});
