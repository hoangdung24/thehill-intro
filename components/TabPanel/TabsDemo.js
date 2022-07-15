import { useMemo } from "react";
import { Tab, Tabs as MuiTabs, Typography, useTheme } from "@mui/material";
import useMedia from "../../hooks/useMedia";
import { Box } from "@mui/system";
import Slider from "react-slick";

const Tabs = ({ value, changeTab, data, handleDemo }) => {
  const settings = {
    className: "isileft",
    leftMode: true,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    // beforeChange: changeTab,
  };
  const { isSmUp } = useMedia();
  const theme = useTheme();
  // console.log("datadata", data);
  if (!data) {
    return null;
  }
  const renderTab = useMemo(() => {
    if (isSmUp) {
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
    } else {
      return (
        <Box
          className="asdaadas"
          sx={{
            width: "100%",
            "& .slick-slide ": {
              // display: "none !important",
              width: "1rem",
              margin: "0 2rem",
            },
            "& .slick-track ": {
              display: "flex",
            },
            "& .slick-current ": {
              backgroundColor: [theme.palette.secondary.light],
              color: "white",
              borderRadius: "4px",
              opacity: 1,
              // margin: "0 7rem",
            },
          }}
        >
          <Slider {...settings}>
            {data.map((el) => {
              console.log("data", data);
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
            })}
          </Slider>
        </Box>
      );
    }
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
            "& .Mui-selected": {
              color: `${theme.palette.common.white} !important`,
              backgroundColor: theme.palette.secondary.light,
              borderRadius: "5px",
            },
            "& button": {
              margin: "0 0.5rem",
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
          // width: "90%",
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

export default Tabs;
