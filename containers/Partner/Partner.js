import { Box, Container, Grid, useTheme } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useRouter } from "next/router";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useSWR from "swr";
import { PAGES } from "../../apis";
import BannerTop from "../../components/BannerTop/BannerTop";
import CardBrand from "../../components/Card/CardBrand";
import LineTitle from "../../components/LineTitle/LineTitle";
import Pagination from "../../components/Pagination";
import TabPanel from "../../components/TabPanel/TabPanel";
import Tabs from "../../components/TabPanel/Tabs";
import { PARTNER_LIMIT } from "../../constants";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";
import { transformUrl } from "../../libs";
import cloneDeep from "lodash/cloneDeep";

const objTabs = {
  id: 99,
  title: "Tất cả",
};

const Partner = forwardRef(({ initData }, ref) => {
  const router = useRouter();
  const [partnerBrand, partnerTabs, partnerListing, datane] = initData;
  const theme = useTheme();
  const { isSmUp, isSmDown, isMdUp } = useMedia();

  const [currentTab, setCurrentTab] = useState(partnerTabs.items[0].id);
  const [animationState, setAnimationState] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const [idAPI, setIdAPI] = useState(17);
  const [array, setArray] = useState([]);
  const [dataTabs, setDataTabs] = useState([]);
  console.log("partnerTabs", datane);

  const animationHandler = useCallback(() => {
    setAnimationState(false);

    const timer = setTimeout(() => {
      setAnimationState(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const { data: resData } = useSWR(transformUrl(`${PAGES}${idAPI}`, {}));

  useEffect(() => {
    const cloneTabsData = cloneDeep(partnerTabs.items);
    cloneTabsData.splice(0, 0, objTabs);
    setDataTabs(cloneTabsData);
  }, [partnerTabs]);

  useEffect(() => {
    if (resData === undefined) {
      return;
    }

    setArray(resData.partners);
  });

  const changeTabHandler = useCallback(
    (event, newValue) => {
      console.log("newValuenewValue", newValue);
      setCurrentTab(newValue);
      setCurrentPage(1);
      animationHandler();
      setIdAPI(newValue);
    },
    [idAPI]
  );
  const handleDetailNew = (link) => {
    if (link == null) {
      return null;
    }
    router.push(link);
  };
  const renderTabs = useMemo(() => {
    if (!dataTabs) {
      return null;
    }
    // const cloneSettingData = cloneDeep(setting.header);
    // cloneSettingData.splice(3, 0, objLogo);
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
      return dataTabs.map((item, index) => {
        console.log("item.id", item.id);
        console.log("currentTab", currentTab);
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            <Box
              sx={{
                height: "25rem",
                marginBottom: "3.5rem",
                // display: isSmDown ? "none" : "block",
              }}
            >
              <Image
                {...{
                  src: "/img/Logo-theHill.png",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Grid
              container
              spacing={10}
              sx={{
                marginBottom: "3.5rem",
                paddingBottom: "3.5rem",
                height: "100%",
              }}
            >
              {array.map((el, i) => {
                return (
                  <Grid
                    onClick={() => handleDetailNew(el.link)}
                    item
                    key={i}
                    xs={12}
                    sm={6}
                    md={3}
                  >
                    <CardBrand data={el} />
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
        );
      });
    } else {
      const offset = (currentPage - 1) * PARTNER_LIMIT;
      const data = array.slice(offset, offset + PARTNER_LIMIT);

      return partnerTabs.items.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            {data.map((el, i) => {
              return (
                <Box onClick={() => handleDetailNew(el.link)}>
                  <CardBrand key={i} data={el} />
                </Box>
              );
            })}
          </TabPanel>
        );
      });
    }
  }, [array, currentTab, currentPage]);

  const renderPagination = useMemo(() => {
    if (isSmUp) {
      return null;
    }

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
  // const handleDetailNew = (link) => {
  //   router.push(link);
  // };
  return (
    <Box
      ref={ref}
      sx={{
        [theme.breakpoints.down("sm")]: {
          marginBottom: "3.5rem",
        },
      }}
    >
      <BannerTop data={partnerListing.items[0].banner} />

      <Container maxWidth="lg">
        <LineTitle type="center" titleData={partnerListing.items[0].title} />
      </Container>
      {renderTabs}
      <Container maxWidth="lg">
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: isSmDown ? "65vw" : "100%",
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

          <Box>{renderPagination}</Box>
        </Box>
      </Container>
    </Box>
  );
});

export default Partner;
