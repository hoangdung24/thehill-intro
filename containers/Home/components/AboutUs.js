import { Grid, Box, Typography, styled } from "@mui/material";
import { Image } from "../../../HOC";
import { ReaderHTML } from "../../../components";

const SIZE = 450;

const AboutUs = ({data, ...props }) => {
	return (
		<Wrapper id="About">
			<Grid container spacing={2}>
				<Grid item lg={6} md={12} xs={12}>
					<Typography variant='h4'>{data.about_title}</Typography>
					<ReaderHTML content={data.about_content} />
				</Grid>
				<Grid item lg={6} md={12} xs={12}>
					<Box>
						<Image
							src={data.about_image}
							height={SIZE}
							width={SIZE}
							alt='IMAGE ABOUT US'
						/>
					</Box>
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default AboutUs;

// styled sheet

const Wrapper = styled(Box)(({theme})=> {
	return {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	}
})
