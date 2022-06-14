import React from "react";
import { PAGES, types } from "../../apis";
import { transformUrl, prefetchData } from "../../libs";

export default function DemoNha({ ...props }) {
  console.log("...props ", props);
  return <div>index</div>;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(PAGES, { type: types.servicePage, fields: "*", locale }),
    ];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
