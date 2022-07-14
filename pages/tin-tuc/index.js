import React from "react";
import { PAGES, types } from "../../apis";
import News from "../../containers/News/News";
// import NewsDemo from "../../containers/News/NewsDemo";
import { prefetchData, transformUrl } from "../../libs";

export default function PageNews({ ...props }) {
  return <News {...props} />;
}

export async function getServerSideProps({ params }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: types.blogListingPage,
        fields: "*",
      }),
      transformUrl(PAGES, {
        type: types.blogCategoryPage,
        fields: "*",
      }),

      transformUrl(PAGES, {
        type: types.blogDetailPage,
        fields: "*",
      }),
    ];
    const { resList, fallback } = await prefetchData(urls);

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
