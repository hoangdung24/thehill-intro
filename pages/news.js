import axios from "axios";
import { NewsPage } from "../containers";
import {
	BLOG_CATEGORIES,
	BLOG_DETAIL,
	BLOG_LIST,
	PAGES,
} from "../helpers/api";

const News = ({ ...props }) => {
	// return null;
	return <NewsPage {...props} />;
};

export default News;

export async function getServerSideProps({ params }) {
	try {
		const urls = [
			`${PAGES}?type=${BLOG_DETAIL}&fields=*`,
			`${PAGES}?type=${BLOG_CATEGORIES}&fields=*`,
			`${PAGES}?type=${BLOG_LIST}&fields=*`,
		];

		const reList = await Promise.all(
			urls.map(async (url) => {
				return axios.get(url).then(function ({ data }) {
					return data;
				});
			})
		);

		// console.log(reList);
		let blogCategories;
		let blogDetail;
		let blogList;

		reList.forEach((e, index) => {
			if (index === 0) {
				blogDetail = e;
			} else if (index === 1) {
				blogCategories = e;
			} else if (index === 2) {
				blogList = e;
			}
		});

		return {
			props: {
				blogDetail: blogDetail,
				blogCategories: blogCategories,
				blogList: blogList,
			},
		};
	} catch (e) {
		return {
			redirect: {
				destination: "/404",
				permanent: false,
			},
		};
	}
}
