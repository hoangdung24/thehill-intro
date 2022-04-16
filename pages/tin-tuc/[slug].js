import axios from "axios";
import { PAGES } from "../../helpers/api";

import { BlogDetail } from "../../containers";

const DetailBlogPage = ({ ...props }) => {
  return <BlogDetail {...props} />;
};

export default DetailBlogPage;

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const urls = [`${PAGES}${slug}`];

    const resList = await Promise.all(
      urls.map(async (url) => {
        return axios.get(url).then(function ({ data }) {
          return data;
        });
      })
    );

    return {
      props: {
        initBlogDetail: resList[0],
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
