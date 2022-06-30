import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { PAGES } from "../../apis";
import BannerTop from "../../components/BannerTop/BannerTop";
import CardBrand from "../../components/Card/CardBrand";
import LineTitle from "../../components/LineTitle/LineTitle";
import Pagination from "../../components/Pagination";
import TabPanel from "../../components/TabPanel/TabPanel";
import Tabs from "../../components/TabPanel/Tabs";
import { POST_LIMIT } from "../../constants";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";
import { transformUrl } from "../../libs";

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

export default function Partner({ initData }) {
  const router = useRouter();
  const [partnerBrand, partnerTabs, partnerListing] = initData;
  // console.log("partnerBrand", partnerTabs.items);
  // console.log("partnerTabs", partnerTabs.items[0].id);

  const theme = useTheme();
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  // console.log("partnerValue", partnerValue[0].id);
  const [currentTab, setCurrentTab] = useState(partnerTabs.items[0].id);
  const [animationState, setAnimationState] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [idAPI, setIdAPI] = useState(17);
  const [array, setArray] = useState([]);
  // console.log("arrayarrayarrayarray", array);

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
    if (resData === undefined) {
      return;
    }
    setArray(resData.partners);
  });

  const changeTabHandler = useCallback(
    (event, newValue) => {
      setCurrentTab(newValue);
      console.log("newValue", newValue);
      setCurrentPage(1);
      animationHandler();
      setIdAPI(newValue);
      // setArray(resData.partners);
    },
    [idAPI]
  );
  // console.log("partner", resData);

  const renderTabs = useMemo(() => {
    if (!partnerTabs) {
      return null;
    }
    // console.log("renderTabs", resData);

    return (
      <Tabs
        value={currentTab}
        changeTab={changeTabHandler}
        data={partnerTabs}
      />
    );
  }, [partnerTabs, currentTab]);

  const renderTabPanel = useMemo(() => {
    if (!partnerTabs.items) {
      return;
    }
    // FORMULA: OFFSET = (PAGE - 1) * LIMIT
    // FORMULA PAGE = (OFFSET / LIMIT) + 1
    if (isSmUp) {
      return partnerTabs.items.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
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
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={3}
                    className="sadsadsadsadasdsadsadasd"
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
      const offset = (currentPage - 1) * POST_LIMIT;
      const data = array.slice(offset, offset + POST_LIMIT);

      return partnerTabs.items.map((item, index) => {
        return (
          <TabPanel key={index} value={currentTab} index={item.id}>
            {data.map((el, i) => {
              return <CardBrand data={el} />;
            })}
          </TabPanel>
        );
      });
    }

    //
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
          console.log("newPage", newPage);
          setCurrentPage(newPage);
          animationHandler();
        }}
      />
    );
  }, [array, currentPage, isSmUp, currentTab]);

  return (
    <Box>
      <BannerTop data={partnerListing.items[0].banner} />

      <Container maxWidth="lg">
        <LineTitle type="center" titleData={partnerListing.items[0].title} />
      </Container>
      {renderTabs}
      <Container maxWidth="lg">
        <Box
          sx={{
            height: "25rem",
            marginBottom: "6rem",
            display: isSmDown ? "none" : "block",
          }}
        >
          <Image
            {...{
              src: "/img/Rectangle 5.jpg",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: isSmDown ? "75vw" : "100%",
              margin: "0 auto",
            },
          }}
        >
          {renderTabPanel}
          <Box>{renderPagination}</Box>
        </Box>
      </Container>
    </Box>
  );
}
