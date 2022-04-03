import { Grid, Container } from "@mui/material";
import { Fragment } from "react";
import {
	GridContainer,
	SubHeader,
	BlogList,
	BlogCard,
	CategoryList,
} from "../../components";

const NewsPage = ({ blogDetail, blogCategories, ...props }) => {
	return (
		<Fragment>
			<Container maxWidth='xl'>
				<SubHeader title={"NEWS DETAIL PAGE"} />
				<Grid className='Container' container spacing={2} direction={"row"}>
					<Grid item xs={12} lg={9} container spacing={2} direction={"row"}>
						{blogDetail.items.map((e) => {
							return <BlogCard key={e.id} {...e} />;
						})}
					</Grid>
					<Grid item xs={12} lg={3}>
						<CategoryList title={"hello"} />
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};

export default NewsPage;
