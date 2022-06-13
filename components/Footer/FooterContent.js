import {
  useTheme,
  Divider as MuiDivider,
  Box,
  styled,
  Grid,
  Typography,
  Stack,
  InputBase,
  Paper,
  IconButton,
} from "@mui/material";
import React, { Fragment } from "react";
import { Image } from "../../HOC";
import { useSetting } from "../../hooks";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const SIZE = "100px";

export default function FooterContent() {
  const theme = useTheme();
  const setting = useSetting();
  const {
    logo_footer,
    title_column_1,
    title_column_2,
    title_column_3,
    link_in_column_1,
    link_in_column_2,
    social_icons,
    email,
    hotline,
    working_desc,
  } = useSetting();
  console.log("    title_column_1", setting);

  return (
    <Fragment>
      <Grid item xs={2}>
        <Box>
          <img
            src={logo_footer}
            height={"auto"}
            width={"150px"}
            alt="logo footer"
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box>
          <Title variant="body2_bold">{title_column_1}</Title>
          {link_in_column_1?.map((el, index) => (
            <Content key={index}>{el.value.title}</Content>
          ))}
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box>
          <Title variant="body2_bold">{title_column_2}</Title>
          {link_in_column_2?.map((el, index) => (
            <Content key={index}>{el.value.title}</Content>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Title variant="body2_bold">Địa Chỉ</Title>
          <Content>
            13 đường số 33, Phường An Khánh, Thành Phố Thủ Đức, Thành Phố Hồ Chí
            Minh, Việt Nam
          </Content>
          <Content>MST: 123456789</Content>
          <Content>SĐT: 0909999999</Content>
          <Content>Email: {email}</Content>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Title variant="body2_bold">Đăng Ký Nhận Tin</Title>
          <Content>Đăng ký với chung tôi để nhận ưu đãi mỗi ngày.</Content>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm kiếm"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <ArrowCircleRightIcon />
            </IconButton>
          </Paper>
          <Grid container>
            <Grid item xs={6}>
              <Image
                layout="fill"
                width="100%"
                height="100%"
                objectFit="cover"
                src="/img/image 6.png"
                alt="icon"
              />
            </Grid>
          </Grid>
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
    color: theme.palette.common.neutral2,
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
