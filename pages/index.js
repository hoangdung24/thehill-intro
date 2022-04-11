import { HomePage } from "../containers";
import { HOME_PAGE, PAGES, PARTNER } from "../helpers/api";
import axios from "axios";

const Home = ({ ...props }) => {
	// console.log(props);
	// return null;
	return <HomePage {...props} />;
};

export default Home;

export async function getServerSideProps({ params }) {
	try {
		const urls = [`${PAGES}?type=${HOME_PAGE}&fields=*`, `${PARTNER}?fields=*`];
		const reList = await Promise.all(
			urls.map((url) => {
				return axios.get(url).then(function ({ data }) {
					return data;
				});
			})
		);

		// console.log(reList);

		let homeData;
		let partnerData;

		reList.forEach((e, index) => {
			if (index === 0) {
				homeData = e;
			} else if (index === 1) {
				partnerData = e;
			}
		});

		return {
			props: {
				homeData: homeData,
				partnerData: partnerData,
			},
		};
	} catch (e) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
}
