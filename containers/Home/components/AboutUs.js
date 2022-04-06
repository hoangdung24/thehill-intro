import { Container, Grid, Box, Typography } from "@mui/material";
import Blog from "../../News/components/Blog";
import { Image } from "../../../HOC";
import styled from "@emotion/styled";

const SIZE = 450;

const AboutUs = ({about_title, about_content, about_image, ...props }) => {
	return (
		<Wrapper>
			<Grid container spacing={2}>
				<Grid item lg={6} md={12} xs={12}>
					<Typography variant='h3'>{about_title}</Typography>
					<Blog about_content={about_content} />
				</Grid>
				<Grid item lg={6} md={12} xs={12}>
					<WrapperBox>
						<Image
							src={about_image}
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

export default AboutUs;

// styled sheet
const WrapperBox = styled(Box)(({ theme }) => {
	return {
		
	};
});

const Wrapper = styled(Box)(({theme})=> {
	return {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	}
})
