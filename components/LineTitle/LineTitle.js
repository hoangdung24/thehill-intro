import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { Fragment } from "react";

// export default function LineTitle({ data, type }) {
//   console.log("datadata", type);
//   const theme = useTheme();
//   return (
//       <Fragment>

//       <Stack direction="row" alignItems="center" sx={{ paddingTop: "2.5rem" }}>
//         <Box sx={{ marginRight: "40px" }}>
//           <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
//             {data.title}
//           </Typography>
//         </Box>
//         <Box sx={{ flexGrow: "1" }}>
//           <Box
//             sx={{
//               color: theme.palette.primary.main,
//               position: "relative",
//               border: "1px solid red",
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 width: "10px",
//                 height: "10px",
//                 top: "50%",
//                 left: -10,
//                 zIndex: 1,
//                 background: "red",
//                 transform: "rotate(45deg) translateY(-70%)",
//               },
//             }}
//           ></Box>
//         </Box>
//       </Stack>
//       {data.subTitle ? (
//         <Typography variant="body1" sx={{ color: theme.palette.primary.light }}>
//           {data.subTitle}
//         </Typography>
//       ) : (
//         ""
//       )}
//     </Fragment>
//   );
// }

const LineTitle = ({ data, type }) => {
  const theme = useTheme();
  if (type === "right") {
    return (
      <Fragment>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ paddingTop: "2.5rem" }}
        >
          <Box sx={{ marginRight: "40px", flexGrow: "1" }}>
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
              variant="h3"
              sx={{ color: theme.palette.secondary.main }}
            >
              {data.title}
            </Typography>
          </Box>
        </Stack>
        {data.subTitle ? (
          <Typography
            variant="body1"
            sx={{ color: theme.palette.secondary.light, textAlign: "right" }}
          >
            {data.subTitle}
          </Typography>
        ) : (
          ""
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ paddingTop: "2.5rem" }}
        >
          <Box sx={{ marginRight: "40px" }}>
            <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
              {data.title}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: "1" }}>
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
            sx={{ color: theme.palette.primary.light }}
          >
            {data.subTitle}
          </Typography>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
};

export default LineTitle;
