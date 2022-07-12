import { Box } from "@mui/material";
import { StoreBenefit } from "./components";

import ExchangePointsHome from "./components/ExchangePointsHome";
import HomeNews from "./components/HomeNews";
import HomeFeature from "./components/HomeFeature";
import HomeBrand from "./components/HomeBrand";
import HomeBenefit from "./components/HomeBenefit";
import HomeBanner from "./components/HomeBanner";
import useMedia from "../../hooks/useMedia";

const HomePage = ({ initData, ...props }) => {
  const { isSmDown, isMdDown } = useMedia();
  const [homeData, blogHome, brandHome, benefitHome] = initData;
  const data = homeData.items?.[0];
  const blogHomeData = blogHome.items;
  const brandHomeData = brandHome.items;
  return (
    <Box>
      <HomeBanner data={benefitHome} />
      {isMdDown ? <Home3D /> : null}
      {/* <Phone /> */}
      <ExchangePointsHome data={data} />
      <HomeBenefit data={data} />
      <HomeBrand data={data} brandHomeData={brandHomeData} />
      {/* <StoreBenefit data={data} /> */}
      <HomeFeature data={data} />
      <HomeNews data={data} blogHomeData={blogHomeData} />
    </Box>
  );
};

export default HomePage;
