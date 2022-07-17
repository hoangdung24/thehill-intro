import { useMeasure } from "react-use";
import { Box, Grid, Typography } from "@mui/material";

import { Image } from "../../../HOC";

import { LineTitle, Container } from "../../../components";
import { useMedia } from "../../../hooks";

export default function ExchangePointsHome({ data }) {
  const { about_title, about_content } = data;
  const { isMdDown } = useMedia();

  return (
    <Container
      id="about"
      maxWidth="lg"
      sx={[
        {
          paddingBottom: 10,
        },
        isMdDown && {
          paddingBottom: 6,
        },
      ]}
    >
      <Box
        sx={[
          {
            paddingTop: 5,
            paddingBottom: 8,
          },
          isMdDown && {
            paddingBottom: 5,
          },
        ]}
      >
        <LineTitle type="left" titleData={about_title} />
      </Box>

      <Grid container rowSpacing={4} columnSpacing={8} justifyContent="center">
        {about_content.map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <CardItem data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

const CardItem = ({ data }) => {
  const [ref, { width }] = useMeasure();
  const { image, description } = data.value;

  return (
    <Box ref={ref}>
      <Image
        {...{
          src: image,
          width: "100%",
          height: (width * 420) / 315,
          objectFit: "cover",
        }}
      />
      <Typography variant="body2" sx={{ marginTop: "1.5rem", textAlign: "justify" }}>
        {description}
      </Typography>
    </Box>
  );
};
