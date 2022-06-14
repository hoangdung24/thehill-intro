import { Box, Grid } from "@mui/material";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import CardBrand from "../../components/Card/CardBrand";
import LineTitle from "../../components/LineTitle/LineTitle";
import TabPanel from "../../components/TabPanel/TabPanel";
import Tabs from "../../components/TabPanel/Tabs";
import { Image } from "../../HOC";

const valuelineTitle = {
  title: "Đối Tác",
  subTitle:
    "Sơ lược những tính năng giúp khách hàng có thể ăn uống và mua sắm thỏa thích",
};

const arrayHomeNews = [
  {
    img: "/logoBrand/image 8-1.png",
    title: "Điểm Tích Lũy: 10",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 0,
  },
  {
    img: "/logoBrand/image 8-1.png",
    title: "Điểm Tích Lũy: 10",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 0,
  },
  {
    img: "/logoBrand/image 8-1.png",
    title: "Điểm Tích Lũy: 10",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 0,
  },
  {
    img: "/logoBrand/image 8-1.png",
    title: "Điểm Tích Lũy: 10",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 0,
  },
  {
    img: "/logoBrand/image 8-2.png",
    title: "Điểm Tích Lũy: 11",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 1,
  },
  {
    img: "/logoBrand/image 8-3.png",
    title: "Điểm Tích Lũy: 12",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 2,
  },
  {
    img: "/logoBrand/image 8.png",
    title: "Điểm Tích Lũy: 13",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 3,
  },
  {
    img: "/logoBrand/image 8.png",
    title: "Điểm Tích Lũy: 14",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 4,
  },
  {
    img: "/logoBrand/image 8.png",
    title: "Điểm Tích Lũy: 15",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    category: 5,
  },
];

const partnerValue = [
  { id: 0, name: "Tất Cả" },
  { id: 1, name: "Tất Cả" },
  { id: 2, name: "Tất Cả" },
  { id: 3, name: "Tất Cả" },
  { id: 4, name: "Tất Cả" },
  { id: 5, name: "Tất Cả" },
];

export default function Partner() {
  console.log("partnerValue", partnerValue[0].id);
  const [currentTab, setCurrentTab] = useState(partnerValue[0].id);
  const [animationState, setAnimationState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const animationHandler = useCallback(() => {
    setAnimationState(false);

    const timer = setTimeout(() => {
      setAnimationState(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const changeTabHandler = useCallback((event, newValue) => {
    setCurrentTab(newValue);
    console.log("newValue", newValue);
    setCurrentPage(1);
    animationHandler();
  }, []);

  const renderTabs = useMemo(() => {
    if (!partnerValue) {
      return null;
    }

    return (
      <Tabs
        value={currentTab}
        changeTab={changeTabHandler}
        data={partnerValue}
      />
    );
  }, [partnerValue, currentTab]);

  const renderTabPanel = useMemo(() => {
    if (!partnerValue) {
      return null;
    }
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMULA PAGE = (OFFSET / LIMIT) + 1

    let filteredData = arrayHomeNews.filter((el) => {
      return el.category == currentTab;
    });

    console.log("filteredData", filteredData[0].title);

    return partnerValue.map((item, index) => {
      return (
        <TabPanel key={index} value={currentTab} index={index}>
          <Grid
            container
            columnSpacing={10}
            sx={{
              marginBottom: "3.5rem",
              paddingBottom: "3.5rem",
              height: "100%",
            }}
          >
            {filteredData.map((el, i) => {
              return (
                <Grid item key={index} xs={3}>
                  <CardBrand data={el} />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      );
    });

    //
  }, [arrayHomeNews, currentTab, currentPage]);

  return (
    <Box>
      <BannerTop />
      <Box sx={{ width: "80vw", margin: "0 auto" }}>
        <LineTitle data={valuelineTitle} type="center" />
        {renderTabs}
        <Box sx={{ height: "25rem", marginBottom: "6rem" }}>
          <Image
            {...{
              src: "/img/Rectangle 5.jpg",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {renderTabPanel}
      </Box>
    </Box>
  );
}
