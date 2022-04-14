import { Box, Stack, styled, Typography } from "@mui/material";
import { Image } from "../../../HOC";
import { useCallback } from "react";
import { Button, ReaderHTML } from "../../../components";
import createDOMPurify from "isomorphic-dompurify";
import BlogDetail from "./BlogDetail";
import { useState } from "react";
import { useDevice } from "../../../hooks";

const BlogItems = ({ chooseBlog, ...props}) => {

	// console.log(props);

    const { thumbnail, title, content, meta } = props;
    const { first_published_at } = meta;

	const [selectedBlog, setSelectedBlog] = useState(null);

	const {isMobile, isTablet} = useDevice()

    const onClick = useCallback((data) => {
			return (_) => {
				// console.log(data);
				chooseBlog(_, data)
			};
		}, []);


    return (
			<Wrapper isMobile={isMobile} isTablet={isTablet} onClick={onClick(props)}>
				<ImageWrapper>
					<img
						src={thumbnail}
						width={"100%"}
						height={"270px"}
						alt={"Thumbnail Image"}
						style={{
							borderRadius: "6px",
						}}
					/>
				</ImageWrapper>
				<ContentWrapper>
					<Box
						sx={{
							top: 0,
						}}>
						<Typography variant='category'>
							{new Date(first_published_at).toLocaleDateString("vi-VN", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</Typography>
						
					</Box>

					<Box>
						<Stack spacing={0.5}>
							<Box>
								<Typography variant='h4'>{title}</Typography>
							</Box>
							<Box
								dangerouslySetInnerHTML={{
									__html: createDOMPurify
										.sanitize(content)
										.split(" ")
										.splice(0, 35)
										.join(" "),
								}}
								sx={{
									"& p": {
										fontSize: "14px",
										fontWeight: 500,
									},
									"& h2": {
										fontSize: "14px",
										fontWeight: 500,
									},
									"& b": {
										fontSize: "14px",
										fontWeight: 500,
										fontStyle: "normal",
									},
									"& i": {
										fontSize: "14px",
										fontWeight: 500,
										fontStyle: "normal",
									},
									"& c": {
										fontSize: "14px",
										fontWeight: 500,
										fontStyle: "normal",
									},
									"& li": {
										fontSize: "14px",
										fontWeight: 500,
										fontStyle: "normal",
										listStyleType: "none",
									},
								}}></Box>
						</Stack>
						<Box
							sx={{
								position: "absolute",
								bottom: 15,
								left: 15,
							}}>
							<Button
								onClick={onClick(props)}
								title='READ MORE'
								isBackground={true}></Button>
							<BlogDetail data={selectedBlog} />
						</Box>
					</Box>
				</ContentWrapper>
			</Wrapper>
		);
}

export default BlogItems;

// styled sheet

const Wrapper = styled(Box, {shouldForwardProp: (prop) => {
	return prop !== "isTablet" && prop !== "isMobile"
}})(({theme, isTablet , isMobile})=> {
    return{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: isTablet ? "6px" : "24px",
		backgroundColor: "#fff",
		boxShadow: theme.shadows[5],
		width: isTablet ? "400px" : "100%",
		height: "600px"
    }
})


const ImageWrapper = styled(Box)(({theme})=> {
    return {
		display: 'block',
		width: "100%",
		borderRadius: "6px"
    }
})

const ContentWrapper = styled(Box)(({theme})=> {
    return {
		margin: 0,
		padding: "1.5rem"
    }
})