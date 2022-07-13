import {
  useTheme,
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Fade,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";

import BannerTop from "../../components/BannerTop/BannerTop";
import Input from "../../components/Input/Input";
import LineTitle from "../../components/LineTitle/LineTitle";
import Upload from "../../components/Form/Upload";
import InputSelect from "../../components/Input/InputSelect";

import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";
import { Controller, useForm } from "react-hook-form";
import { schema, defaultValues } from "../../libs/yupRegister";
import { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SUBMISSIONS } from "../../apis";
import axios from "../../axios.config";
import InputPhoneNumber from "../../components/Input/InputPhoneNumber";
import NumberFormat from "react-number-format";
import InputNumber from "../../components/Input/InputNumber";

export default function Register({ initData }) {
  const [contactPage, storeCategories] = initData;

  const { banner, title, subtitle, thank_you_text } = contactPage.items[0];
  const { isSmUp, isSmDown, isMdDown } = useMedia();
  const theme = useTheme();

  const [mutationObj, setMutationObj] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState({
    severity: "success",
    content: "",
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
  const {
    clearErrors,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = useCallback(async (data) => {
    reset(defaultValues, {
      keepDirty: false,
    });
    try {
      await axios.post(`${SUBMISSIONS}`, data);
      setMessage({
        severity: "success",
        content: thank_you_text,
      });
      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(true);
      setMessage({
        severity: "error",
        content: "Đăng ký thất bại",
      });
    }
  }, []);

  const passHandler = useCallback(
    ({ acceptedFiles, rejectedFiles, setFiles }) => {
      setMutationObj((prev) => {
        return {
          ...prev,
          setFiles,
        };
      });

      if (rejectedFiles.length > 0) {
        setError("files", {
          message: "Kích thước file vượt quá giới hạn cho phép",
        });

        return;
      } else {
        clearErrors("files");
      }

      setValue("files", acceptedFiles);
    },
    []
  );

  return (
    <Box>
      <BannerTop data={banner} />
      <Container maxWidth="lg">
        <LineTitle titleData={title} type="center" />

        <Box
          onSubmit={handleSubmit(onSubmit)}
          component={"form"}
          sx={[
            {
              width: "40vw",
              margin: "0 auto",
              marginTop: "5.5rem",
            },
            isSmUp && {
              width: "60vw",
            },
            isSmDown && {
              width: "70vw",
            },
          ]}
        >
          <Input
            control={control}
            name="store_name"
            label="Tên quán / Thương hiệu"
          />

          <Input
            control={control}
            name="presentator"
            label="Người đại diện"
            required
          />
          <InputSelect
            control={control}
            name="category"
            label="Danh mục quán"
            data={storeCategories}
          />
          <Input control={control} name="email" label="Email" required />

          <Controller
            {...{
              name: "bank_number",
              control,
              render: ({ field, fieldState: { error } }) => {
                const { onChange, ...props } = field;

                return (
                  <NumberFormat
                    error={error}
                    onValueChange={({ value }) => {
                      onChange(value);
                    }}
                    customInput={InputNumber}
                    {...props}
                    label="Số tài khoản ngân hàng"
                    fullWidth
                  />
                );
              },
            }}
          />

          <Input control={control} name="bank" label="Tên ngân hàng" />
          <Input control={control} name="owner" label="Chủ tài khoản" />

          <Input control={control} name="branch" label="Chi nhánh" />
          <InputPhoneNumber
            control={control}
            name="phone"
            label="Số điện thoại"
            required
          />
          <Upload
            {...{
              control,
              name: "files",
              passHandler,
            }}
          />

          <Fade
            sx={{ display: isSuccess == true ? "block" : "none" }}
            in={isSuccess}
            timeout={{
              enter: 500,
              exit: 500,
            }}
            onExited={() => {
              // setTimeout(() => {
              //   setMessage("");
              // }, 2000);
            }}
          >
            <Alert
              severity={message.severity}
              icon={false}
              sx={{
                textAlign: "center",
                color:
                  message.severity == "success"
                    ? theme.palette.success.dark
                    : theme.palette.primary.dark,
                "& .MuiAlert-message": {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {message.content}
            </Alert>
          </Fade>

          <Button type="submit" sx={{ width: "100%", marginTop: "1rem" }}>
            <Typography variant="button2">ĐĂNG KÝ</Typography>
          </Button>
        </Box>

        <Box sx={{ marginTop: "2.25rem" }}>
          <LineTitle titleData={subtitle} type="center" />
        </Box>

        {/* Phan QRCode */}
        <Box
          sx={[
            {
              boxShadow: " 0px 8px 24px 0 rgba(0, 0, 0, 0.15)",
              borderRadius: "12px",
              width: "40%",
              height: "45vh",
              margin: "0 auto",
              marginTop: "5.5rem",
              marginBottom: "2.5rem",
              padding: "2rem",
            },
            isSmDown && {
              width: "80vw",
              height: "calc(48vw * 1.72)",
              padding: "3rem",
            },
            isMdDown && {
              width: "80vw",
              padding: "2rem",
            },
          ]}
        >
          <Image
            {...{
              src: "/img/barcode-qr 1.png",
              width: "100%",
              height: "100%",
              objectFit: isSmUp ? "contain" : "cover",
            }}
          />
        </Box>

        <Box
          sx={[
            { width: "30vw", margin: "0 auto", marginBottom: "16rem" },
            isSmDown && {
              width: "75vw",
              marginBottom: "5.5rem",
            },
          ]}
        >
          <Typography variant="caption2_bold" sx={{ marginBottom: "0.8rem" }}>
            Chưa có ứng dụng?
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            sx={{ height: "3rem", "& img": { borderRadius: "5px" } }}
          >
            <Image
              {...{
                src: "/img/image 3.png",
                width: "50%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <Image
              {...{
                src: "/img/image 4 (1).png",
                width: "50%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
{
  /* <InputPageNew
control={control}
name="email"
required
InputProps={{
  placeholder: "Nhập email...",
}}
/> */
}
