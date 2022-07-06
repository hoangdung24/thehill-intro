import {
  useTheme,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BannerTop from "../../components/BannerTop/BannerTop";
import Input from "../../components/Input/Input";
// import InputSelect from "../../components/Input/InputSelect";
import LineTitle from "../../components/LineTitle/LineTitle";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";
import { styled } from "@mui/material/styles";
// import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { useForm } from "react-hook-form";
import { schema, defaultValues } from "../../libs/yupRegister";
import { useCallback } from "react";
import InputFiles from "../../components/Input/InputFile";
import { yupResolver } from "@hookform/resolvers/yup";
import { DOMAIN, SUBMISSIONS } from "../../apis";
import axios from "../../axios.config";
import { useSetting } from "../../hooks";
import InputSelect from "../../components/Input/InputSelect";

const InputFile = styled("input")({
  display: "none",
});

export default function Register({ initData }) {
  const [contactPage, storeCategories] = initData;
  const { banner, title, subtitle } = contactPage.items[0];
  const { isSmUp, isSmDown, isMdUp, isMdDown } = useMedia();
  const theme = useTheme();
  console.log("initDatainitData", storeCategories);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = useCallback(async (data) => {
    console.log(data);
    reset(defaultValues, {
      keepDirty: false,
    });
    try {
      await axios.post(`${SUBMISSIONS}`, data);
    } catch (err) {
      console.log("lỗi", err);
    }
  }, []);

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
          <InputSelect
            control={control}
            name="category"
            label="Danh mục quán"
            data={storeCategories}
          />
          <Input
            control={control}
            name="presentator"
            label="Người đại diện"
            required
          />
          <Input control={control} name="email" label="Email" required />
          <Input
            control={control}
            name="bank_number"
            label="Số tài khoản ngân hàng"
          />
          <Input control={control} name="bank" label="Tên ngân hàng" />
          <Input control={control} name="owner" label="Chủ tài khoản" />
          {/* <InputPhoneNumber
            control={control}
            name="phone"
            label="Số điện thoại"
            required
          /> */}
          {/* <Input
            control={control}
            name="phone"
            label="Số điện thoại"
            required
          /> */}

          <Input control={control} name="branch" label="Chi nhánh" />
          <InputFiles control={control} name="files" label="TỆP TIN ĐÍNH KÈM" />
          {/* <Box>
            <label htmlFor="contained-button-file">
              <InputFile
                control={control}
                name="files"
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button variant="outlined" component="span">
                <Stack direction="row" spacing={1} alignItems="center">
                  <UploadFileOutlinedIcon
                    sx={{ color: theme.palette.common.natural2 }}
                  />
                  <Typography
                    variant="button2"
                    sx={{ color: theme.palette.common.natural2 }}
                  >
                    TỆP TIN ĐÍNH KÈM
                  </Typography>
                </Stack>
              </Button>
            </label>
          </Box> */}
          <Box>
            <Typography
              variant="caption2"
              sx={{ textAlign: "left", color: theme.palette.common.natural3 }}
            >
              Lưu ý: File đính kèm không vượt quá 20MB
            </Typography>
          </Box>

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
              height: "500px",
              padding: "2.5rem",
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
