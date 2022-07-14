import { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useTheme,
  Box,
  styled,
  Grid,
  Typography,
  Stack,
  Fade,
  Alert,
} from "@mui/material";

import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import { defaultValues, subscribeSchema } from "../../libs/subscribeSchema";
import useMedia from "../../hooks/useMedia";
import { SUBSCRIBERS } from "../../apis";
import axios from "../../axios.config";
import Input from "../Input/Input";
import { Image } from "../../HOC";
import Link from "../Link";

export default function FooterContent({ setting }) {
  const { isSmDown, isMdDown } = useMedia();
  const theme = useTheme();

  const [isSuccess, setIsSuccess] = useState(false);

  const [message, setMessage] = useState({
    severity: "success",
    content: "work",
  });

  const { handleSubmit, reset, control } = useForm({
    defaultValues,
    resolver: subscribeSchema,
  });

  useEffect(() => {
    let timer;

    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess]);

  const onSubmit = useCallback(async (data) => {
    try {
      await axios.post(`${SUBSCRIBERS}`, data);

      reset(defaultValues, {
        keepDirty: false,
      });

      setMessage({
        severity: "success",
        content: "Đăng ký thành công",
      });

      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(true);
      setMessage({
        severity: "error",
        content: err.response.data.message,
      });
    } finally {
    }
  });

  if (setting == undefined) {
    return null;
  }

  const {
    address,
    tax_code,
    hotline,
    email,
    title_column_1,
    title_column_2,
    title_column_3,
    link_in_column_1,
    link_in_column_2,
    logo_footer,
  } = setting;

  return (
    <Grid container sx={{ marginBottom: "4rem" }} rowSpacing={3} columnSpacing={3}>
      <Grid item xs={12} md={1}>
        <Image
          {...{
            src: logo_footer,
            width: "80px",
            height: "80px",
            objectFit: "contain",
            alt: "logo footer",
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <Box>
          <Title variant="body2_bold" sx={[isSmDown && { marginBottom: 3 }]}>
            {title_column_1}
          </Title>
          {link_in_column_1.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.value.link}
                sx={{
                  display: "block",
                  transition: "all 0.5s",
                  "& p:hover": {
                    color: theme.palette.primary.light,
                  },
                }}
              >
                <Content variant="caption1">{item.value.title}</Content>
              </Link>
            );
          })}
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <Box>
          <Title variant="body2_bold">{title_column_2}</Title>
          {link_in_column_2.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.value.link}
                sx={{
                  display: "block",
                  transition: "all 0.5s",
                  "& p:hover": {
                    color: theme.palette.primary.light,
                  },
                }}
              >
                <Content variant="caption1">{item.value.title}</Content>
              </Link>
            );
          })}
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Box>
          <Title variant="body2_bold">{title_column_3}</Title>

          <Content variant="caption1" sx={{ marginBottom: "0.5rem !important" }}>
            {address}
          </Content>

          <Content variant="caption1">MST: {tax_code}</Content>

          <Link href={"tel:" + hotline}>
            <Content variant="caption1">SĐT: {hotline}</Content>
          </Link>

          <Link href={"mailto:" + email}>
            <Content variant="caption1">Email: {email}</Content>
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box>
          <Title variant="body2_bold">Đăng ký nhận tin</Title>
          <Content variant="caption1">
            Đăng ký với chúng tôi để nhận ưu đãi mỗi ngày.
          </Content>
          <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...{
                control,
                name: "email",
                FormControlProps: {
                  variant: "outlined",
                },
                InputProps: {
                  placeholder: "Nhập email",
                  sx: {
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "common.neutral4",
                    borderRadius: "8px",
                  },
                  endAdornment: (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        zIndex: 1,
                        borderRadius: "50%",
                        padding: 0.5,
                        backgroundColor: "secondary.main",
                        transition: "0.3s",
                        ["&:hover"]: {
                          opacity: 0.75,
                        },
                      }}
                      onClick={handleSubmit(onSubmit)}
                    >
                      <ArrowRightAltOutlinedIcon
                        sx={{
                          color: "common.white",
                        }}
                      />
                    </Box>
                  ),
                },
              }}
            />

            <Fade
              in={isSuccess}
              timeout={{
                enter: 500,
                exit: 500,
              }}
              onExited={() => {
                setMessage("");
              }}
            >
              <Alert
                icon={false}
                sx={{
                  "& .MuiAlert-message": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                    color: message.severity === "success" ? "success.main" : "error.main",
                  },
                }}
              >
                {message.content}
              </Alert>
            </Fade>
          </Box>
          <Stack direction="row" spacing={1}>
            <Image
              {...{
                src: "/img/image 6.png",
                width: "120px",
                height: "60px",
              }}
            />
            <Image
              {...{
                src: "/img/image 7.png",
                width: "120px",
                height: "60px",
              }}
            />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

const Title = styled(Typography)(({ theme }) => {
  return {
    display: "block",
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.common.black,
      marginBottom: "1.5rem",
    },
  };
});

const Content = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.neutral2,
    marginBottom: 8,
    display: "block",
  };
});
