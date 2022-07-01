import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import { transformUrl } from "../../libs";
import { PAGES } from "../../apis";
import useSWR from "swr";
import { useRouter } from "next/router";
import { ReaderHTML } from "../../components";

export default function NewDetail() {
  const router = useRouter();
  const theme = useTheme();

  const { data: resData } = useSWR(
    transformUrl(`${PAGES}${router.query.id}`, {})
  );

  const renderTags = () => {
    if (!resData) {
      return;
    }
    return resData?.tags.map((item, index) => {
      return (
        <Button key={index} sx={{ textTransform: "lowercase" }}>
          <Typography variant="body1">{item}</Typography>
        </Button>
      );
    });
  };

  return (
    <Box>
      <BannerTop data={resData?.banner} />
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.secondary.main,
            textAlign: "center",
            marginTop: "2.5rem",
            marginBottom: "5.5rem",
          }}
        >
          {resData?.title}
        </Typography>
        {resData?.content[1] && (
          <iframe
            width="100%"
            height={resData?.content[1]?.value.height}
            src={resData?.content[1]?.value.src}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        <ReaderHTML content={resData?.content[0].value} />
        <Stack
          direction="row"
          spacing={1}
          sx={{ marginTop: "3rem", marginBottom: "5.5rem" }}
        >
          {renderTags()}
        </Stack>
      </Container>
    </Box>
  );
}
