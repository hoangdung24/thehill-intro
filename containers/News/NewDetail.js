import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import { transformUrl } from "../../libs";
import { PAGES } from "../../apis";
import useSWR from "swr";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { ReaderHTML } from "../../components";
import { data } from "autoprefixer";
import queryString from "query-string";
import { useMeasure } from "react-use";
import Link from "../../components/Link";

export default function NewDetail() {
  const router = useRouter();
  const theme = useTheme();
  const [data, setData] = useState();
  const [dataClip, setDataClip] = useState();
  const [stickyRef, { width }] = useMeasure();
  const { data: resData } = useSWR(
    transformUrl(`${PAGES}${router.query.id}`, {})
  );
  useEffect(() => {
    if (!resData) {
      return;
    }

    setData(resData);
    setDataClip(resData?.content[1]?.value.src);
  }, [resData]);

  const renderTags = useMemo(() => {
    if (!resData) {
      return;
    }
    return resData?.tags.map((item, index) => {
      return (
        <Link
          key={index}
          href={`/tin-tuc?tags=${item}`}
          sx={{ textDecoration: "none" }}
        >
          <Button
            disabled
            sx={{
              textTransform: "lowercase",
              backgroundColor: theme.palette.secondary.light,
              borderRadius: "1rem",
              padding: "0.5rem",
            }}
          >
            <Typography
              variant="button1"
              sx={{ color: theme.palette.common.white }}
            >
              {item}
            </Typography>
          </Button>
        </Link>
      );
    });
  }, [resData]);

  let videoId;

  if (dataClip) {
    const { url, query } = queryString.parseUrl(dataClip);

    const { pathname } = new URL(url);

    if (query.v) {
      videoId = query?.v;
    } else {
      videoId = pathname?.replace("/", "");
    }
  }
  return (
    <Box ref={stickyRef}>
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
        <YouTube
          videoId={videoId}
          opts={{
            width: "100%",
            height: (width * 7) / 16,
          }}
        />
        <Box
          sx={{
            "& .MuiBox-root h1": {
              lineHeight: "3rem",
            },
            "& .MuiBox-root h2": {
              lineHeight: "2.5rem",
            },
          }}
        >
          <ReaderHTML content={resData?.content[0].value} />
        </Box>
        <Stack
          direction="row"
          spacing={1}
          sx={{ marginTop: "3rem", marginBottom: "5.5rem" }}
        >
          {renderTags}
        </Stack>
      </Container>
    </Box>
  );
}
