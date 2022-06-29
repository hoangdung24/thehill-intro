import {
  Grid,
  Typography,
  Box,
  Container,
  Stack,
  useTheme,
} from "@mui/material";
import LineTitle from "../../../components/LineTitle/LineTitle";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

const arrayHomeNews = [
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5-2.png",
  },
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5-1.png",
  },
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5-3.png",
  },
  {
    img: "/benefitUser/The Hill Member Landing Page (2)/Rectangle 5.png",
  },
];

const valuelineTitle = {
  title: "Vé Đổi Điểm",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

const HomeBenefit = ({ data, ...props }) => {
  const { customer_title, customer_subtitle } = data;
  const { isSmDown } = useMedia();
  const theme = useTheme();

  const renderIconBenefit = () => {
    return arrayHomeNews.map((item, index) => {
      return (
        <Grid
          key={index}
          item
          xs={12}
          sx={{
            height: "22%",
            "&:last-child": {
              marginBottom: "0",
            },
            [theme.breakpoints.down("sm")]: {
              marginBottom: "3rem",
            },
          }}
          className="gridItemd"
        >
          <Stack
            direction="row"
            spacing={isSmDown ? 2 : 3}
            sx={{ height: isSmDown ? "20vh" : "100%", alignItems: "center" }}
          >
            <Box sx={{ width: isSmDown ? "35%" : "27%", height: "100%" }}>
              <Image
                layout="fill"
                src={item.img}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>

            <Box sx={{ width: isSmDown ? "65%" : "73%" }}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.secondary.light,
                  marginBottom: "1rem",
                }}
              >
                Tích Điểm
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit ametsdsssd consectetur adipiscing elit
              </Typography>
            </Box>
          </Stack>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ marginBottom: "3rem" }}>
      <Container maxWidth="lg">
        <LineTitle
          titleData={customer_title}
          subtitleData={customer_subtitle}
          type="right"
        />
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          marginTop: "3rem",
          [theme.breakpoints.down("sm")]: {
            background: "none",
            border: "none",
          },
        }}
      >
        <Stack
          direction={isSmDown ? "column" : "row"}
          alignItems={isSmDown ? "center" : "none"}
          spacing={isSmDown ? 5 : 0}
          justifyContent="center"
          sx={{
            borderRadius: "1rem",
            height: isSmDown ? "auto" : "65vh",
            border: "2px solid rgba(177, 181, 195, 0.1)",
            backgroundColor: "rgba(244, 244, 244, 0.6)",

            [theme.breakpoints.down("sm")]: {
              background: "none",
              border: "none",
            },
          }}
        >
          <Box
            item
            sx={{
              width: isSmDown ? "100%" : "50%",
              height: isSmDown ? "95vh" : "100%",
            }}
          >
            <Image
              src="/img/phonethehill-04.png"
              width="100%"
              height="100%"
              // objectFit="contain"
            />
          </Box>
          <Box sx={{ width: isSmDown ? "80vw" : "40%", padding: "0" }}>
            <Grid container sx={{ height: "100%", alignContent: "center" }}>
              {renderIconBenefit()}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomeBenefit;
