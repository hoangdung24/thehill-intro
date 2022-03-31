import { Grid } from "@mui/material";
import { BlogCard, GridContainer, SubHeader } from "../../components";
import useSWR from "swr";
import { useState, useCallback, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { BLOG_LIST } from "../../helpers/api";

const NewsBlog = ({ blogList }) => {
	const [data, setData] = useState(blogList);
	const [list, setList] = useState("");

	const router = useRouter;

	const { data: response } = useSWR(() => {
		if (list === "") {
			return;
		}
		return `${BLOG_LIST}`;
	});

	return (
		<Fragment>
			<SubHeader title={"NEWS DETAIL PAGE"} />
			<BlogCard {...{ blogList }} />
		</Fragment>
	);
};

export default NewsBlog;
