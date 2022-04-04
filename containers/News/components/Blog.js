import DOMPurify from "isomorphic-dompurify";
import { Box } from "@mui/system";

const Blog = ({ about_content }) => {
	return (
		<Box
			component={"div"}
			dangerouslySetInnerHTML={{
				__html: DOMPurify.sanitize(about_content),
			}}></Box>
	);
};

export default Blog;
