import { Stack, Box, Container, Grid, Typography } from "@mui/material";
import { GridContainer, QRcode, Button, Theme } from "../../components";

const Header = () => {
	return (
		<GridContainer
			OuterProps={{
				sx: {
					backgroundColor: Theme.palette.primary.main,
					padding: 2,
				},
			}}>
			<Container maxWidth='xl'>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={6}>
						<Box>
							<Typography variant='h1'>
								Lets pack for your next adventure
							</Typography>
							<Button
								title={"Send App To Your Phone"}
								isBackground={true}
								backgroundColor={"#F56D91"}
								sx={{
									paddingX: 5,
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Typography variant='h2'>Content Trống</Typography>
					</Grid>
				</Grid>
			</Container>
		</GridContainer>
	);
};

export default Header;
