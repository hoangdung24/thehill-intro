import {Box, Grid, Stack, Typography, Link, styled} from '@mui/material'
import { QRcode } from '../../components';
import { Image } from '../../HOC';
import { useSetting, useDevice } from '../../hooks';
import {useRouter} from 'next/router'

const SIZE = "38px";

const TRANSITION = "all 0.5s";

const FooterBottom = () => {

	const router = useRouter();

	const {isTablet} = useDevice();

	const {
		title_column_1,
		title_column_2,
		title_column_3,
		link_in_column_1,
		link_in_column_2,
		social_icons,
		email,
		hotline,
		working_desc
	} = useSetting();


	const handleClick = (title) => {
		return () => {
			const pathname = router.pathname;
			if (title === 'Điều khoản và điều kiện'){
				router.push(`condition`)
			} else if (title === 'Chính sách sử dụng'){
				router.push(`policy`)
			} else if (title === 'Trở thành đối tác'){
				router.push(`contact`)
			}
		}
	};
    return (
			<WrapperBottom>
				<Grid container spacing={5}>
					<Grid item xs={12} md={3} lg={3}>
						<Title variant='h5'>{title_column_1}</Title>
						<Stack spacing={2}>
							{link_in_column_1?.map((el, index) => (
								<Box
									key={index}
									onClick={handleClick(el.value.title)}
									sx={{
										cursor: "pointer",
									}}>
									<Subtile variant='body1'>{el.value.title}</Subtile>
								</Box>
							))}
						</Stack>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<Title variant='h5'>{title_column_2}</Title>
						<Stack spacing={2}>
							{link_in_column_2?.map((el, index) => (
								<Box
									key={index}
									onClick={handleClick(el.value.title)}
									sx={{
										cursor: "pointer",
									}}>
									<Subtile variant='body1'>{el.value.title}</Subtile>
								</Box>
							))}
						</Stack>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<Title variant='h5'>{title_column_3}</Title>
						<Stack spacing={2}>
							<Stack spacing={2} direction='row'>
								{social_icons?.map((el, index) => (
									<Link key={index} href={el.value.link} underline='none'>
										<Image
											src={el.value.icon}
											width={SIZE}
											height={SIZE}
											alt='icon'
										/>
									</Link>
								))}
							</Stack>
							<Box
								sx={{
									cursor: "default",
								}}>
								<Subtile>{email}</Subtile>
							</Box>
							<Box
								sx={{
									cursor: "default",
								}}>
								<Subtile>{hotline}</Subtile>
							</Box>
							<Box
								sx={{
									cursor: "default",
								}}>
								<Subtile>{working_desc}</Subtile>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12} md={3} lg={3}>
						<Box>
							{isTablet ? (
								<QRcode isBadge={true} left={true} />
							) : (
								<QRcode isBadge={true} right={true} />
							)}
						</Box>
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
		color: theme.palette.grey[800],
		transition: TRANSITION,
		"&:hover": {
			color: theme.palette.primary.light,
		},
	};
});

const WrapperBottom = styled(Box)(({theme}) => {
    return {
        paddingTop: 5,
		paddingBottom: 20,
		justifyContent: 'center',
		alignContent: 'center'
    }
})