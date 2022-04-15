import { useEffect, useRef, useState } from "react";
import createDOMPurify from "isomorphic-dompurify";
import { Box, Stack, styled, Typography, Button } from "@mui/material";

const BlogItems = ({ minHeight, setMinHeight, ...props }) => {
  const [titleHeight, setTitleHeight] = useState(32);
  const { thumbnail, title, content, meta } = props;
  const { first_published_at } = meta;

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setMinHeight(ref.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    setTitleHeight((prev) => {
      return Math.max(prev, minHeight);
    });
  }, [minHeight]);

  return (
    <Wrapper>
      <ImageWrapper height={"270px"}>
        <img
          src={thumbnail}
          width={"100%"}
          height={"100%"}
          alt={"Thumbnail Image"}
          style={{
            objectFit: "cover",
          }}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Stack spacing={1} alignItems="flex-start">
          <Stack>
            <Typography variant="category">
              {new Date(first_published_at).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Typography>

            <Typography
              ref={ref}
              variant="h5"
              sx={{
                minHeight: titleHeight,
              }}
            >
              {title}
            </Typography>
          </Stack>

          <Box
            dangerouslySetInnerHTML={{
              __html: createDOMPurify.sanitize(content).split(" ").splice(0, 30).join(" "),
            }}
            sx={{
              "& li": {
                listStyleType: "none",
              },
              "& > *": {
                padding: 0,
              },
            }}
          />
          <Button
            sx={{
              paddingLeft: 0,
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "unset",
              },
            }}
            variant="text"
            disableRipple
          >
            Read More
          </Button>
        </Stack>
      </ContentWrapper>
    </Wrapper>
  );
};

export default BlogItems;

const Wrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: theme.shadows[2],
    width: "100%",
  };
});

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    display: "block",
    width: "100%",
    borderRadius: "6px",
  };
});

const ContentWrapper = styled(Box)(({ theme }) => {
  return {
    padding: theme.spacing(2.5),
  };
});
