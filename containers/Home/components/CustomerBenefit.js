import { Grid, Typography , Box, styled, Container } from "@mui/material";
import { CustomerCard, ReaderHTML } from "../../../components";
import { Image } from "../../../HOC";

const CustomerBenefit = ({data, ...props }) => {

	return (
		<Wrapper id='Customer'>
			<ImageBackground className='background customer'>
				<Image
					alt='customer image'
					src={data.customer_image}
					height='calc(100vw * 0.4)'
					width='100vw'
				/>
			</ImageBackground>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid item lg={6} md={0} xs={0}>
						<Typography variant='h4'>{data.customer_title}</Typography>
						<ReaderHTML content={data.customer_subtitle} />
					</Grid>
					<Grid container item lg={6} md={12} xs={12} spacing={2}>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
							}}>
							{data.customer_content?.map((e, index) => (
								<Grid key={index} item lg={6} md={6} xs={6}>
									<CustomerCard
										icon={e.value.icon}
										desc={e.value.desc}
										title={e.value.title}
									/>
								</Grid>
							))}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Wrapper>
	);
};

export default CustomerBenefit;

const Wrapper = styled(Box)(({ theme }) => {
	return {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		width: "100%",
		zIndex: 0,
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
});

const ImageBackground = styled(Box, {
	shouldForwardProp: (prop) => {
		return prop !== "customer_image";
	},
})(({ theme }) => {
	return {
		zIndex: -1,
		position: "absolute",
		width: "100%",
		height: "100%",
		objectFit: "contain",
		objectPosition: "center",
	};
});