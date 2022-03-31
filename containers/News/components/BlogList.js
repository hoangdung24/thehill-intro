import { GridContainer } from "../../../components";
import { BlogCard } from "../../components";
import { Grid, Box, CircularProgress } from "@mui/material";

const BlogList = ({ data, loading, ...props }) => {
	return (
		<GridContainer>
			<Grid container spacing={2}>
				{loading ? (
					<CircularProgress />
				) : (
					data?.items?.map((e) => {
						return (
							<Grid key={e.id} items xs={12} md={6}>
								<Box>
									<BlogCard {...e} />
								</Box>
							</Grid>
						);
					})
				)}
			</Grid>
		</GridContainer>
	);
};

export default BlogList;

// Styled Sheet
