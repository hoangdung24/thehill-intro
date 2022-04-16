import { Fragment } from "react";

import { AboutUs, CustomerBenefit, Partner, StoreBenefit, Blog, Tutorial } from "./components";

import { Header } from "../../components";

const HomePage = ({ homeData, partnerData, blogDetail, ...props }) => {
  const { items } = homeData;

  const data = items?.[0];

  return (
    <Fragment>
      <Header data={data} />
      <CustomerBenefit data={data} />
      <StoreBenefit data={data} />
      <AboutUs data={data} />
      <Tutorial data={data} />
      <Partner data={data} partnerData={partnerData} />
      <Blog blogList={blogDetail} data={data} />
    </Fragment>
  );
};

export default HomePage;
