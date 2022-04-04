import { Container, Grid, Typography } from "@mui/material";
import { BlogCard } from "../../../components";

const GridBenefit = ({ store_title, ...props }) => {
	return (
		<Container maxWidth='xl'>
			<Grid container spacing={2}>
				<Grid container item lg={6} md={12} xs={12} spacing={2}>
					<Grid item lg={6} md={6} xs={6}>
						<BlogCard />
					</Grid>
					<Grid item lg={6} md={6} xs={6}>
						<BlogCard />
					</Grid>
				</Grid>
				<Grid item lg={6} md={0} xs={0}>
					<Typography variant='h1'>{store_title} </Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default GridBenefit;
