import { useMemo } from "react";
import { Tab, Tabs as MuiTabs, useTheme } from "@mui/material";
import useMedia from "../../hooks/useMedia";

const Tabs = ({ value, changeTab, data }) => {
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

  return (
    <MuiTabs
      className="dasdasdadadad"
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
          marginTop: "5.5rem",
          marginBottom: isSmUp ? "5.5rem" : "2rem",
        },
        {
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
            width: "100%",
            margin: "0 auto",
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexWrap: "wrap",
            },
          },
        },
      ]}
    >
      {renderTab}
    </MuiTabs>
  );
};

export default Tabs;
