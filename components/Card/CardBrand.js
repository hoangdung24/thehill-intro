import { useState, useEffect, Fragment, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useMeasure, useWindowSize, useUpdateEffect } from "react-use";

import useMedia from "../../hooks/useMedia";
import { Image } from "../../HOC";

const CardBrand = ({ data, ...props }) => {
  const theme = useTheme();
  const [minWrapperHeight, setMinWrapperHeight] = useState(0);
  const { isMdUp, isSmUp, isSmDown } = useMedia();
  const [isCompleteLoaded, setIsCompleteLoaded] = useState(false);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const [ref, { width, height }] = useMeasure();
  const [refText, { width: witha, height: heighta }] = useMeasure();

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
      height: (width * 1.4) / 4,
    });
  }, [windowWidth, windowHeight, width, height]);

  return (
    <Box className="slider-wrapper" sx={{ borderRadius: "8px" }}>
      <Box
        ref={ref}
        sx={{
          // margin: isSmDown ? "15px" : 0,
          borderRadius: "0.62rem",
          background:
            "linear-gradient(rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.2))",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.15)",
          [theme.breakpoints.down("sm")]: {
            marginBottom: "4rem",
          },
        }}
      >
        <Box
          sx={{
            padding: 1,

            [theme.breakpoints.down("sm")]: {
              // width: "50vw",
            },
          }}
        >
          <Fragment>
            <Box
              sx={{
                // width: "50%",
                margin: "0 auto",
                overflow: "hidden",
                // height: "5rem",
              }}
            >
              <Box
                sx={{
                  height: "5rem",
                  "& .MuiBox-root": {
                    width: "100%",
                    height: "100%",
                  },
                  "& .homeNew": {
                    borderRadius: "8px !important ",
                  },
                }}
              >
                <Image
                  layout="fill"
                  src={data.image}
                  width="50%"
                  height={imageSize.height}
                  objectFit="contain"
                  onLoadingComplete={() => {
                    setIsCompleteLoaded(true);
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              ref={contentRef}
            >
              <Typography
                variant="body2_bold"
                sx={{
                  color: theme.palette.primary.light,
                  // flexGrow: 1,
                  marginBottom: "8px",
                }}
              >
                {data.is_point_earned === true
                  ? `Điểm Tích Luỹ: ${data.point}`
                  : "Không Tích Điểm"}
              </Typography>

              <Box sx={{ height: heighta }}>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left" }}
                  ref={refText}
                >
                  {data.description?.length > 50
                    ? data.description.substr(0, 50) + "..."
                    : data.description}
                </Typography>
              </Box>
            </Box>
          </Fragment>
        </Box>
      </Box>
    </Box>
  );
};

export default CardBrand;
