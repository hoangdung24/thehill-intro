import { Grid, Container } from "@mui/material";
import { Fragment } from "react";
import {SubHeader} from "../../components";
import Banner from "./components/Banner";
import BlogList from './components/BlogList'

const NewsPage = ({ blogDetail, blogCategories, blogList, tags, ...props }) => {
	// console.log(blogDetail);

	// console.log(blogCategories);

	// console.log(blogList);


	// console.log(items)

	

	return (
		<Fragment>
			<Banner blogList={blogList?.items?.[0]} />
			<Container maxWidth='lg'>
				{/* <Grid className='Container' container spacing={2} direction={"row"}>
					<Grid item xs={12} lg={9} container spacing={2} direction={"row"}>
						{blogDetail.items.map((e) => {
							return <BlogCard key={e.id} {...e} />;
						})}

						CardList
					</Grid>

					<Grid item xs={12} lg={3}>
						Tag
					</Grid>
				</Grid> */}
				<BlogList blogDetail={blogDetail} tags={tags} blogCategory={blogCategories} />
			</Container>
		</Fragment>
	);
};

export default NewsPage;
