import { Grid, Typography, Box, styled } from "@mui/material";
import {ButtonShape} from "../../components"


const SubHeader = ({isBackground=false, background, data }) => {
	return (
		<Wrapper isBackground={isBackground} background={background}>
			<Grid container spacing={2} sx={{
				justifyContent:	'center',
				alignContent: 'center',
				textAlign: 'center'
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
	let defaultStyle ={
		padding : 60,
	}

	if (isBackground && background) {
		return {
			...defaultStyle,
			background: background
		}
	} else {
		return {
			...defaultStyle,
		}
	}
})