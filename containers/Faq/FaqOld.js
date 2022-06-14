import { useCallback, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Container, Grid, Box, Fade, Button, Stack } from "@mui/material";

import Card from "./components/Card";
import Title from "./components/Title";
import Banner from "./components/Banner";
import FaqDetail from "./components/FaqDetail";

const faq = ({ ...props }) => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const { initFaqPage, initFaqDetailList } = props;

  const faqDetailList = initFaqDetailList?.items;
  const metadata = initFaqPage?.items?.[0];

  const selectedFaqHandler = useCallback((id) => {
    return () => {
      setSelectedFaq(id);
    };
  }, []);

  return (
    <Box paddingBottom={5}>
      <Banner data={metadata} />

      <Container
        sx={{
          maxWidth: {
            xs: "100%",
            lg: "70%",
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Title data={metadata} />
          </Grid>

          {selectedFaq === null &&
            faqDetailList.map((el) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={el.id}>
                  <Box sx={{ cursor: "pointer" }} onClick={selectedFaqHandler(el)}>
                    <Card data={el} />
                  </Box>
                </Grid>
              );
            })}

          {selectedFaq && (
            <Fade in={!!selectedFaq}>
              <Grid item xs={12}>
                <Stack>
                  <Button
                    startIcon={<ArrowBackIcon />}
                    sx={{
                      width: "fit-content",
                      borderRadius: "24px",
                      marginBottom: 3,
                    }}
                    variant="outlined"
                    onClick={selectedFaqHandler(null)}
                  >
                    Trở về
                  </Button>

                  <FaqDetail data={selectedFaq} />
                </Stack>
              </Grid>
            </Fade>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default faq;
