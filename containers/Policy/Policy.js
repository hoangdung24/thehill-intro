import { Container } from "@mui/material";
import { Fragment } from "react";
import { ReaderHTML, SubHeader } from "../../components";



const PolicyPage = ({dataPolicy, ...props}) => {
    
    const {items} = dataPolicy

    const data = items?.[0]

    return (
        <Fragment>
            <Container maxWidth='lg'>
                <SubHeader data={data} />
                <ReaderHTML content={data.content}/>
            </Container>
        </Fragment>
    )
}

export default PolicyPage;

// styled sheet