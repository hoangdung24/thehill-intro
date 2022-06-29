import { useState, useEffect, Fragment, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useMeasure, useWindowSize, useUpdateEffect } from "react-use";

import useMedia from "../../hooks/useMedia";
import { Image } from "../../HOC";

const CardItem = ({ data }) => {
  // console.log("CardItem", data);
  const theme = useTheme();
  const [minWrapperHeight, setMinWrapperHeight] = useState(0);
  const { isMdUp, isSmUp } = useMedia();
  const [isCompleteLoaded, setIsCompleteLoaded] = useState(false);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const [ref, { width, height }] = useMeasure();

  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });

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
        height: (width * 3) / 4,
      });

      setIsLoading(true);
    }
  }, [width, height, isLoading]);

  useUpdateEffect(() => {
    setImageSize({
      width: width,
      height: (width * 3) / 4,
    });
  }, [windowWidth, windowHeight, width, height]);

  return (
    <Box className="slider-wrapper" sx={[{ borderRadius: "8px" }]}>
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
                  src={data.banner ? data.banner : "/img/Rectangle 5.jpg"}
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
              }}
              ref={contentRef}
            >
              <Typography
                variant="body2_bold"
                sx={{
                  color: theme.palette.secondary.main,
                  marginBottom: "8px",
                }}
              >
                {/* {data.title} */}
                {data.title?.length > 25
                  ? data.title.substr(0, 25) + "..."
                  : data.title}
              </Typography>

              <Typography
                variant="caption2"
                sx={{
                  marginBottom: "8px",
                  color: theme.palette.secondary.light,
                }}
              >
                {data.last_published_at}
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: "left", color: theme.palette.common.natural3 }}
              >
                {data.short_description}
              </Typography>
            </Box>
          </Fragment>
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
