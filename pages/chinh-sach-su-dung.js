import axios from "axios";
import { PolicyPage } from "../containers/Policy";
import { POLICY, PAGES } from "../apis";

const Policy = ({ ...props }) => {
  return <PolicyPage {...props} />;
};

export default Policy;

export async function getServerSideProps({ params }) {
  // const url = `${PAGES}?type=${POLICY}&fields=*`;
  const url =
    "https://maxhouse.t-solution.vn/api/v2/pages/?type=policy.PaymentPolicyPage&fields=*";

  const response = await axios.get(url);

  const dataPolicy = await response.data;

  return {
    props: { dataPolicy },
  };
}
