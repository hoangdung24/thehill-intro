import { Stack, Box, Container, Grid, Typography } from "@mui/material";
import { QRcode, Button, Theme } from "../../components";
import { Image } from "../../HOC";

const Header = () => {
	return (
		<Container maxWidth='xl'>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={6}>
					<Box>
						<Typography variant='h1'>Hello</Typography>
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
					<Box>
						<Image
							src='https://picsum.photos/id/1/200/300'
							width={200}
							height={300}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Header;
