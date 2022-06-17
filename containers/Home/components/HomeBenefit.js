import {
  Grid,
  Typography,
  Box,
  Container,
  Stack,
  useTheme,
} from "@mui/material";
import { CustomerCard, ReaderHTML } from "../../../components";
import LineTitle from "../../../components/LineTitle/LineTitle";
import { Image } from "../../../HOC";
const SIZE = 300;

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
  const theme = useTheme();

  const renderIconBenefit = () => {
    return arrayHomeNews.map((item, index) => {
      return (
        <Grid
          key={index}
          item
          xs={12}
          sx={{
            // marginBottom: "3rem",
            height: "22%",
            "&:last-child": {
              marginBottom: "0",
            },
          }}
          className="gridItemd"
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{ height: "100%", alignItems: "center" }}
          >
            <Box sx={{ width: "27%", height: "100%" }}>
              <Image
                layout="fill"
                src={item.img}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>

            <Box sx={{ width: "73%" }}>
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
        <LineTitle data={valuelineTitle} type="right" />
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          border: "2px solid rgba(177, 181, 195, 0.1)",
          borderRadius: "1rem",
          backgroundColor: "rgba(244, 244, 244, 0.6)",
          marginTop: "4.5rem",
        }}
      >
        <Stack
          direction="row"
          spacing={10}
          justifyContent="center"
          sx={{ height: "90vh" }}
        >
          <Box item sx={{ width: "40%", height: "100%" }}>
            <Image
              src="/img/phonethehill-04.png"
              width="100%"
              height="100%"
              // objectFit="contain"
            />
          </Box>
          <Box sx={{ width: "35%", padding: "0" }}>
            <Grid
              container
              className="sadasdaadadadadad"
              sx={{ height: "100%", alignContent: "center" }}
            >
              {renderIconBenefit()}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomeBenefit;
