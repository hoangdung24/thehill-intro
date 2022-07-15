import { useMemo } from "react";
import { Tab, Tabs as MuiTabs, Typography, useTheme } from "@mui/material";
import useMedia from "../../hooks/useMedia";
import { Box } from "@mui/system";

const Tabs = ({ value, changeTab, data }) => {
  const { isSmUp } = useMedia();
  const theme = useTheme();
  // console.log("datadata", data);
  if (!data) {
    return null;
  }
  const renderTab = useMemo(() => {
    return data.map((el) => {
      return (
        <Tab
          key={el.id}
          label={el.title}
          value={el.id}
          disableRipple
          sx={[
            {
              textTransform: "capitalize",
              [theme.breakpoints.down("sm")]: {
                paddingLeft: 0,
                paddingRight: 0,
                "&:not(:first-of-type)": {
                  marginLeft: 2,
                },
              },
            },
            isSmUp && {
              minWidth: "120px",
            },
          ]}
        />
      );
    });
  }, [data, isSmUp]);

  if (isSmUp) {
    return (
      <MuiTabs
        TabIndicatorProps={{
          sx: {
            display: "none",
          },
        }}
        value={value}
        onChange={changeTab}
        variant={isSmUp ? "standard" : "fullWidth"}
        sx={[
          {
            margin: "0 auto",
            marginTop: "2.25rem",
            marginBottom: isSmUp ? "2.25rem" : "2rem",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          },

          {
            "& .Mui-selected": {
              color: `${theme.palette.common.white} !important`,
              backgroundColor: theme.palette.secondary.light,
              borderRadius: "5px",
            },
            "& button": {
              minWidth: "auto",
              margin: "0 1rem",
            },
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
              width: "100%",
              margin: "0 auto",
              [theme.breakpoints.down("sm")]: {
                display: "flex",
                overflow: "auto",
              },
            },
          },
        ]}
      >
        {renderTab}
      </MuiTabs>
    );
  } else {
    return (
      <MuiTabs
        TabIndicatorProps={{
          sx: {
            display: "none",
          },
        }}
        value={value}
        onChange={changeTab}
        variant={isSmUp ? "standard" : "fullWidth"}
        sx={{
          marginLeft: "auto",
          marginTop: "2.25rem",
          marginBottom: "2.25rem",
          display: "flex",
          "& .Mui-selected": {
            color: `${theme.palette.common.white} !important`,
            backgroundColor: theme.palette.secondary.light,
            borderRadius: "5px",
          },
          "& button": {
            minWidth: "auto",
            margin: "0 1rem",
          },
          ["& .MuiTabs-flexContainer"]: {
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        {renderTab}
      </MuiTabs>
    );
  }
};

export default Tabs;
