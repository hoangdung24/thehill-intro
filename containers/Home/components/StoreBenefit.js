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

const StoreBenefit = ({ data, ...props }) => {
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
          marginTop: "4.5rem",
          backgroundColor: "rgba(244, 244, 244, 0.6)",
          borderRadius: "1rem",
        }}
      >
        <Stack
          direction="row"
          spacing={10}
          justifyContent="center"
          sx={{ height: "90vh" }}
        >
          <Box sx={{ width: "35%", padding: "0" }}>
            <Grid
              container
              className="sadasdaadadadadad"
              sx={{ height: "100%", alignContent: "center" }}
            >
              {renderIconBenefit()}
            </Grid>
          </Box>

          <Box item sx={{ width: "40%", height: "100%" }}>
            <Image
              src="/img/phonethehill-04.png"
              width="100%"
              height="100%"
              // objectFit="contain"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default StoreBenefit;

{
  /* <Wrapper>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid
            item
            lg={6}
            sx={{
              paddingLeft: {
                xs: "0px !important",
                lg: "24px !important",
              },
            }}
          >
            <Box
              sx={{
                pointerEvents: "none",
                overflow: "hidden",
                width: {
                  lg: "100%",
                },
              }}
            >
              <Image
                src={data.store_image}
                WrapperProps={{
                  sx: {
                    width: {
                      lg: "100%",
                      xs: "calc(100vw + 24px)",
                    },
                  },
                }}
                height={SIZE}
                objectFit="cover"
              />
            </Box>
          </Grid>

          <Grid item lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {data.store_title}
                </Typography>
                <ReaderHTML content={data.store_desc} />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  {data.store_content?.map((el, index) => {
                    const { value } = el;

                    return (
                      <Grid key={index} item xs={12} sm={6}>
                        <CustomerCard icon={value.icon} desc={value.desc} title={value.title} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Wrapper> */
}
