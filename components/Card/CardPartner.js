import styled from "@emotion/styled";
import { Avatar, Card, Box, Typography, Stack, Paper, Link } from "@mui/material";
import { Theme } from "../../HOC";
import createDOMPurify from "isomorphic-dompurify";

const CardPartner = ({ icon, name, description, point_content, link, ...props }) => {
  return (
    <Box
      sx={{
        width: 450,
      }}
    >
      <Stack spacing={1} direction="row">
        <WrapperAva elevation={5}>
          <Link href={link}>
            <Avatar alt="Icon" src={icon} />
          </Link>
        </WrapperAva>
        <ContentBox>
          <Stack spacing={2}>
            <Box
              component={"div"}
              dangerouslySetInnerHTML={{
                __html: createDOMPurify.sanitize(point_content),
              }}
            ></Box>
            <Content variant="body2">{description}</Content>
            <Title variant="h6">{name}</Title>
          </Stack>
        </ContentBox>
      </Stack>
    </Box>
  );
};

export default CardPartner;

// styled Sheet

const Title = styled(Typography)(({ theme }) => {
  return {
    color: Theme.palette.primary.dark,
  };
});

const Content = styled(Typography)(({ theme }) => {
  return {
    color: Theme.palette.grey[500],
  };
});

const WrapperAva = styled(Paper)(({ theme }) => {
  return {
    borderRadius: "50%",
    background: Theme.palette.common.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };
});

const ContentBox = styled(Box)(({ theme }) => {
  return {
    margin: 50,
  };
});
