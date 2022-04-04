import { Stack, Box, Container, Grid, Typography } from "@mui/material";
import { QRcode, Button, Theme } from "../../components";
import { Image } from "../../HOC";

const Header = ({ subtitle, banner }) => {
	return (
		<Container maxWidth='xl'>
			{/* <Box sx={{ backgroundImage: { banner } }}> */}
			<Grid container spacing={2}>
				<Grid item xs={12} lg={6}>
					<Box>
						<Typography variant='h1'>{subtitle}</Typography>
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
					<Box></Box> {/*Content Trống */}
				</Grid>
			</Grid>
			{/* </Box> */}
		</Container>
	);
};

export default Header;
