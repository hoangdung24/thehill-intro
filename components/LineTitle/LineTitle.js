import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import useMedia from "../../hooks/useMedia";

const LineTitle = ({ data, type }) => {
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
            paddingTop: "2.5rem",
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
          <Box sx={{ marginLeft: 0 }}>
            <Typography
              variant={isSmDown ? "h6" : "h4"}
              sx={{ color: theme.palette.secondary.main }}
            >
              LỢI ÍCH CỦA KHÁCH HÀNG
            </Typography>
          </Box>
        </Stack>
        {data.subTitle ? (
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.secondary.light,
              textAlign: "right",
              display: isSmDown ? "none" : "block",
            }}
          >
            {data.subTitle}
          </Typography>
        ) : (
          ""
        )}
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
              variant={isSmDown ? "h6" : "h4"}
              sx={{ color: theme.palette.primary.main }}
            >
              {data.title}
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
        {data.subTitle ? (
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.primary.light,
              display: isSmDown ? "none" : "block",
            }}
          >
            {data.subTitle}
          </Typography>
        ) : (
          ""
        )}
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
              variant="hairline4"
              sx={{ color: theme.palette.secondary.main }}
            >
              {data.title}
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
