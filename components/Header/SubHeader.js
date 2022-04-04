import { GridContainer, ButtonShape, Theme } from "../../components";
import { Grid, Typography, Container, Box } from "@mui/material";
import styled from "@emotion/styled";

const SubHeader = ({ title }) => {
	return (
		<Container maxWidth='xl' sx={{ padding: 20 }}>
			<Grid container spacing={2} justifyContent='center' alignContent='center'>
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
	);
};

export default SubHeader;

// Styled Sheet

const Title = styled(Typography)(({ theme }) => {
	return {
		color: Theme.palette.common.black,
	};
});
