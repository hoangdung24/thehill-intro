/* eslint-disable jsx-a11y/alt-text */
import { GridContainer, QRcode, Image, Theme } from "../../components";
import { Container, Stack, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const SIZE = 35;

const TRANSITION = "all 0.5s";

const Footer = (props) => {
	return (
		<footer>
			<GridContainer
				OuterProps={{
					sx: {
						backgroundColor: Theme.palette.primary.main,
						padding: 2,
					},
				}}>
				<Container maxWidth='xl'>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={2.4}>
							<Title variant='h5'>Trang chủ</Title>
							<Stack
								spacing={{
									xs: 1,
									sm: 2,
									md: 4,
									lg: 5,
								}}
								justifyContent='flex-end'>
								<Subtile variant='subtitle1'>Điều Kiện & Điều Khoản</Subtile>
								<Subtile variant='subtitle1'>Chính sách sử dụng</Subtile>
								<Subtile variant='subtitle1'>FAQ</Subtile>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={2.4}>
							<Title variant='h5'>Trang chủ</Title>
							<Stack
								spacing={{
									xs: 1,
									sm: 2,
									md: 4,
									lg: 5,
								}}
								justifyContent='flex-end'>
								<Subtile variant='subtitle1'>Điều Kiện & Điều Khoản</Subtile>
								<Subtile variant='subtitle1'>Chính sách sử dụng</Subtile>
								<Subtile variant='subtitle1'>FAQ</Subtile>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={2.4}>
							<Title variant='h5'>Trở thành đối tác</Title>
							<Stack
								spacing={{
									xs: 1,
									sm: 2,
									md: 4,
									lg: 5,
								}}>
								<Subtile variant='subtitle1'>Chính sách sử dụng</Subtile>
								<Subtile variant='subtitle1'>FAQ</Subtile>
							</Stack>
						</Grid>
						<Grid item xs={12} sm={2.4}>
							<Title variant='h5'>Liên Hệ</Title>
							<Stack
								direction={"row"}
								alignItems={"center"}
								spacing={1.5}
								position='relative'>
								<Image src='/linkedin.svg' height={SIZE} width={SIZE} />

								<Image src='/instagram.svg' height={SIZE} width={SIZE} />

								<Image src='/facebook.svg' height={SIZE} width={SIZE} />

								<Image src='/youtube.svg' height={SIZE} width={SIZE} />
							</Stack>
						</Grid>
						<Grid item xs={12} sm={2.4}>
							<QRcode />
						</Grid>
					</Grid>
				</Container>
			</GridContainer>
		</footer>
	);
};

export default Footer;

// Styled Sheet

const Title = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.white,
		paddingBottom: 20,
	};
});

const Subtile = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.grey[600],
		transition: TRANSITION,
		"&:hover": {
			color: "#5B7DB1",
		},
	};
});
