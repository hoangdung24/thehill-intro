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
import { useParams } from "../../hooks";

const objTabs = {
  id: -1,
  title: "Tất cả",
};

export default function News({ initData }) {
  const [blogListingPage, blogCategoryPage, tagsSSS] = initData;
  console.log("tagsSSS", tagsSSS);
  const theme = useTheme();
  const router = useRouter();
  const { isSmUp, isSmDown } = useMedia();
  const [animationState, setAnimationState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(-1);
  const [dataTabs, setDataTabs] = useState([]);
  const [idAPI, setIdAPI] = useState(-1);
  const [dataTabPanel, setDataTabPanel] = useState([]);
  const [textSearch, setTextSearch] = useState(null);
  const [isSearch, setIsSearch] = useState(true);
  const [isURL, setIsURL] = useState(true);
  const [dataTags, setDataTags] = useState(tagsSSS);

  const [params, setParams] = useParams({
    initState: {},
    excludeKeys: ["limit", "offset"],
  });

  console.log("router", params);
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
  // const { data: tagsData } = useSWR(
  //   transformUrl(PAGES, {
  //     tags: dataTags,
  //     type: types.blogDetailPage,
  //     fields: "*",
  //   })
  // );

  // console.log("tagsDatatagsData", tagsData);
  useEffect(() => {
    const cloneTabsData = cloneDeep(blogCategoryPage.items);
    cloneTabsData.splice(0, 0, objTabs);
    setDataTabs(cloneTabsData);
  }, [blogCategoryPage]);

  useEffect(() => {
    if (Object.entries(router.query).length > 0) {
      //xét lại data nội dung khi chuyển về từ trang NewDetail

      if (dataTags?.items.length > 0) {
        setCurrentTab(dataTags?.items[0].meta.parent.id);
        setDataTabPanel(dataTags?.items);
        setIsSearch(true);
        setParams({ type: undefined });
      } else {
        setDataTabPanel(resData?.items);
        setIsSearch(true);
      }
      console.log("1");
    } else if (isSearch == false) {
      //xét lại data nội dung khi tìm kiếm
      if (searchData === undefined) {
        return null;
      }
      setDataTabPanel(searchData?.items);
      console.log("2");
    } else if (isSearch == true) {
      //xét lại data nội dung khi chuyển Tab danh mục
      if (resData === undefined) {
        return;
      }
      setDataTabPanel(resData?.items);
      console.log("3");
    }
  }, [dataTags, resData, searchData, isSearch]);

  // useEffect(() => {
  //   if (Object.getOwnPropertyNames(router.query).length === 0) {
  //     return null;
  //   } else if (isURL) {
  //     setIsSearch("isQuery");
  //     setDataTags(router.query.type);
  //   }
  // });

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
        data={dataTabPanel}
        currentPage={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          animationHandler();
        }}
      />
    );
  }, [currentPage, isSmUp, currentTab, dataTabPanel]);

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
