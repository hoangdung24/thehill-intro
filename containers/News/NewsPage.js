import { Grid } from "@mui/material";
import { Fragment } from "react";
import { GridContainer, SubHeader, BlogList, BlogCard } from "../../components";

const NewsPage = ({ blogDetail, blogCategories, ...props }) => {
	return (
		<Fragment>
			<SubHeader title={"NEWS DETAIL PAGE"} />
			<GridContainer
				OuterProps={{
					sx: {
						padding: 5,
					},
				}}>
				<Grid className='Container' container spacing={2} direction={"row"}>
					<Grid item xs={12} lg={9} container spacing={2} direction={"row"}>
						{blogDetail.items.map((e, index) => {
							return <BlogCard key={e.id} {...e} />;
						})}
					</Grid>
					<Grid item xs={12} lg={3}>
						<div>Tag</div>
					</Grid>
				</Grid>
			</GridContainer>
		</Fragment>
	);
};

export default NewsPage;
