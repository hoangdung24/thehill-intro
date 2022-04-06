import styled from "@emotion/styled";
import { Stack, Box, Container, Grid, Typography } from "@mui/material";
import { QRcode, Button, Theme } from "../../components";
import { Image } from "../../HOC";

const Header = ({ subtitle, banner }) => {
	return (
		<Wraper component={"div"}>
			{/* <ImageBackground className='Image Background'>
				<Image
					src={banner}
					className='banner'
					alt='banner'
					height={970}
					width={"100%"}
				/>
			</ImageBackground> */}
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
		</Wraper>
	);
};

export default Header;


const Wraper = styled(Box)(({theme})=> {
	return {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
})
const ImageBackground = styled(Box, {
	shouldForwardProp: (prop) => {
		return prop !== "partner_image";
	},
})(({ theme }) => {
	return {
		
	};
});