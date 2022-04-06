import createDOMPurify from "isomorphic-dompurify";
import { Box } from "@mui/system";

const Blog = ({ about_content , ...props }) => {
  return (
    <Box
      component={"div"}
      dangerouslySetInnerHTML={{
        __html: createDOMPurify.sanitize(about_content),
      }}
    >
    </Box>
  );
};

export default Blog;

// styled sheet
