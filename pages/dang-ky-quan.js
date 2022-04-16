import axios from "axios";
import { ContactPage } from "../containers";
import { CONTACT, PAGES, STORE_CATEGORIES } from "../helpers/api";

const Contact = ({ ...props }) => {
  return <ContactPage {...props} />;
};

export default Contact;

// GET DATA

export async function getServerSideProps({ params }) {
  try {
    const urls = [`${PAGES}?type=${CONTACT}&fields=*`, `${STORE_CATEGORIES}`];
    const resList = await Promise.all(
      urls.map(async (url) => {
        return axios.get(url).then(function ({ data }) {
          return data;
        });
      })
    );

    return {
      props: { dataContact: resList[0], storeCategories: resList[1] },
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
