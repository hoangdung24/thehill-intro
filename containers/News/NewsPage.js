import { Grid, Container } from "@mui/material";
import { Fragment } from "react";
import {SubHeader} from "../../components";

const NewsPage = ({ blogDetail, blogCategories, blogList, tags, ...props }) => {
	console.log(blogDetail);

	// console.log(blogCategories);

	// console.log(blogList);

	// const {items} = blogDetail

	// console.log(items)

	return (
		<Fragment>
			<Container maxWidth='lg'>
				<SubHeader data={blogList?.items?.[0]} />
				<Grid className='Container' container spacing={2} direction={"row"}>
					<Grid item xs={12} lg={9} container spacing={2} direction={"row"}>
						{/* {blogDetail.items.map((e) => {
							return <BlogCard key={e.id} {...e} />;
						})} */}

						{/* CardList */}

					</Grid>

					<Grid item xs={12} lg={3}> 
						{/* Tag */}
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};

export default NewsPage;
