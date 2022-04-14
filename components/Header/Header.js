import {Box, Container, Grid, Typography,styled } from "@mui/material";
import {Button, QRcode} from '../../components'


const Header = ({data, ...props }) => {
	return (
		<Wraper component={"div"} className='header'>
			<ImageBackground className='background Banner'>
				{/* <Image alt="banner" src={data.banner} WrapperProps={{
					sx: {
						width: "100vw",
						height: "calc(100vw * 0.8)",
						PointerEvent: 'none'
					}
				}} /> */}
				<img src={data.banner}
				style={{
					width: "100%",
					height: '100%',
					objectFit: 'cover'
				}}/>
			</ImageBackground>
			<Container maxWidth="lg">
				<Box
					className='Box Header'
					sx={{
						padding: "290px 0 225px",
						position: "relative",
						zIndex: 0,
						overflow: "hidden",
					}}>
					<Grid
						container
						spacing={2}
						justifyContent='center'
						alignContent='center'>
						<Grid item xs={12} lg={6}>
							<Box>
								<Typography variant='h1'>{data.subtitle}</Typography>
								<Button
									title={"Send App To Your Phone"}
									isBackground={true}
									backgroundColor={"#F56D91"}
									sx={{
										paddingX: 5,
									}}
								/>
								<QRcode left={true}/>
							</Box>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Box></Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Wraper>
	);
};

export default Header;


const Wraper = styled(Box)(({theme})=> {
	return {
		position: "relative",
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
		height: "900px",
	};
})

const ImageBackground = styled(Box, {
	shouldForwardProp: (prop) => {
		return prop !== "banner";
	},
})(({ theme }) => {
	return {
		zIndex: -1,
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	};
});