import { Box, Grid, Pagination, styled, Typography, Stack, usePagination, PaginationItem, Button, Fade } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useToggle, useUpdateEffect } from "react-use";
import useSWR from "swr";
import { updatePathname, transformSearchParams } from "../../../helpers";
import queryString, { stringify } from "query-string";
import { BLOG_DETAIL, PAGES } from "../../../helpers/api";
import { LoadingData } from "../../../HOC";
import BlogItems from "./BlogItems";
import { isEqual } from "lodash";
import { useRouter } from "next/router";
import Tag from "./TagList";
import SearchBar from "./SearchBar";
import Category from "./Category";
import {useParams} from '../../../hooks'

const BlogList = ({ blogDetail,blogCategory, tags, ...props }) => {

    const blogCategories = blogCategory?.items;
	const router = useRouter();
	const [data, setData] = useState(blogDetail?.items);
	const [open, toggle] = useToggle(false);
	const [loading, setLoading] = useState(false);
	const [selectedBlog, setSelectedBlog] = useState("");


	const {itemsList} = usePagination({
		count: blogDetail.items / 6
	})

	const [params, paramsHandler, isReady, resetParams] = useParams({initState: {
		limit: 6,
		offset: 0,
		fields: "*"
	},
		callback: (params) => {

			console.log(params);
	},
});

	

	const { data: resData, error } = useSWR(() => {
		const stringifyParams = queryString.stringify(params);

		return `${PAGES}?type=${BLOG_DETAIL}&fields=*&${stringifyParams}`;
	});

	useUpdateEffect(() => {
		if (resData?.items?.length === 0 && data?.items?.length === 0) {
			setLoading(false);
		}

		if (isEqual(resData?.items, data)) {
			return;
		}
		setData(resData?.items);
		setLoading(false);
	}, [resData, data]);

	const chooseBlogHandler = useCallback((_, data) => {
		toggle(true), setSelectedBlog(data);
	}, []);

	const chooseTagHandler = useCallback((_, data)=>{
		paramsHandler({
			tags: data
		})
	}, [])

	const selectedCategory = useCallback((e) => {
		return () => {
			setSelectedBlog(e)
			console.log(e)
		}
	}, [] )


	if (!isReady) {
		return "Loading..."
	}

	return (
		<Fade
		in={true}
		timeout={{
			enter: 500
		}}>
			<Wrapper>
				{selectedBlog}
				<Grid container spacing={2} direction={"row"}>
					<Grid item xs={12} lg={9}>
						<Grid container spacing={4}>
							<LoadingData
								data={resData}
								error={error}
								loading={loading}
								chooseBlogHandler={chooseBlogHandler}>
								{({ data, chooseBlogHandler }) => {
									return data.items.map((e) => {
										return (
											<Grid item xs={12} md={6} key={e.id}>
												<BlogItems {...e} chooseBlog={chooseBlogHandler} />
											</Grid>
										);
									});
								}}
							</LoadingData>
						</Grid>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignContent: "center",
								alignItems: "center",
								paddingTop: 5,
							}}>
							<Pagination
								shape='rounded'
								count={Math.ceil(blogDetail.meta.total_count / 6)}
								variant='outlined'
								size='large'
								onChange={(_, page) => {
									paramsHandler({
										offset: (page - 1) * 6,
									});
								}}></Pagination>
						</Box>
					</Grid>

					<Grid item xs={12} lg={3}>
						<Stack spacing={2}>
							<Box>
								<SearchBar />
							</Box>
							<Box>
								<Typography variant='title2'>CATEGORY</Typography>
								{blogCategories.map((e, index)=> {
									return (
										<Category data={e} key={index} onClick={selectedCategory(e.id)}/>
									)
								})}
							</Box>
							<Box>
								<Typography variant='title2'>POPULAR TAG</Typography>
								<Tag
									onClick={chooseTagHandler}
									selectedItem={params.tags}
									{...tags}
								/>
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Wrapper>
		</Fade>
	);
};

export default BlogList;

// styled sheet
const Wrapper = styled(Box)(({ theme }) => {
	return {
        paddingTop: 80,
        paddingBottom: 80,
    };
});
