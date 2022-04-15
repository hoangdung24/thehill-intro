import { Grid, Typography , Box, styled, Container } from "@mui/material";
import { CustomerCard, ReaderHTML } from "../../../components";

const CustomerBenefit = ({data, ...props }) => {
	return (
		<Wrapper>
			<ImageBackground className='background customer'sx={{
				pointerEvents: 'none'
			}}>
				<img
				src={data.customer_image}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover'
				}}
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
								<Grid key={index} item lg={6} md={6} xs={12}>
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
		paddingTop: theme.spacing(6),
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
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	};
});