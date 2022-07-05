import { Box } from "@mui/material";
import NextImage from "next/image";
import { useMeasure } from "react-use";
import { forwardRef } from "react";

const Image = forwardRef(
  (
    { WrapperProps = {}, src, width, height, layout = "fill", ...props },
    ref
  ) => {
    const [Ref, { widthq, heightq }] = useMeasure();
    const loader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`;
    };

    const { sx = {}, ...restWrapperProps } = WrapperProps;

    if (!src) {
      return null;
    }

    if (layout === "fill") {
      return (
        <Box
          ref={ref}
          sx={{
            ...{
              position: "relative",
              width,
              height,
            },
            ...sx,
          }}
          {...restWrapperProps}
        >
          <NextImage
            {...{
              src,
              layout,
              placeholder: "blur",
              objectFit: "contain",
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
              ...(layout !== "fill" && {
                layout,
                width,
                height,
              }),
              ...(src.includes("http") && {
                loader,
              }),
              ...props,
            }}
          />
        </Box>
      );
    } else {
      return (
        <NextImage
          ref={ref}
          {...{
            src,
            layout,
            placeholder: "blur",
            objectFit: "contain",
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
            width,
            height,
            ...(src.includes("http") && {
              loader,
            }),
            ...props,
          }}
        />
      );
    }
  }
);

export default Image;

// if (router.pathname == "/du-lich") {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#0873b9",
//         width: "100vw",
//         display: router.pathname == "/" ? "none" : "block",
//       }}
//       paddingY={4}
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ marginBottom: "10px" }}>
//           <Typography
//             variant="h5"
//             sx={{ color: "white", fontWeight: "bold" }}
//           >
//             CÔNG TY TNHH CIVILIS
//           </Typography>
//         </Box>

//         <Stack direction="row" spacing={10}>
//           <Box sx={{ width: "50%" }}>
//             <Box sx={{ marginBottom: "10px" }}>
//               <Content variant="caption1">
//                 Người đại diện: NGUYỄN TIẾN ĐẠT
//               </Content>
//               <Content variant="caption1">
//                 Giấy phép kinh doanh Lữ Hành Quốc Tế 79-361/2014/TCDL-GPLHQT
//                 Số ĐKKD 0311400064 do Sở KHĐT Tp.HCM cấp ngày 08/12/2011
//               </Content>
//               <Content variant="caption1">Hotline: 0989 633 678</Content>
//               <Content variant="caption1">
//                 Email: info@toptentravel.com.vn
//               </Content>
//             </Box>
//             <Box>
//               <Content variant="caption1">VĂN PHÒNG ĐẠI DIỆN HÀ NỘI</Content>
//               <Content variant="caption1">
//                 Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.
//                 Thanh Xuân
//               </Content>
//               <Content variant="caption1">Hotline: 028 888 888 88 </Content>
//             </Box>
//           </Box>

//           <Box sx={{ width: "50%" }}>
//             <Box sx={{ marginBottom: "10px" }}>
//               <Content variant="caption1">VĂN PHÒNG ĐẠI DIỆN HÀ NỘI</Content>
//               <Content variant="caption1">
//                 Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.
//                 Thanh Xuân, Hà Nội
//               </Content>
//               <Content variant="caption1">Hotline: 028 888 888 88 </Content>
//             </Box>
//             <Box sx={{ marginBottom: "10px" }}>
//               <Content variant="caption1">VĂN PHÒNG ĐẠI DIỆN HÀ NỘI</Content>
//               <Content variant="caption1">
//                 Biệt thự 6 - 96 Nguyễn Huy Tưởng, P. Thanh Xuân Trung, Q.
//                 Thanh Xuân, Hà Nội
//               </Content>
//               <Content variant="caption1">Hotline: 028 888 888 88 </Content>
//             </Box>

//             <Stack direction="row" spacing={5}>
//               <Link href="/">
//                 <Content
//                   variant="h5"
//                   sx={{ borderBottom: "1px solid white" }}
//                 >
//                   ĐIỀU KHOẢN SỬ DỤNG
//                 </Content>
//               </Link>
//               <Link href="/">
//                 <Content
//                   variant="h5"
//                   sx={{ borderBottom: "1px solid white" }}
//                 >
//                   CHÍNH SÁCH BẢO MẬT
//                 </Content>
//               </Link>
//             </Stack>
//           </Box>
//         </Stack>
//       </Container>
//     </Box>
//   );
// } else if (router.pathname == "/du-hoc") {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#0873b9",
//         width: "100vw",
//         display: router.pathname == "/" ? "none" : "block",
//       }}
//       paddingY={4}
//     >
//       <Container maxWidth="lg">
//         <Stack direction="row" spacing={10}>
//           <Box sx={{ width: "50%" }}>
//             <Box sx={{ marginBottom: "10px" }}>
//               <Title variant="h4" sx={{ marginBottom: "10px" }}>
//                 CÔNG TY TNHH CIVILIS
//               </Title>
//               <Content variant="caption1">
//                 Đại diện pháp lý: NGUYỄN TIẾN ĐẠT
//               </Content>
//               <Content variant="caption1">
//                 Giấy phép kinh doanh số: 0314993126 (Cấp bởi Sở Kế Hoạch và
//                 Đầu Tư Tp.HCM)
//               </Content>
//               <Content variant="caption1">
//                 Giấy phép tư vấn du học số: 2270/GDĐT-TC (Cấp bởi Bộ Giáo Dục
//                 và Đào Tạo)
//               </Content>
//               <Content variant="caption1">Hotline: 0989 633 678</Content>
//               <Content variant="caption1">
//                 Email: info@toptentravel.com.vn
//               </Content>
//             </Box>
//           </Box>

//           <Box sx={{ width: "50%" }}>{renderAddress()}</Box>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }
