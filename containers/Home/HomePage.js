import { Fragment } from "react";

import {
  AboutUs,
  CustomerBenefit,
  Partner,
  StoreBenefit,
  Blog,
  Tutorial,
} from "./components";

import { Header } from "../../components";

const HomePage = ({ initData, ...props }) => {
  // const [] = initData;

  console.log(initData);

  // const data = items?.[0];

  return null;

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
