import {Box, Typography, Stack, styled} from '@mui/material'
import {ButtonPop} from '../../components'
 

const CustomerCard = ({icon, title, desc, ...props}) => {

    return (
			<Wrapper>
				<Stack spacing={2}>
					<ButtonPop isSpecial={true} svg={icon} />
					<Title variant='h5'>{title}</Title>
					<SubTitle variant='body2'>{desc}</SubTitle>
				</Stack>
			</Wrapper>
		);
}

export default CustomerCard;

// styled sheet
const Title = styled(Typography)(({theme})=> {
    return {
			color: theme.palette.primary.light,
    }
})

const SubTitle = styled(Typography)(({theme})=> {
    return {
        color:  theme.palette.grey[700]
    }
})

const Wrapper = styled(Box)(({theme})=> {
	return {
	}
})