import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import BannerTop from "../../components/BannerTop/BannerTop";

export default function PageNews() {
  return (
    <Box>
      <BannerTop />
      <Container maxWidth="lg">
        <Typography variant="">What is Lorem Ipsum?</Typography>

        <Stack direction="row" spacing={2}>
          <Button>eating</Button>
          <Button>drinking</Button>
          <Button>playing</Button>
        </Stack>
      </Container>
    </Box>
  );
}
