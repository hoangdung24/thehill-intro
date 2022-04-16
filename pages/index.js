import { HomePage } from "../containers";
import { HOME_PAGE, PAGES, PARTNER, BLOG_DETAIL } from "../helpers/api";
import axios from "axios";

const Home = ({ ...props }) => {
  return <HomePage {...props} />;
};

export default Home;

export async function getServerSideProps({ params }) {
  try {
    const urls = [
      `${PAGES}?type=${HOME_PAGE}&fields=*`,
      `${PARTNER}?fields=*&is_on_homepage=true&limit=9`,
      `${PAGES}?type=${BLOG_DETAIL}&fields=*&limit=3&is_on_homepage=true`,
    ];
    const resList = await Promise.all(
      urls.map(async (url) => {
        return axios.get(url).then(function ({ data }) {
          return data;
        });
      })
    );

    let homeData;
    let partnerData;
    let blogDetail;

    resList.forEach((e, index) => {
      if (index === 0) {
        homeData = e;
      } else if (index === 1) {
        partnerData = e;
      } else if (index === 2) {
        blogDetail = e;
      }
    });

    return {
      props: {
        homeData: homeData,
        partnerData: partnerData,
        blogDetail: blogDetail,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
