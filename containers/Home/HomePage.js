import { Container, Box } from "@mui/material";
import { Header, ScrollButton } from "../../components";
import AboutUs from "./components/AboutUs";
import CustomerBenefit from "./components/CustomerBenefit";
import Slider from "./components/Slider";
import Tutorial from "./components/Tutorial";
import StoreBenefit from "./components/StoreBenefit";

const HomePage = ({ homeData, partnerData, ...props }) => {
	const { items } = homeData;
	// console.log(items);
	const {
		subtitle,
		customer_title,
		customer_subtitle,
		customer_image,
		customer_content,
		banner,
		about_content,
		about_image,
		about_title,
		store_title,
		store_desc,
		store_image,
		store_content,
		tutorial_title,
		tutorial_content,
		tutorial_image,
		partner_image,
	} = items?.[0];


	// console.log(customer_content)

	// const { dataPartner } = partnerData;

	// const { name, image, link, description, point_content } = partnerData?.[0];

	// console.log(partnerData);

	return (
		<Container maxWidth='xl'>
			<Header subtitle={subtitle} banner={banner}/>
			<CustomerBenefit
				customer_title={customer_title}
				customer_subtitle={customer_subtitle}
				customer_image={customer_image}
				customer_content={customer_content}
			/>
			<Tutorial
				tutorial_content={tutorial_content}
				tutorial_image={tutorial_image}
				tutorial_title={tutorial_title}
			/>
			<StoreBenefit
				store_title={store_title}
				store_desc={store_desc}
				store_image={store_image}
				store_content={store_content}
			/>

			<AboutUs
				about_title={about_title}
				about_content={about_content}
				about_image={about_image}
			/>
			{/* <Slider partnerData={partnerData} partner_image={partner_image} /> */}
			{/* <ScrollButton /> */}
		</Container>
	);
};

export default HomePage;
