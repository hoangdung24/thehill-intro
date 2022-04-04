import { Container, Grid, Typography } from "@mui/material";
import { BlogCard, CardPartner } from "../../../components";

const GridChoose = ({ customer_title, ...props }) => {
	return (
		<Container maxWidth='xl'>
			<Grid container spacing={2}>
				<Grid item lg={6} md={0} xs={0}>
					<Typography variant='h1'>{customer_title}</Typography>
				</Grid>
				<Grid container item lg={6} md={12} xs={12} spacing={2}>
					<Grid item lg={6} md={6} xs={6}>
						<BlogCard />
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default GridChoose;
