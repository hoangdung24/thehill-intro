import { Container, Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useMemo, useState } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import InputSearch from "../../components/Input/InputSearch";
import LineTitle from "../../components/LineTitle/LineTitle";
import TabPanel from "../../components/TabPanel/TabPanel";
import Tabs from "../../components/TabPanel/Tabs";
import useMedia from "../../hooks/useMedia";
import CardItem from "../../components/Card/CardItem";
import Pagination from "../../components/Pagination";

const valuelineTitle = {
  title: "Tin Tức",
};
const arrayHomeNews = [
  {
    category: 0,

    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,

    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,

    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    category: 0,
    img: "/img/Rectangle 5.jpg",
    title: "Awesome collection",
    date: "31/12/2022",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.Loremipsum dolor sit amet consectetur adipiscing elit.",
  },
];

const partnerValue = [
  { id: 0, name: "Tất Cả" },
  { id: 1, name: "Ăn Uống" },
  { id: 2, name: "Tất Cả" },
  { id: 3, name: "Tất Cả" },
  { id: 4, name: "Tất Cả" },
  { id: 5, name: "Tất Cả" },
];

export default function News() {
  const [currentTab, setCurrentTab] = useState(partnerValue[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const [animationState, setAnimationState] = useState(true);

  const theme = useTheme();
  const { isSmUp, isSmDown, isMdUp } = useMedia();

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

    // console.log("filteredData", filteredData[0].title);/

    return partnerValue.map((item, index) => {
      return (
        <TabPanel key={index} value={currentTab} index={index}>
          <Grid
            container
            columnSpacing={7}
            sx={{
              height: "100%",
            }}
          >
            {filteredData.map((el, i) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  sx={[isSmUp && { marginBottom: "1.75rem" }]}
                >
                  <CardItem data={el} />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      );
    });

    //
  }, [arrayHomeNews, currentTab, currentPage]);

  const renderPagination = useMemo(() => {
    let filteredData = arrayHomeNews.filter((el) => {
      return el.category == currentTab;
    });

    return (
      <Pagination
        data={filteredData}
        currentPage={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          animationHandler();
        }}
      />
    );
  }, [arrayHomeNews, currentPage, isSmUp, currentTab]);

  return (
    <Box>
      <BannerTop />
      <Container maxWidth="lg">
        <LineTitle data={valuelineTitle} type="center" />
        <InputSearch />
        {renderTabs}
        {renderTabPanel}
        {renderPagination}
      </Container>
    </Box>
  );
}
