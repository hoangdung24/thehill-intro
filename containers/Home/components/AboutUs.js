import { Container, Grid, Box } from "@mui/material";
import Blog from "../../News/components/Blog";
import { Image } from "../../../HOC";
import styled from "@emotion/styled";

const SIZE = 450;

const AboutUs = ({ about_content, about_image, ...props }) => {
	return (
		<Container maxWidth='xl'>
			<Grid container spacing={2}>
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
				<Grid item lg={6} md={12} xs={12}>
					<Blog about_content={about_content} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AboutUs;

// styled sheet
const WrapperBox = styled(Box)(({ theme }) => {
	return {};
});
