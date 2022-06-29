import { useMemo } from "react";
import { Tab, Tabs as MuiTabs, useTheme } from "@mui/material";
import useMedia from "../../hooks/useMedia";
import { Box } from "@mui/system";

const Tabscoppy = ({ value, changeTab, data }) => {
  const { isSmUp } = useMedia();
  const theme = useTheme();

  const renderTab = useMemo(() => {
    return data.map((el) => {
      return (
        <Tab
          key={el.id}
          label={el.name}
          value={el.id}
          disableRipple
          sx={[
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
            width: "75vw",
            margin: "0 auto",
            marginTop: "2.25rem",
            marginBottom: isSmUp ? "2.25rem" : "2rem",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          },

          {
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
          width: "90%",
          marginLeft: "auto",
          marginTop: "2.25rem",
          marginBottom: "2.25rem",
          display: "flex",

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

export default Tabscoppy;