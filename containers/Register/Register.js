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
import InputSelect from "../../components/Input/InputSelect";
import LineTitle from "../../components/LineTitle/LineTitle";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";

const valuelineTitle = {
  title: "Đăng Ký",
};

const valuelineTitle2 = {
  title: "Quét Để Trải Nghiệm",
};

export default function Register() {
  const { isSmUp, isSmDown, isMdUp, isMdDown } = useMedia();
  const theme = useTheme();
  return (
    <Box>
      <BannerTop />
      <Container maxWidth="lg">
        <LineTitle data={valuelineTitle} type="center" />

        <Box
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
          <Input label="Tên quán / Thương hiệu" />
          <Input label="Người đại diện" required />
          <InputSelect label="Danh mục quán" />
          <Input label="Tên quán / Thương hiệu" />
          <Input label="Email" required />
          <Input label="Số tài khoản ngân hàng" />
          <Input label="Tên ngân hàng" />
          <Input label="Chủ tài khoản" />
          <Input label="Chi nhánh" />
          <Input label="Số điện thoại" required />

          <Typography
            variant="caption2"
            sx={{ textAlign: "left", color: theme.palette.common.natural3 }}
          >
            Lưu ý: File đính kèm không vượt quá 20MB
          </Typography>

          <Button sx={{ width: "100%", marginTop: "1rem" }}>
            <Typography variant="button2">ĐĂNG KÝ</Typography>
          </Button>
        </Box>

        <Box sx={{ marginTop: "2.25rem" }}>
          <LineTitle data={valuelineTitle2} type="center" />
        </Box>

        {/* Phan QRCode */}
        <Box
          sx={[
            {
              boxShadow: " 0px 8px 24px 0 rgba(0, 0, 0, 0.15)",
              borderRadius: "12px",
              width: "20vw",
              height: "52vh",
              margin: "0 auto",
              marginTop: "5.5rem",
              marginBottom: "2.5rem",
              padding: "3.2rem",
            },
            isSmDown && {
              width: "80vw",
              padding: "2rem",
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
            { width: "18vw", margin: "0 auto", marginBottom: "16rem" },
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
