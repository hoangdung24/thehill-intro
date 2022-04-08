import axios from "axios";
import { ContactPage } from "../containers";
import { CONTACT, PAGES, STORE_CATEGORIES } from "../helpers/api";

const Contact = ({ ...props }) => {
	return <ContactPage {...props} />;
};

export default Contact;

// GET DATA

export async function getServerSideProps({ params }) {
	try {
		const urls = [`${PAGES}?type=${CONTACT}&fields=*`, `${STORE_CATEGORIES}`];
		const reList = await Promise.all(
			urls.map((url) => {
				return axios.get(url).then(function ({ data }) {
					return data;
				});
			})
		);

		let dataContact;
		let storeCategories;

		reList.forEach((e, index) => {
			if (index === 0) {
				dataContact = e;
			} else if (index === 1) {
				storeCategories = e;
			}
		});

		return {
			props: { dataContact: dataContact, storeCategories: storeCategories },
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
