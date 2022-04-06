import axios from "axios";

import { PAGES, FAQ_LIST, FAQ_DETAIL } from "../helpers/api";
import { Faq } from "../containers";

const FAQPage = ({ ...props }) => {
  return <Faq {...props} />;
};

export default FAQPage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [`${PAGES}?type=${FAQ_LIST}&fields=*`, `${PAGES}?type=${FAQ_DETAIL}&fields=*`];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    return {
      props: {
        initFaqPage: resList[0],
        initFaqDetailList: resList[1],
      },
    };
  } catch {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
