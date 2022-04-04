import createDOMPurify from "dompurify";
import { Box } from "@mui/system";

const Blog = ({ about_content }) => {
  return (
    <Box
      component={"div"}
      dangerouslySetInnerHTML={{
        __html: createDOMPurify.sanitize(about_content),
      }}
    ></Box>
  );
};

export default Blog;
