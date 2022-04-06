import {Box, Grid, Stack, Typography} from '@mui/material'
import { QRcode } from '../../components';
import { Image } from '../../HOC';
import { styled } from '@mui/styles';


const SIZE = "2vw";

const TRANSITION = "all 0.5s";

const FooterBottom = () => {
    return (
			<WrapperBottom>
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
			</WrapperBottom>
		);
}

export default FooterBottom;

const Title = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.white,
		paddingBottom: 20,
	};
});

const Subtile = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.grey[400],
		transition: TRANSITION,
		"&:hover": {
			color: theme.palette.secondary.main,
		},
	};
});

const WrapperBottom = styled(Box)(({theme}) => {
    return {
        
    }
})