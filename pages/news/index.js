import axios from "axios";
import { NewsPage } from "../../containers";
import {
	BLOG_CATEGORIES,
	BLOG_DETAIL,
	BLOG_LIST,
	DOMAIN,
	PAGES,
} from "../../helpers/api";
import { getAllData } from "../../helpers/api-util";

const News = ({ ...props }) => {
	return null;
	return <NewsPage {...props} />;
};

export default News;

export async function getServerSideProps({ params }) {
	try {
		const urls = [
			`${PAGES}?type=${BLOG_LIST}&fields=*`,
			`${PAGES}?type=${BLOG_CATEGORIES}&fields=*`,
		];

		const reList = await Promise.all(
			urls.map((url) => {
				return axios.get(url).then(({ data }) => {
					return data;
				});
			})
		);

		console.log(reList);
		let blogCategories;
		let blogDetail;

		// reList.forEach((e, index) => {
		// 	if (index === 0) {
		// 		blogCategories = e;
		// 	} else if (index === 1) {
		// 		blogDetail = e;
		// 	}
		// });

		return {
			props: {
				// blogDetail: JSON.parse(JSON.stringify(blogDetail)),
				// blogCategories: JSON.parse(JSON.stringify(blogCategories)),
				blogDetail: blogDetail,
				blogCategories: blogCategories,
			},
		};
	} catch (e) {
		return console.log(e);
		// redirect: {
		// 	destination: "/404",
		// 	permanent: false,
		// },
	}
}

// export async function getServerSideProps(context) {
// 	const { params, res, req } = context;

// 	// console.log(req.headers.cookie);

// 	let blogDetail;

// 	const response = await axios
// 		.get(`${DOMAIN}${PAGES}?type=${BLOG_CATEGORIES}&fields=*`)
// 		.then((response) => {
// 			console.log(response.data);
// 		});

// 	const data = await response.data.json();

// 	// for (let blogDetail of data){
// 	// 	if(blogDetail ===)
// 	// }

// 	return {
// 		props: {
// 			data: data,
// 			blogDetail: blogDetail,
// 		},
// 	};
// }
