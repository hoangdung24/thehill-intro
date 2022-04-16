import { useRouter } from "next/router";
import { Box, Grid, Stack, Typography, Link, styled } from "@mui/material";

import { Image } from "../../HOC";
import { QRcode } from "../../components";
import { useSetting } from "../../hooks";

const SIZE = "38px";
const TRANSITION = "all 0.5s";

const FooterBottom = () => {
  const router = useRouter();

  const {
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

  const handleClick = (title) => {
    return () => {
      if (title === "Điều khoản và điều kiện") {
        router.push(`/dieu-khoan-dieu-kien`);
      } else if (title === "Chính sách sử dụng") {
        router.push(`/chinh-sach-su-dung`);
      } else if (title === "Trở thành đối tác") {
        router.push(`/dang-ky-quan`);
      }
    };
  };

  return (
    <WrapperBottom>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Stack
            sx={{
              alignItems: {
                xs: "center",
                lg: "flex-start",
              },
            }}
          >
            <Title variant="h6">{title_column_1}</Title>
            <Stack
              spacing={1.5}
              sx={{
                alignItems: {
                  xs: "center",
                  lg: "flex-start",
                },
              }}
            >
              {link_in_column_1?.map((el, index) => (
                <Box
                  key={index}
                  onClick={handleClick(el.value.title)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Subtile variant="body1">{el.value.title}</Subtile>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Stack
            sx={{
              alignItems: {
                xs: "center",
                lg: "flex-start",
              },
            }}
          >
            <Title variant="h6">{title_column_2}</Title>
            <Stack
              spacing={1.5}
              sx={{
                alignItems: {
                  xs: "center",
                  lg: "flex-start",
                },
              }}
            >
              {link_in_column_2?.map((el, index) => (
                <Box
                  key={index}
                  onClick={handleClick(el.value.title)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Subtile variant="body1">{el.value.title}</Subtile>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Stack
            sx={{
              alignItems: {
                xs: "center",
                lg: "flex-start",
              },
            }}
          >
            <Title variant="h6">{title_column_3}</Title>
            <Stack
              spacing={1.5}
              sx={{
                alignItems: {
                  xs: "center",
                  lg: "flex-start",
                },
              }}
            >
              <Stack spacing={2} direction="row">
                {social_icons?.map((el, index) => (
                  <Link key={index} href={el.value.link} underline="none">
                    <Image src={el.value.icon} width={SIZE} height={SIZE} alt="icon" />
                  </Link>
                ))}
              </Stack>

              <Stack
                spacing={1}
                sx={{
                  alignItems: {
                    xs: "center",
                    lg: "flex-start",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {email}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {hotline}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {working_desc}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <QRcode isBadge={true} left={true} />
        </Grid>
      </Grid>
    </WrapperBottom>
  );
};

export default FooterBottom;

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    paddingBottom: 20,
  };
});

const Subtile = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.grey[800],
    transition: TRANSITION,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  };
});

const WrapperBottom = styled(Box)(({ theme }) => {
  return {
    paddingTop: 5,
    paddingBottom: 5,
  };
});
