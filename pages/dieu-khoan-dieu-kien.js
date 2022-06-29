import axios from "axios";
import { ConditionPage } from "../containers";
import { CONDITION, PAGES, types } from "../apis";
import { prefetchData, transformUrl } from "../libs";
// const url = `${PAGES}?type=${CONDITION}&fields=*`;

const Condition = ({ ...props }) => {
  return <ConditionPage {...props} />;
};

export default Condition;

export async function getServerSideProps({ params }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: types.conditionPage,
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
