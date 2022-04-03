import { Container } from "@mui/material";
import { Header } from "../../components";

const HomePage = ({ initData, ...props }) => {
	// const { items } = initData;

	// const {
	// 	title,
	// 	banner,
	// 	subtitle,
	// 	about_image,
	// 	about_title,
	// 	about_content,
	// 	tutorial_image,
	// 	tutorial_title,
	// 	tutorail_content,
	// 	blog_title,
	// 	blog_subtitle,
	// 	partner_image,
	// 	partner_title,
	// 	customer_title,
	// 	customer_subtitle,
	// 	customer_image,
	// } = items?.[0];

	return (
		<Container maxWidth='xl'>
			<Header />
		</Container>
	);
};

export default HomePage;
