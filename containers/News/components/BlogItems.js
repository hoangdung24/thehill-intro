import { Box, Stack, styled, Typography } from "@mui/material";
import { Image } from "../../../HOC";
import { useCallback } from "react";
import { Button, ReaderHTML } from "../../../components";

const BlogItems = ({chooseBlog, ...props}) => {

    const {thumnbnail, title, tags, content } = props;
    const {first_publiced_date} = meta;

    const onClick = useCallback((data) => {
			return (_) => {
				choosePostHandler(_, data);
			};
		}, []);


    return (
			<Wrapper>
				<ImageWrapper>
					<Image
						src={thumnbnail}
						width={"100%"}
						height={"100%"}
						alt={"Thumbnail Image"}
					/>
				</ImageWrapper>
				<ContentWrapper>
					<Box
						sx={{
							position: "absolute",
							top: 0,
						}}>
						<Typography>
							{new Date(first_publiced_date).toLocaleDateString("vi-VN", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							})}
						</Typography>
					</Box>

					<Box>
						<Stack spacing={0.5}>
							<Box>
								<Typography>{title}</Typography>
							</Box>
							{/* <Box>
								<ReaderHTML>{content}</ReaderHTML>
							</Box> */}
							<Box>
								<Button onClick={onClick(props)}>READ MORE</Button>
							</Box>
						</Stack>
					</Box>
				</ContentWrapper>
			</Wrapper>
		);
}

export default BlogItems;

// styled sheet

const Wrapper = styled(Box)(({theme})=> {
    return{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '6px'
    }
})


const ImageWrapper = styled(Box)(({theme})=> {
    return {

    }
})

const ContentWrapper = styled(Box)(({theme})=> {
    return {

    }
})