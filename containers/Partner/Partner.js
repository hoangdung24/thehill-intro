import { useCallback, useState } from "react";
import { Container, Grid, Box, Stack } from "@mui/material";

import PartnerCategoryItem from "./components/PartnerCategoryItem";
import Title from "./components/Title";
import Banner from "./components/Banner";
import PartnerList from "./components/PartnerList";

const DUMB_IMAGE = "/icon-all.png";

const Partner = ({ ...props }) => {
  const [selectedPartner, setSelectedPartner] = useState("all");

  const { initPartnerPage, initPartnerDetailList } = props;

  let partnerDetailList = initPartnerDetailList?.items;

  const metadata = initPartnerPage?.items?.[0];
  const thumbnail = metadata?.["all_category_thumbnail"];

  const selectedPartnerHandler = useCallback((id) => {
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

          <Grid item xs={12}>
            <Stack direction={"row"} justifyContent="space-between" flexWrap={"wrap"}>
              {[{ id: "all", title: "Tất cả", thumbnail: thumbnail }, ...partnerDetailList].map(
                (el) => {
                  return (
                    <PartnerCategoryItem
                      onClick={selectedPartnerHandler(el.id)}
                      data={el}
                      key={el.id}
                      sx={{
                        cursor: "pointer",
                        marginBottom: 2,
                        marginX: 2,
                      }}
                    />
                  );
                }
              )}
            </Stack>
          </Grid>

          <Grid item xs={12}>
            {partnerDetailList.map((el) => {
              if (selectedPartner === "all") {
                return (
                  <PartnerList
                    key={el.id}
                    data={el}
                    sx={{
                      marginBottom: 8,
                    }}
                  />
                );
              }

              if (el.id === selectedPartner) {
                return (
                  <PartnerList
                    key={el.id}
                    data={el}
                    sx={{
                      marginBottom: 8,
                    }}
                  />
                );
              } else {
                return null;
              }
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partner;
