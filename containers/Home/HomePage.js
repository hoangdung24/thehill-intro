import { Box } from "@mui/material";
import { StoreBenefit } from "./components";

import ExchangePointsHome from "./components/ ExchangePointsHome";
import HomeNews from "./components/HomeNews";
import HomeFeature from "./components/HomeFeature";
import HomeBrand from "./components/HomeBrand";
import HomeBenefit from "./components/HomeBenefit";
import HomeBanner from "./components/HomeBanner";
import useMedia from "../../hooks/useMedia";
import Home3D from "./components/Home3D";

const HomePage = ({ initData, ...props }) => {
  const { isSmUp, isSmDown, isMdUp } = useMedia();
  // const [] = initData;

  // console.log(initData);

  // const data = items?.[0];

  return (
    <Box>
      <HomeBanner />
      {isSmDown ? <Home3D /> : null}

      <ExchangePointsHome />
      <HomeBenefit />
      <HomeBrand />
      <StoreBenefit />
      <HomeFeature />
      <HomeNews />
    </Box>
  );

  // return (
  //   <Fragment>
  //     <Header data={data} />
  //     <CustomerBenefit data={data} />
  //     <StoreBenefit data={data} />
  //     <AboutUs data={data} />
  //     <Tutorial data={data} />
  //     <Partner data={data} partnerData={partnerData} />
  //     <Blog blogList={blogDetail} data={data} />
  //   </Fragment>
  // );
};

export default HomePage;
