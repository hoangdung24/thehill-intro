import { Container } from "@mui/material";
import { Fragment } from "react";
import { ReaderHTML, SubHeader } from "../../components";



const PolicyPage = ({dataPolicy, ...props}) => {
    
    const {items} = dataPolicy

    const data = items?.[0]

    return (
			<Fragment>
				<SubHeader data={data} isBackground={true} background={data.banner}/>
				<Container maxWidth='lg'>
					<ReaderHTML content={data.content} />
				</Container>
			</Fragment>
		);
}

export default PolicyPage;

// styled sheet