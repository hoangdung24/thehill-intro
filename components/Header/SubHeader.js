import { GridContainer, ButtonShape, Theme } from "../../components";
import { Grid, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/styles";

const SubHeader = ({ title, ...props }) => {
	return (
		<GridContainer
			OuterProps={{
				sx: {
					backgroundColor: Theme.palette.primary.main,
					padding: 2,
				},
			}}>
			<Container maxWidth='xl' sx={{ padding: 20 }}>
				<Grid
					container
					spacing={2}
					justifyContent='center'
					alignContent='center'>
					<Grid item xs={12} md={6} lg={6}>
						<Box>
							<ButtonShape
								title={"About us"}
								isBackground={true}
								backgroundColor={"#0E185F"}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<Title variant='h3'>{title}</Title>
					</Grid>
				</Grid>
			</Container>
		</GridContainer>
	);
};

export default SubHeader;

// Styled Sheet

const Title = styled(Typography, {
	shouldForwardProp: (prop) => {
		return {};
	},
})(({ theme }) => {
	return {
		color: Theme.palette.common.white,
	};
});
