import { Container } from "@mui/material";
import { Fragment } from "react";

import Banner from "./components/Banner";
import BlogList from "./components/BlogList";

const NewsPage = ({ blogDetail, blogCategories, blogList, tags, ...props }) => {
  return (
    <Fragment>
      <Banner blogList={blogList?.items?.[0]} />
      <Container maxWidth="lg">
        <BlogList blogDetail={blogDetail} tags={tags} blogCategory={blogCategories} />
      </Container>
    </Fragment>
  );
};

export default NewsPage;
