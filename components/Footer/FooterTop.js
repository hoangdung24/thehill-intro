import {Box, Grid, Typography, styled} from '@mui/material'
import {Subcriber} from '../../components'
import { useSetting } from '../../hooks';
import ReaderHTML from '../ReaderHTML';

const FooterTop = () => {
	const {info} = useSetting();
    return (
			<WrapperFooterTop className='Footer Top'>
				<Grid spacing={2} container direction='row'>
					<Grid item lg={5} md={4} xs={12}>
						<Box>
							<ReaderHTML content={info} />
						</Box>
					</Grid>
					<Grid item lg={7} md={8} xs={12}>
						<Box>
							<Subcriber />
						</Box>
					</Grid>
				</Grid>
			</WrapperFooterTop>
		);
}

export default FooterTop;

// styled Sheet

const WrapperFooterTop = styled(Box)(({theme})=> {
    return {
		paddingBottom:30
    }
})

