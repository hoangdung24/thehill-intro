import axios from "axios";
import { ConditionPage } from "../containers";
import { CONDITION , PAGES } from "../helpers/api"


const Condition = ({...props}) => {
    return  <ConditionPage {...props}/>
}

export default Condition;

// GET DATA

export async function getServerSideProps({ params }) {
    const url = `${PAGES}?type=${CONDITION}&fields=*`

    const response  = await axios.get(url)

    const dataCondition = await response.data

    return {
        props: {dataCondition}
    }
}