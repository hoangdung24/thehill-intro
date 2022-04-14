import { Grid, Box, Typography, styled } from "@mui/material";
import { Image } from "../../../HOC";
import { ReaderHTML } from "../../../components";
import { useDevice } from "../../../hooks";


const SIZE = 450;

const Tutorial = ({ data, ...props }) => {

	const {isTable1200} = useDevice();

	return (
		<Wrapper id="tutorial">
			<Grid container spacing={2}>
				<Grid item lg={6} md={12} xs={12}>
					<Typography variant='h4'>{data.tutorial_title}</Typography>
					<ReaderHTML content={data.tutorial_content} />
				</Grid>
				<Grid item lg={6} md={12} xs={12}>
					<Box sx={
						[
						isTable1200 && {
							display: 'none'
						}
					]}>
						<Image
							src={data.tutorial_image}
							height={SIZE}
							width={SIZE}	
							alt='IMAGE Hướng dẫn'
						/>
					</Box>
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default Tutorial;

// styled sheet

const Wrapper = styled(Box)(({ theme }) => {
	return {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
});
