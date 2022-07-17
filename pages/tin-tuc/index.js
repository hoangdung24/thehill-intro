import { useRouter } from "next/router";
import React from "react";
import { PAGES, types } from "../../apis";
import News from "../../containers/News/News";
// import NewsDemo from "../../containers/News/NewsDemo";
import { prefetchData, transformUrl } from "../../libs";

export default function PageNews({ ...props }) {
  // return null;

  return <News {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const id = query;

    const urls = [
      transformUrl(PAGES, {
        type: types.blogListingPage,
        fields: "*",
      }),
      transformUrl(PAGES, {
        type: types.blogCategoryPage,
        fields: "*",
      }),
    ];

    if (id) {
      const objQuery = Object.keys(id);

      if (objQuery.toString() == "tags") {
        urls.push(
          transformUrl(PAGES, {
            tags: id.tags,
            type: types.blogDetailPage,
            fields: "*",
          })
        );
      }
    }

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
