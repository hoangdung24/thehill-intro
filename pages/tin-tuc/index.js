import axios from "axios";
import { BlogList } from "../../containers";
import { BLOG_CATEGORIES, BLOG_DETAIL, BLOG_LIST, PAGES, TAGS } from "../../helpers/api";

const News = ({ ...props }) => {
  return <BlogList {...props} />;
};

export default News;

export async function getServerSideProps({ params }) {
  try {
    const urls = [
      `${PAGES}?type=${BLOG_DETAIL}&fields=*`,
      `${PAGES}?type=${BLOG_CATEGORIES}&fields=*`,
      `${PAGES}?type=${BLOG_LIST}&fields=*`,
      `${TAGS}`,
    ];

    const resList = await Promise.all(
      urls.map(async (url) => {
        return axios.get(url).then(function ({ data }) {
          return data;
        });
      })
    );

    return {
      props: {
        blogDetail: resList[0],
        blogCategories: resList[1],
        blogList: resList[2],
        tags: resList[3],
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
