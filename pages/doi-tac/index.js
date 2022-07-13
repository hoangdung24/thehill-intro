import React from "react";
import { PAGES, PARTNER, types } from "../../apis";
import Partner from "../../containers/Partner/Partner";
import PartnerDemo from "../../containers/Partner/PartnewDemo";
import { prefetchData, transformUrl } from "../../libs";

export default function PagePartner({ ...props }) {
  return <PartnerDemo {...props} />;

  // <Partner {...props} />;
}

export async function getServerSideProps({ params }) {
  try {
    const urls = [
      transformUrl(PARTNER, {
        fields: "*",
      }),
      transformUrl(PAGES, {
        type: types.partnerDetailPage,
      }),
      transformUrl(PAGES, {
        type: types.partnerListingPage,
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
