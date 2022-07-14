import { Box, Container, Fade, Grid, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import InputPagePartner from "../../components/Input/InputPagePartner";
import LineTitle from "../../components/LineTitle/LineTitle";
import Tabs from "../../components/TabPanel/Tabs";
import TabPanel from "../../components/TabPanel/TabPanel";
import Pagination from "../../components/Pagination";

import useMedia from "../../hooks/useMedia";
import cloneDeep from "lodash/cloneDeep";
import CardItem from "../../components/Card/CardItem";
import { NEWPC_LIMIT } from "../../constants";
import { useRouter } from "next/router";
import useSWR from "swr";
import { transformUrl } from "../../libs";
import { PAGES, types } from "../../apis";
import useDebounce from "../../hooks/useDebounce";

const objTabs = {
  id: -1,
  title: "Tất cả",
};

export default function News({ initData }) {
  const [blogListingPage, blogCategoryPage, blogDetailPage] = initData;
  const theme = useTheme();
  const router = useRouter();
  const { isSmUp, isSmDown } = useMedia();
  // console.log("router", router.query);
  const [animationState, setAnimationState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(-1);
  const [dataTabs, setDataTabs] = useState([]);
  const [idAPI, setIdAPI] = useState(-1);
  const [dataTabPanel, setDataTabPanel] = useState([]);
  const [textSearch, setTextSearch] = useState(null);
  const [isSearch, setIsSearch] = useState(true);
  const [dataTags, setDataTags] = useState("");

  const { data: resData } = useSWR(
    idAPI == -1
      ? transformUrl(PAGES, {
          type: types.blogDetailPage,
          fields: "*",
        })
      : transformUrl(PAGES, {
          child_of: idAPI,
          fields: "*",
          type: types.blogDetailPage,
        })
  );
  const { data: searchData } = useSWR(
    idAPI == -1
      ? transformUrl(PAGES, {
          type: types.blogDetailPage,
          search: textSearch,
          fields: "*",
        })
      : transformUrl(PAGES, {
          child_of: idAPI,
          search: textSearch,
          fields: "*",
          type: types.blogDetailPage,
        })
  );
  const { data: tagsData } = useSWR(
    transformUrl(PAGES, {
      tags: dataTags,
      type: types.blogDetailPage,
      fields: "*",
    })
  );
  console.log("tagsData", dataTags);
  useEffect(() => {
    const cloneTabsData = cloneDeep(blogCategoryPage.items);
    cloneTabsData.splice(0, 0, objTabs);
    setDataTabs(cloneTabsData);
  }, [blogCategoryPage]);

  useEffect(() => {
    if (isSearch == "isQuery") {
      //xét lại data nội dung khi chuyển về từ trang NewDetail
      if (!dataTags) {
        return null;
      }

      if (Array.getOwnPropertyNames(tagsData).length === 0) {
        console.log("undefinedundefined");
      }
      // let valueTab = tagsData?.items[0].meta.parent.title;
      // console.log("xetSseEffect", valueTab);
      // setDataTabPanel(tagsData?.items);
    } else if (isSearch == false) {
      //xét lại data nội dung khi tìm kiếm
      if (searchData === undefined) {
        return null;
      }
      setDataTabPanel(searchData?.items);
    } else if (isSearch == true) {
      //xét lại data nội dung khi chuyển Tab danh mục
      if (resData === undefined) {
        return;
      }
      setDataTabPanel(resData?.items);
    }
  });

  useEffect(() => {
    if (Object.getOwnPropertyNames(router.query).length === 0) {
      return null;
    } else {
      setIsSearch("isQuery");
      setDataTags(router.query.type);
      console.log("router", router.query);
    }
  });

  const handleTextChange = (e) => {
    if (e.target.value == "") {
      setIsSearch(true);
    } else {
      const debounce = useDebounce(() => {
        setTextSearch(e.target.value);
        setIsSearch(false);
      }, 1000);

      debounce();
    }
  };

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
    console.log("newValue", newValue);
    setCurrentTab(newValue);
    setCurrentPage(1);
    animationHandler();
    setIdAPI(newValue);
  }, []);
  const handleDetailNew = (id) => {
    router.push(`${router.pathname}/${id}`);
  };

  const renderTabs = useMemo(() => {
    if (!dataTabs) {
      return null;
    }

    return (
      <Tabs value={currentTab} changeTab={changeTabHandler} data={dataTabs} />
    );
  }, [dataTabs, currentTab]);

  const renderTabPanel = useMemo(() => {
    if (!dataTabs) {
      return null;
    }
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMULA PAGE = (OFFSET / LIMIT) + 1
    if (isSmUp) {
      const offset = (currentPage - 1) * NEWPC_LIMIT;
      const data = dataTabPanel?.slice(offset, offset + NEWPC_LIMIT);
      return dataTabs.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            <Grid
              container
              columnSpacing={7}
              sx={{
                height: "100%",
              }}
            >
              {data?.map((el, i) => {
                return (
                  <Grid
                    onClick={() => handleDetailNew(el.id)}
                    item
                    key={i}
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                      marginBottom: isSmDown ? "1.75rem" : "3.25rem",
                      cursor: "pointer",
                    }}
                  >
                    <CardItem data={el} />
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
        );
      });
    } else {
      const offset = (currentPage - 1) * NEWPC_LIMIT;
      const data = dataTabPanel?.slice(offset, offset + NEWPC_LIMIT);
      return dataTabs.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            {data?.map((el, i) => {
              return (
                <Box key={i} onClick={() => handleDetailNew(el.id)}>
                  <CardItem data={el} />
                </Box>
              );
            })}
          </TabPanel>
        );
      });
    }

    //
  }, [currentTab, currentPage, dataTabs, dataTabPanel]);

  const renderPagination = useMemo(() => {
    return (
      <Pagination
        data={blogCategoryPage}
        currentPage={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          animationHandler();
        }}
      />
    );
  }, [currentPage, isSmUp, currentTab, blogCategoryPage]);

  return (
    <Box sx={{ marginBottom: "6rem" }}>
      <BannerTop data={blogListingPage.items[0].banner} />

      <Container maxWidth="lg">
        <LineTitle titleData={blogListingPage.items[0].title} type="center" />
        <Box sx={{}}>
          <InputPagePartner
            onChange={handleTextChange}
            name="search"
            InputProps={{
              placeholder: "Tìm kiếm",
            }}
          />
        </Box>
        {renderTabs}
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: isSmDown ? "75vw" : "100%",
              margin: "0 auto",
            },
          }}
        >
          <Fade
            in={animationState}
            timeout={{
              enter: 500,
            }}
          >
            <Box>{renderTabPanel}</Box>
          </Fade>
        </Box>
        {renderPagination}
      </Container>
    </Box>
  );
}
