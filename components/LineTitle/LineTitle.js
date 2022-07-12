import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import useMedia from "../../hooks/useMedia";

const LineTitle = ({ titleData, subtitleData, type }) => {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const theme = useTheme();

  if (type === "right") {
    return (
      <Fragment>
        <Stack
          spacing={4}
          direction="row"
          alignItems="center"
          sx={{
            marginTop: "5.5rem",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: "1",
              display: isSmDown ? "none" : "block",
            }}
          >
            <Box
              sx={{
                color: theme.palette.secondary.main,
                position: "relative",
                border: `1px solid ${theme.palette.secondary.main}`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  top: "50%",
                  right: 0,
                  zIndex: 1,
                  background: theme.palette.secondary.main,
                  transform: "rotate(45deg) translateY(-70%)",
                },
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              marginLeft: 0,
              [theme.breakpoints.down("sm")]: {
                marginLeft: "0 !important",
              },
            }}
          >
            <Typography
              variant={isSmDown ? "h3" : "h4"}
              sx={{ color: theme.palette.secondary.main, textAlign: "center" }}
            >
              {titleData}
            </Typography>
          </Box>
        </Stack>
        <Typography
          variant="body1"
          sx={{
            marginTop: "2rem",
            color: theme.palette.secondary.light,
            textAlign: "right",
            display: isSmDown ? "none" : "block",
          }}
        >
          {subtitleData}
        </Typography>
      </Fragment>
    );
  } else if (type === "left") {
    return (
      <Fragment>
        <Stack
          spacing={4}
          direction="row"
          alignItems="center"
          sx={{
            paddingTop: "2.5rem",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box>
            <Typography
              variant={isSmDown ? "h3" : "h4"}
              sx={{ color: theme.palette.primary.main }}
            >
              {titleData}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: "1", display: isSmDown ? "none" : "block" }}>
            <Box
              sx={{
                color: theme.palette.primary.main,
                position: "relative",
                border: "1px solid red",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  top: "50%",
                  left: -10,
                  zIndex: 1,
                  background: "red",
                  transform: "rotate(45deg) translateY(-70%)",
                },
              }}
            ></Box>
          </Box>
        </Stack>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.main,
            textAlign: "left",
            display: isSmDown ? "none" : "block",
          }}
        >
          {subtitleData}
        </Typography>
      </Fragment>
    );
  } else if (type === "center") {
    return (
      <Fragment>
        <Stack
          direction="row"
          justifyContent={isSmDown ? "center" : "normal"}
          alignItems="center"
          sx={[{ paddingTop: "2.5rem" }, isSmDown && { paddingTop: "2rem" }]}
        >
          <Box
            sx={[
              { marginRight: "2.5rem", flexGrow: "1" },
              isSmDown && { display: "none" },
            ]}
          >
            <Box
              sx={{
                color: theme.palette.secondary.main,
                position: "relative",
                border: `1px solid ${theme.palette.secondary.main}`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  top: "50%",
                  right: 0,
                  zIndex: 1,
                  background: theme.palette.secondary.main,
                  transform: "rotate(45deg) translateY(-70%)",
                },
              }}
            ></Box>
          </Box>
          <Box>
            <Typography
              variant={isSmDown ? "h3" : "h4"}
              sx={{ color: theme.palette.secondary.main, textAlign: "center" }}
            >
              {titleData}
            </Typography>
          </Box>
          <Box
            sx={[
              { flexGrow: "1", marginLeft: "2.5rem" },
              isSmDown && { display: "none" },
            ]}
          >
            <Box
              sx={{
                color: theme.palette.secondary.main,
                position: "relative",
                border: `1px solid ${theme.palette.secondary.main}`,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "10px",
                  height: "10px",
                  top: "50%",
                  left: -10,
                  zIndex: 1,
                  background: theme.palette.secondary.main,
                  transform: "rotate(45deg) translateY(-70%)",
                },
              }}
            ></Box>
          </Box>
        </Stack>
      </Fragment>
    );
  }
};

export default LineTitle;
