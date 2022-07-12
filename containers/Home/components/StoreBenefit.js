import { Grid, Typography, Box, Container, useTheme } from "@mui/material";
import { useMeasure } from "react-use";
import LineTitle from "../../../components/LineTitle/LineTitle";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

const StoreBenefit = ({ data, ...props }) => {
  const [ref, { width, height }] = useMeasure();
  const { store_title, store_subtitle, store_content, store_image } = data;
  const { isSmDown, isMdDown, isSmUp } = useMedia();
  const theme = useTheme();

  const renderIconBenefit2 = () => {
    return store_content.map((item, index) => {
      return (
        <Grid
          item
          xs={12}
          sm={6}
          md={12}
          key={index}
          sx={{
            "&:last-child": {
              marginBottom: "0",
            },
          }}
        >
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={5} md={3}>
              <Image
                src={item.value.icon}
                width="100%"
                height={
                  isMdDown
                    ? isSmDown
                      ? "calc(20vw * 1.72)"
                      : "calc(12vw * 1.72)"
                    : "calc(5vw * 1.72)"
                }
                objectFit="contain"
              />
            </Grid>
            <Grid item xs={7} md={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.secondary.light,
                      marginBottom: "1rem",
                    }}
                  >
                    {item.value.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    {item.value.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ marginBottom: "3rem" }}>
      <Container maxWidth="lg">
        <LineTitle
          titleData={store_title}
          subtitleData={store_subtitle}
          type="right"
        />
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          marginTop: "4.5rem",
          [theme.breakpoints.down("sm")]: {
            background: "none",
            border: "none",
          },
        }}
      >
        <Grid
          container
          justifyContent="center"
          sx={{
            padding: isMdDown ? "0 1rem" : "0 5rem",
            borderRadius: "1rem",
            height: isSmDown ? "auto" : "100%",
            border: "2px solid rgba(177, 181, 195, 0.1)",
            backgroundColor: "rgba(244, 244, 244, 0.6)",

            [theme.breakpoints.down("sm")]: {
              background: "none",
              border: "none",
            },
          }}
        >
          <Grid
            ref={ref}
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              width: isSmDown ? "80vw" : "40%",

              [theme.breakpoints.down("sm")]: {
                marginTop: "2rem",
              },
            }}
          >
            <Grid
              spacing={isMdDown ? (isSmDown ? 1 : 2) : 4}
              container
              sx={{
                height: "100%",
                alignContent: "space-between",
                padding: "4rem 0",
                paddingRight: "4rem",
                [theme.breakpoints.down("md")]: {
                  padding: "0",
                },
                [theme.breakpoints.down("sm")]: {
                  padding: "0",
                },
              }}
            >
              {renderIconBenefit2()}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            sx={{
              width: isSmDown ? "100%" : "50%",
              height: isMdDown ? (isSmDown ? "70vh" : "80vh") : { height },
            }}
          >
            <Image
              src={store_image}
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StoreBenefit;
