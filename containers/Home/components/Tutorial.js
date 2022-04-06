import { Container, Grid, Box, Typography } from "@mui/material";
import Blog from "../../News/components/Blog";
import { Image } from "../../../HOC";
import styled from "@emotion/styled";

const SIZE = 450;

const Tutorial = ({ tutorial_title, tutorial_content, tutorial_image, ...props }) => {
	return (
		<Wrapper>
			<Grid container spacing={2}>
				<Grid item lg={6} md={12} xs={12}>
					<Typography variant='h3'>{tutorial_title}</Typography>
					<Blog about_content={tutorial_content} />
				</Grid>
				<Grid item lg={6} md={12} xs={12}>
					<WrapperBox>
						<Image
							src={tutorial_image}
							height={SIZE}
							width={SIZE}
							alt='IMAGE ABOUT US'
						/>
					</WrapperBox>
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default Tutorial;

// styled sheet
const WrapperBox = styled(Box)(({ theme }) => {
	return {};
});


const Wrapper = styled(Box)(({ theme }) => {
	return {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
});
