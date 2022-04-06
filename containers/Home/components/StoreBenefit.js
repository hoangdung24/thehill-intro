import {  Grid, Typography, Box } from "@mui/material";
import { CustomerCard} from "../../../components";
import createDOMPurify from 'isomorphic-dompurify'
import {Image} from '../../../HOC'
import Blog from "../../News/components/Blog";
import styled from "@emotion/styled";
const SIZE = 450

const StoreBenefit = ({ store_title, store_desc, store_image, store_content, ...props }) => {
	return (
		<Wrapper>
			<Grid container spacing={2}>
				<Grid item lg={6}>
					<Box>
						<Image
							src={store_image}
							width={SIZE}
							height={SIZE}
							alt='store Image'
						/>
					</Box>
				</Grid>
				<Grid container item lg={6} md={12} xs={12} spacing={2}>
					<Typography variant='h3'>{store_title} </Typography>
					<Blog about_content={store_desc} />
					{store_content?.map((e, index) => (
						<Grid key={index} item lg={6} md={6} xs={6}>
							<CustomerCard
								icon={e.value.icon}
								desc={e.value.desc}
								title={e.value.title}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default StoreBenefit;

const Wrapper = styled(Box)(({ theme }) => {
	return {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(4),
	};
});