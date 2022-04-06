import {Box, Grid, Typography} from '@mui/material'
import { styled } from '@mui/styles';
import {Subcriber} from '../../components'
import Blog from '../../containers/News/components/Blog';
import { Image } from '../../HOC';

const info_test =
	'<p data-block-key="c7pox"><b>Công ty Đổi điểm</b><br/>Địa chỉ: 10 Đường số 33, Phường An Khánh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam<br/>Mã số doanh nghiệp: 0000000xxxx<br/>Đại diện pháp lý: Trần Văn A – Chức vụ: Tổng Giám Đốc</p>';


const image_test =
	"http://member-intro.t-solution.vn/media/original_images/Screen_Shot_2022-04-04_at_15.38.45.png";

const FooterTop = ({info, logo_footer, ...props}) => {
    return (
			<WrapperFooterTop className='Footer Top'>
				
					<Grid
						spacing={2}
						container
						direction='row'
						justifyContent='center'
						alignItems='flex-start'>
						<Grid item lg={3} md={4}>
							<WrapperImage className='Wrapper Image'>
								<Image src={image_test} width={300} height={300} />
							</WrapperImage>
							<Blog about_content={info_test} />
						</Grid>
						<Grid item lg={8} md={8}>
							<Subcriber />
						</Grid>
					</Grid>
			</WrapperFooterTop>
		);
}

export default FooterTop;

// styled Sheet

const WrapperFooterTop = styled(Box)(({theme})=> {
    return {
        paddingBottom: 30,
    }
})

const WrapperImage = styled(Box)(({theme}) => {
    return {
        
    }
})
