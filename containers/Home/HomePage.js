import { Container, Box } from "@mui/material";
import { Header, ScrollButton } from "../../components";
import AboutUs from "./components/AboutUs";
import GridBenefit from "./components/GridBenefit";
import GridChoose from "./components/GridChoose";
import Slider from "./components/Slider";

const HomePage = ({ homeData, partnerData, ...props }) => {
	const { items } = homeData;
	// console.log(items);
	const {
		subtitle,
		customer_title,
		banner,
		about_content,
		about_image,
		store_title,
	} = items?.[0];

	// const { dataPartner } = partnerData;

	// const { name, image, link, description, point_content } = partnerData?.[0];

	// console.log(partnerData);

	return (
		<Container maxWidth='xl'>
			<Header subtitle={subtitle} />
			<GridChoose customer_title={customer_title} />
			<GridBenefit store_title={store_title} />
			<AboutUs about_content={about_content} about_image={about_image} />
			{/* <Slider partnerData={partnerData} /> */}
			{/* <ScrollButton /> */}
		</Container>
	);
};

export default HomePage;
