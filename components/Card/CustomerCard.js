import styled from '@emotion/styled';
import {Box, Typography, Stack} from '@mui/material'
import {ButtonPop} from '../../components'
 

const CustomerCard = ({icon, title, desc, ...props}) => {
    return (
			<Box>
				<Stack spacing={2}>
					<ButtonPop isSpecial={true} svg={icon} />
					<Title variant='h5'>{title}</Title>
					<SubTitle variant='body2'>{desc}</SubTitle>
				</Stack>
			</Box>
		);
}

export default CustomerCard;

// styled sheet
const Title = styled(Typography)(({theme})=> {
    return {
			color: theme.palette.primary.dark,
    }
})

const SubTitle = styled(Typography)(({theme})=> {
    return {
        color:  theme.palette.grey[500]
    }
})