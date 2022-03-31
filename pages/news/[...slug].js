import { SubHeader, GridContainer } from "../../components";
import { Stack, Box, Grid } from "@mui/material";
import Blog from "../../containers/News/components/Blog";
import Tag from "../../containers/News/components/Tag";

const FilterNews = () => {
	return (
		<>
			<SubHeader title='We are tech giant with 50k+ clients ' />
			<GridContainer
				OuterProps={{
					sx: {
						padding: 5,
					},
				}}>
				<Stack spacing={2} direction='column'>
					<Box>
						<Blog />
					</Box>
					<Box>
						<Grid
							container
							direction='row'
							justifyContent='center'
							alignContent='center'>
							<Grid item xs={3}>
								<Tag />
							</Grid>
							<Grid item xs={3}>
								<Tag />
							</Grid>
							<Grid item xs={3}>
								<Tag />
							</Grid>
							<Grid item xs={3}>
								<Tag />
							</Grid>
						</Grid>
					</Box>
				</Stack>
			</GridContainer>
		</>
	);
};

export default FilterNews;
