import axios from "axios";
import { NewsBlog } from "../../containers";
import {
	BLOG_CATEGORIES,
	BLOG_DETAIL,
	BLOG_LIST,
	DOMAIN,
	PAGES,
} from "../../helpers/api";

const NewsDetailPage = ({ ...props }) => {
	return <NewsBlog {...props} />;
};

export default NewsDetailPage;

// export async function getServerSideProps({ params }) {
// 	const { blog } = params;
// 	// console.log(JSON.stringify(blog));

// 	try {
// 		const url = [
// 			`${DOMAIN}${PAGES}?type=${BLOG_CATEGORIES}&fields=*`,
// 			`${DOMAIN}${PAGES}?type=${BLOG_DETAIL}&id=${blog}`,
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

// 		List.forEach((e, index) => {
// 			if (index === 0) {
// 				blogDetail = e;
// 			}
// 		});

// 		return {
// 			props: {
// 				blogDetail: blogDetail,
// 			},
// 		};
// 	} catch (e) {
// 		return console.log(e);
// 	}
// }
