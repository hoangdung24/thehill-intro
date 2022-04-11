import { Container, Box } from "@mui/material";
import {Header} from '../../components'
import {AboutUs, CustomerBenefit, SliderCarousel, StoreBenefit, Tutorial} from './components'

const HomePage = ({ homeData, partnerData, ...props }) => {
	const { items } = homeData;
	// const { dataPartner } = partnerData;

	const data = items?.[0]
	// console.log(partnerData);
	// console.log(items);

	// console.log(customer_content)

	

	// const { name, image, link, description, point_content } = partnerData?.[0];

	// console.log(partnerData);

	return (
		<Box>
			<Header data={data} />
			<CustomerBenefit data={data} />
			<Container maxWidth='lg'>
				<StoreBenefit data={data} />
				<AboutUs data={data} />
				<Tutorial data={data} />
			</Container>
			<SliderCarousel data={data} partnerData={partnerData} />
		</Box>
	);
};

export default HomePage;
