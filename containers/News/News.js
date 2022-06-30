import { Container, Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import InputSearch from "../../components/Input/InputSearch";
import LineTitle from "../../components/LineTitle/LineTitle";
import TabPanel from "../../components/TabPanel/TabPanel";
import Tabs from "../../components/TabPanel/Tabs";
import useMedia from "../../hooks/useMedia";
import CardItem from "../../components/Card/CardItem";
import Pagination from "../../components/Pagination";
import useSWR from "swr";
import { transformUrl } from "../../libs";
import { PAGES } from "../../apis";

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

export default function News({ initData }) {
  const [blogListingPage, blogCategoryPage, blogDetailPage] = initData;

  const [currentTab, setCurrentTab] = useState(blogCategoryPage.items[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const [animationState, setAnimationState] = useState(true);
  const [array, setArray] = useState([]);
  const [idAPI, setIdAPI] = useState(blogCategoryPage.items[0].id);
  console.log("blogCategoryPageblogCategoryPage", array);
  const theme = useTheme();
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const { data: resData } = useSWR(
    transformUrl(PAGES, {
      child_of: idAPI,
      fields: "*",
    })
  );

  useEffect(() => {
    if (resData === undefined) {
      return;
    }
    setArray(resData.items);
  });

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
    // console.log("newValue", newValue);
    setCurrentPage(1);
    animationHandler();
    setIdAPI(newValue);
  }, []);

  const renderTabs = useMemo(() => {
    if (!blogCategoryPage) {
      return null;
    }

    return (
      <Tabs
        value={currentTab}
        changeTab={changeTabHandler}
        data={blogCategoryPage}
      />
    );
  }, [blogCategoryPage, currentTab]);

  const renderTabPanel = useMemo(() => {
    if (!blogCategoryPage) {
      return null;
    }
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMULA PAGE = (OFFSET / LIMIT) + 1

    return blogCategoryPage.items.map((item, index) => {
      return (
        <TabPanel key={index} value={currentTab} index={item.id}>
          <Grid
            container
            columnSpacing={7}
            sx={{
              height: "100%",
            }}
          >
            {array.map((el, i) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ marginBottom: isSmDown ? "1.75rem" : "3.25rem" }}
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
  }, [array, currentTab, currentPage]);

  const renderPagination = useMemo(() => {
    return (
      <Pagination
        data={array}
        currentPage={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          animationHandler();
        }}
      />
    );
  }, [arrayHomeNews, currentPage, isSmUp, currentTab]);

  return (
    <Box sx={{ marginBottom: isSmDown ? "4rem" : "6.6rem" }}>
      <BannerTop data={blogListingPage.items[0].banner} />
      <Container maxWidth="lg">
        <LineTitle titleData={blogListingPage.items[0].title} type="center" />
        <InputSearch />
      </Container>

      {renderTabs}
      <Container maxWidth="lg">
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: isSmDown ? "75vw" : "100%",
              margin: "0 auto",
            },
          }}
        >
          {renderTabPanel}
        </Box>
        {renderPagination}
      </Container>
    </Box>
  );
}
