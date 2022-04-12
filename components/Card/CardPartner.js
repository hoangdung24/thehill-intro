import { Avatar, Card, Box, Typography, Stack, Paper, Link, styled } from "@mui/material";
import createDOMPurify from "isomorphic-dompurify";

const CardPartner = ({ icon, name, description, point_content, link, ...props }) => {
  return (
    <Box
    component={"div"}
      sx={{
        width: 450,
      }}
    >
      <Stack spacing={1} direction="row">
        <WrapperAva elevation={5}>
          <Link href={link}>
            <Avatar alt="Icon" src={icon} sx={{
              height:46,
              width: 46
            }}/>
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
    color: theme.palette.primary.dark,
  };
});

const Content = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.grey[500],
  };
});

const WrapperAva = styled(Paper)(({ theme }) => {
  return {
    borderRadius: "50%",
    background: theme.palette.common.white,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };
});

const ContentBox = styled(Box)(({ theme }) => {
  return {
    padding: "35px 35px",
    background: theme.palette.common.white,
    borderRadius: "0 10px 10px 10px",
    minHeight: '200px',
    minWidth: '280px',
  };
});
