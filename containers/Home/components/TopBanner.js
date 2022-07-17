import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { Fragment, Suspense, useEffect, useMemo, useState } from "react";

import { Box, Stack, styled, Grid } from "@mui/material";
import { ReaderHTML, Container } from "../../../components";
import { Image } from "../../../HOC";
import useMedia from "../../../hooks/useMedia";

const ModelContainer = dynamic(() => import("./ModelContainer"), {
  ssr: false,
});

export default function HomeBanner({ data }) {
  const { banner, subtitle } = data;
  const { isMdDown, isLgDown, isSmDown, isMdUp } = useMedia();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const ModelMomo = useMemo(() => {
    if (!isReady) {
      return null;
    }

    return (
      <Fragment>
        <Canvas shadows>
          <Suspense fallback={null}>{/* <ModelContainer /> */}</Suspense>
        </Canvas>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: isMdDown ? "0%" : "50%",
            width: isMdDown ? "100%" : "50%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          <Point
            sx={{
              top: "25%",
              left: "25%",
              position: "absolute",
            }}
          >
            <PointLabel>?</PointLabel>
            <PointText className="help-text">
              Lorem ipsum dolor sit amet sit amet sit amet elit.
            </PointText>
          </Point>
          <Point
            sx={{
              top: "75%",
              left: "25%",
            }}
          >
            <PointLabel>?</PointLabel>
            <PointText className="help-text">
              Lorem ipsum dolor sit amet sit amet sit amet elit.
            </PointText>
          </Point>
          <Point
            sx={{
              top: "25%",
              left: "75%",
            }}
          >
            <PointLabel>?</PointLabel>
            <PointText className="help-text">
              Lorem ipsum dolor sit amet sit amet sit amet elit.
            </PointText>
          </Point>
          <Point
            sx={{
              top: "75%",
              left: "75%",
            }}
          >
            <PointLabel>?</PointLabel>
            <PointText className="help-text">
              Lorem ipsum dolor sit amet sit amet sit amet elit.
            </PointText>
          </Point>
        </Box>
      </Fragment>
    );
  }, [isReady, isMdDown]);

  if (!isReady) {
    return null;
  }

  if (isMdDown) {
    return (
      <Box>
        <Container
          sx={{
            backgroundColor: "common.neutral3",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  "& *": {
                    margin: 0,
                    marginBottom: "0.5rem",
                  },
                  "& h1": {
                    fontSize: "2rem",
                  },
                  "& p": {
                    fontSize: "1rem",
                  },
                  paddingY: 4,
                }}
              >
                <ReaderHTML data={{ content: subtitle }} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box
          style={{
            height: "100vh",
            position: "relative",
          }}
        >
          {ModelMomo}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        height: "90vh",
        position: "relative",
        minHeight: "600px",
      }}
    >
      {ModelMomo}

      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "10rem",
          width: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          ...(isLgDown && {
            left: "5rem",
          }),
          ...(isMdDown && {
            left: "1.5rem",
          }),
        }}
      >
        <Box
          sx={{
            "& *": {
              margin: 0,
              marginBottom: "1rem",
            },
            // "& h1": {
            //   fontSize: "3rem",
            // },
            // "& p": {
            //   fontSize: "1rem",
            // },
            // paddingY: 4,
          }}
        >
          <ReaderHTML data={{ content: subtitle }} />
        </Box>

        <Stack direction="row" spacing={3}>
          <Image
            {...{
              src: "/img/image 3.png",
              width: "120px",
              height: "60px",
              objectFit: "contain",
            }}
          />
          <Image
            {...{
              src: "/img/image 4 (1).png",
              width: "120px",
              height: "60px",
              objectFit: "contain",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

const Point = styled(Box)(() => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    ["&:hover .help-text"]: {
      opacity: 1,
    },
  };
});

const PointLabel = styled(Box)(() => {
  return {
    position: "absolute",
    top: "-20px",
    left: "-20px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#00000077",
    border: "1px solid #ffffff77",
    color: "#ffffff",
    textAlign: "center",
    cursor: "help",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const PointText = styled(Box)(() => {
  return {
    position: "absolute",
    top: "30px",
    width: "120px",
    padding: "20px",
    borderRadius: "4px",
    background: "#00000077",
    border: "1px solid #ffffff77",
    color: "#ffffff",
    lineHeight: "1.3em",
    fontSize: "14px",
    opacity: 0,
    transition: "opacity 0.3s",
    pointerEvents: "none",
    transform: "translateX(-50%)",
  };
});
