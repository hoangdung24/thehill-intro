import { Box } from "@mui/material";

import AboutExchangePoint from "./components/AboutExchangePoint";
import CustomerBenefit from "./components/CustomerBenefit";
import StoreBenefit from "./components/StoreBenefit";
import TopBanner from "./components/TopBanner";
import Featured from "./components/Featured";
import Brand from "./components/Brand";
import News from "./components/News";

const HomePage = ({ initData }) => {
  const [homeData, blogHome, brandHome, benefitHome] = initData;

  const metaData = homeData.items?.[0];
  const blogHomeData = blogHome.items;
  const brandHomeData = brandHome.items;

  return (
    <Box>
      <TopBanner data={benefitHome} />

      <AboutExchangePoint data={metaData} />

      <CustomerBenefit data={metaData} />

      <Brand data={metaData} brandHomeData={brandHomeData} />

      <StoreBenefit data={metaData} />

      <Featured data={metaData} />

      <News data={metaData} blogHomeData={blogHomeData} />
    </Box>
  );
};

export default HomePage;
