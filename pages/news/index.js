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
	return <NewsPage {...props} />;
};

export default News;

export async function getStaticProps() {
	const data = await getAllData();

	return {
		props: {
			data: data,
		},
		revalidate: 60,
	};
}

// export async function getServerSideProps({ params }) {
// 	console.log(params);

// 	try {
// 		const url = [
// 			`${DOMAIN}${PAGES}?type=${BLOG_CATEGORIES}&fields=*`,
// 			// `${DOMAIN}${PAGES}?type=${BLOG_DETAIL}&fields=*`,
// 		];
// 		console.log(url);
// 		const List = await Promise.all(
// 			url.map((url) => {
// 				axios.get(url).then(({ data }) => {
// 					return data;
// 				});
// 			})
// 		);

// 		let blogDetail;
// 		// let blogCategory;

// 		List.forEach((e, index) => {
// 			if (index === 0) {
// 				blogCategory = e;
// 			} else if (index === 1) {
// 				blogDetail = e;
// 			}
// 		});

// 		return {
// 			props: {
// 				blogDetail: blogDetail,
// 				// blogCategory: blogCategory,
// 			},
// 		};
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
