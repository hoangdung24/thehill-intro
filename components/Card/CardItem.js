import { useState, useEffect, Fragment, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useMeasure, useWindowSize, useUpdateEffect } from "react-use";
import { format, parseISO } from "date-fns";

import useMedia from "../../hooks/useMedia";
import { Image } from "../../HOC";
import { useRouter } from "next/router";

const CardItem = ({ data }) => {
  const router = useRouter();
  const theme = useTheme();
  const [minWrapperHeight, setMinWrapperHeight] = useState(0);
  const { isMdUp, isSmUp } = useMedia();
  const [isCompleteLoaded, setIsCompleteLoaded] = useState(false);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const [ref, { width, height }] = useMeasure();
  const [refText, { width: witha, height: heighta }] = useMeasure();
  const [refTun, { width: withb, height: heightb }] = useMeasure();

  // console.log("width", (width * 9) / 16);

  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });
  // console.log("width", width);
  const [isLoading, setIsLoading] = useState(false);

  const contentRef = useRef(null);

  const [contentHeight, setContentHeight] = useState(48);

  useEffect(() => {
    if (contentRef.current) {
      setMinWrapperHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    setContentHeight((prev) => {
      return Math.max(prev, minWrapperHeight);
    });
  }, [minWrapperHeight]);

  useEffect(() => {
    if (width > 0 && !isLoading) {
      setImageSize({
        width: width,
        height: (width * 9) / 16,
      });

      setIsLoading(true);
    }
  }, [width, height, isLoading]);

  useUpdateEffect(() => {
    setImageSize({
      width: width,
      height: (width * 9) / 16,
    });
  }, [windowWidth, windowHeight, width, height]);

  return (
    <Box
      className="slider-wrapper"
      sx={{
        borderRadius: "8px",
        [theme.breakpoints.down("sm")]: {
          marginBottom: "1.8rem",
        },
      }}
    >
      <Box
        ref={ref}
        sx={{
          borderRadius: "8px",
          background:
            "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
          backdropFilter: "blur(4px)",
          border: "2px solid rgba(177, 181, 195, 0.1)",
        }}
      >
        <Box
          sx={{
            padding: 1,
          }}
        >
          <Fragment>
            <Box
              sx={{
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  marginBottom: "1rem",
                  "& .MuiBox-root": {
                    width: "100%",
                  },
                  "& .homeNew": {
                    borderRadius: "8px !important ",
                  },
                }}
              >
                <Image
                  src={data.thumbnail ? data.thumbnail : "/img/Rectangle 5.jpg"}
                  width={imageSize.width}
                  height={imageSize.height}
                  objectFit="cover"
                  onLoadingComplete={() => {
                    setIsCompleteLoaded(true);
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: 1,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
              ref={contentRef}
            >
              <Box
                sx={{
                  height: data.title.length < 40 ? "3rem" : heightb,
                }}
              >
                <Typography
                  ref={refTun}
                  variant="body2_bold"
                  sx={{
                    display: "block",
                    color: theme.palette.secondary.main,
                    marginBottom: "8px",
                  }}
                >
                  {/* {data.title} */}
                  {data.title?.length > 40
                    ? data.title.substr(0, 55) + "..."
                    : data.title}
                </Typography>
              </Box>

              <Typography
                variant="caption2"
                sx={{
                  marginBottom: "8px",
                  color: theme.palette.secondary.light,
                }}
              >
                {format(parseISO(data.last_published_at), "dd/MM/yyyy")}
              </Typography>

              <Box
                sx={{
                  height:
                    data.short_description?.length == undefined
                      ? "4.5rem"
                      : data.short_description?.length < 20
                      ? "4.5rem"
                      : heighta,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left" }}
                  ref={refText}
                >
                  {data.short_description?.length > 10
                    ? data.short_description.substr(0, 85) + "..."
                    : data.short_description}
                </Typography>
              </Box>
            </Box>
          </Fragment>
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
