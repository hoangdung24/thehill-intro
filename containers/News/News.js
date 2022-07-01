import { Container, Fade, Grid, useTheme } from "@mui/material";
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
import { NEWPC_LIMIT } from "../../constants";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function News({ initData }) {
  const [blogListingPage, blogCategoryPage, blogDetailPage] = initData;

  const [currentTab, setCurrentTab] = useState(blogCategoryPage.items[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const [animationState, setAnimationState] = useState(true);
  const [array, setArray] = useState([]);
  const [idAPI, setIdAPI] = useState(blogCategoryPage.items[0].id);
  const [search, setSearch] = useState("hello");

  const { register, handleSubmit, reset, control, setError } = useForm({
    defaultValues: {
      search: "bill",
    },
  });

  const theme = useTheme();
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  const router = useRouter();

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
    setCurrentPage(1);
    animationHandler();
    setIdAPI(newValue);
  }, []);

  const handleDetailNew = (id) => {
    router.push(`${router.pathname}/${id}`);
  };

  const onSubmit = useCallback((data) => {
    console.log("data", data);
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

    if (isSmUp) {
      const offset = (currentPage - 1) * NEWPC_LIMIT;
      const data = array.slice(offset, offset + NEWPC_LIMIT);
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
              {data.map((el, i) => {
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
      const data = array.slice(offset, offset + NEWPC_LIMIT);
      return blogCategoryPage.items.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            {data.map((el, i) => {
              return <CardItem key={i} data={el} />;
            })}
          </TabPanel>
        );
      });
    }

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
  }, [array, currentPage, isSmUp, currentTab]);

  return (
    <Box sx={{ marginBottom: isSmDown ? "4rem" : "6.6rem" }}>
      <BannerTop data={blogListingPage.items[0].banner} />
      <Container maxWidth="lg">
        <LineTitle titleData={blogListingPage.items[0].title} type="center" />
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <InputSearch name="search" />
        </Box>
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
