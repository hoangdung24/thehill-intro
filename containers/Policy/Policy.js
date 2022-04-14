import { Container, Box } from "@mui/material";
import { Fragment } from "react";
import { ReaderHTML, SubHeader } from "../../components";
import createDOMPurify from "isomorphic-dompurify";



const PolicyPage = ({dataPolicy, ...props}) => {
    
    const {items} = dataPolicy

    const data = items?.[0]

	const content = data.content

    return (
			<Fragment>
				<SubHeader data={data} isBackground={true} background={data.banner}/>
				<Container maxWidth='lg'>
					<Box
						dangerouslySetInnerHTML={{
							__html: createDOMPurify.sanitize(content)
						}}></Box>
				</Container>
			</Fragment>
		);
}

export default PolicyPage;

// styled sheet