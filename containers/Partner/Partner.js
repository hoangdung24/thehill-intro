import { useCallback, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Container, Grid, Box, Fade, Button, Stack } from "@mui/material";

import Card from "./components/Card";
import Title from "./components/Title";
import Banner from "./components/Banner";
import PartnerDetail from "./components/PartnerDetail";

const Partner = ({ ...props }) => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const { initPartnerPage, initPartnerDetailList } = props;

  const partnerDetailList = initPartnerDetailList?.items;
  const metadata = initPartnerPage?.items?.[0];

  const selectedPartner1Handler = useCallback((id) => {
    return () => {
      setSelectedPartner(id);
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

          {selectedPartner === null &&
            partnerDetailList.map((el) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={el.id}>
                  <Box sx={{ cursor: "pointer" }} onClick={selectedPartner1Handler(el)}>
                    <Card data={el} />
                  </Box>
                </Grid>
              );
            })}

          {selectedPartner && (
            <Fade in={!!selectedPartner}>
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
                    onClick={selectedPartner1Handler(null)}
                  >
                    Trở về
                  </Button>

                  <PartnerDetail data={selectedPartner} />
                </Stack>
              </Grid>
            </Fade>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Partner;
