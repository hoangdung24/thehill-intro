import {  Grid, Typography, Box , styled} from "@mui/material";
import { CustomerCard, ReaderHTML} from "../../../components";
import {Image} from '../../../HOC'
const SIZE = 450

const StoreBenefit = ({ data, ...props }) => {
	return (
		<Wrapper >
			<Grid container spacing={2}>
				<Grid item lg={6}>
					<Box sx={{
						pointerEvents: 'none'
					}}>
						<Image
							src={data.store_image}
							width={SIZE}
							height={SIZE}
							alt='store Image'
						/>
					</Box>
				</Grid>
				<Grid container item lg={6} md={12} xs={12} spacing={2}>
					<Typography variant='h4'>{data.store_title} </Typography>
					<ReaderHTML content={data.store_desc} />
					<Box sx={{
						display: 'flex',
						flexWrap: 'wrap',
					}}>
					{data.store_content?.map((e, index) => (
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
		</Wrapper>
	);
};

export default StoreBenefit;

const Wrapper = styled(Box)(({ theme }) => {
	return {
		position: 'relative',
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
});