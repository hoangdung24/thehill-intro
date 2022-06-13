import { Box } from "@mui/material";
import {
  AboutUs,
  CustomerBenefit,
  Partner,
  StoreBenefit,
  Blog,
  Tutorial,
} from "./components";

import ExchangePointsHome from "./components/ ExchangePointsHome";
import HomeNews from "./components/HomeNews";
import HomeFeature from "./components/HomeFeature";
import HomeBrand from "./components/HomeBrand";
import HomeBenefit from "./components/HomeBenefit";
import HomeBanner from "./components/HomeBanner";

const HomePage = ({ initData, ...props }) => {
  // const [] = initData;

  console.log(initData);

  // const data = items?.[0];

  return (
    <Box>
      <HomeBanner />
      <HomeBenefit />
      <HomeBrand />
      {/* <ExchangePointsHome /> */}
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
