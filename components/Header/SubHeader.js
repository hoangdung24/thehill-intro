import { Grid, Typography, Box, styled , Container} from "@mui/material";
import {ButtonShape} from "../../components"
import { Image } from "../../HOC";


const SubHeader = ({isBackground=false, background, data }) => {
	return (
		<Wrapper isBackground={isBackground}>
			<WrapperImage>
				<img
					src={background}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</WrapperImage>
				<Box sx={{
					height: '100%'
				}}>
					<Grid
						container
						sx={{
							height: "100%",
							justifyContent: "center",
							alignContent: "center",
							textAlign: "center",
						}}>
						<Grid item xs={12} md={6} lg={6}>
							<Box>
								<ButtonShape
									title={data.subtitle}
									isBackground={true}
									backgroundColor={"#0E185F"}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<Title variant='h3'>{data.title}</Title>
						</Grid>
					</Grid>
				</Box>
		</Wrapper>
	);
};

export default SubHeader;

// Styled Sheet

const Title = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.black,
	};
});


const Wrapper = styled(Box, {shouldForwardProp: (prop) => {
	return prop !== "isBackground" && prop !== "background"
}})(({theme, isBackground, background})=> {
	return {
		position: "relative",
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
		height: "450px",
	};
})

const WrapperImage = styled(Box)(({theme})=>{
	return {
		zIndex: -1,
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	};
})