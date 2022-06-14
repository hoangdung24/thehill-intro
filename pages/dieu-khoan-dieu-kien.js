import axios from "axios";
import { ConditionPage } from "../containers";
import { CONDITION, PAGES } from "../apis";
// const url = `${PAGES}?type=${CONDITION}&fields=*`;

const Condition = ({ ...props }) => {
  return <ConditionPage {...props} />;
};

export default Condition;

export async function getServerSideProps({ params }) {
  // const url = `${PAGES}?type=${CONDITION}&fields=*`;

  const url =
    "https://maxhouse.t-solution.vn/api/v2/pages/?type=policy.PaymentPolicyPage&fields=*";

  const response = await axios.get(url);
  const dataCondition = await response.data;

  return {
    props: { dataCondition },
  };
}
