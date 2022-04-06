import styled from '@emotion/styled';
import { Typography, Box, Stack, Button, TextField} from '@mui/material'
import { DOMAIN, SUBCRIBERS } from '../../helpers/api';
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios';
import {useForm, Controller} from 'react-hook-form'
import theme from '../../HOC/Theme';
import SendIcon from "@mui/icons-material/Send";


const URL = `${DOMAIN}${SUBCRIBERS}`

const validateSchema = yup.object({
	email: yup.string().email().required("Required"),
});

const Subcriber = () => {
    const resolver = yupResolver(validateSchema);

    const {register, handleSubmit} = useForm({
        resolver: resolver
    })


	const config = {
		"Content-Type": "application/json",
		Authorization: process.env.NEXT_PUBLIC_ANALYTICS_ID,
	};

	const onSubmit = (data) => {
		axios
			.post(URL, data, { headers: config })
			.then((res) => {
				console.log("RESPONSE RECEIVED: ", res);
			})
			.catch((error) => {
				console.log("ERROR: ", error);
			});
	};   

	

    return (
			<Wrapper>
				<Stack spacing={4} direction='row'>
					<ContentBox>
						<Title variant='h4'>Title</Title>
						<SubTitle variant='body2'>fshdfshdjfhs</SubTitle>
					</ContentBox>
					<SubcriberBox
						className='Subcriber Form'
						component='form'
						onSubmit={handleSubmit(onSubmit)}>
							<InputEmail
								variant='outlined'
								margin='normal'
								fullWidth
								id='1'
								{...register("email")}
							/>
							<StyledButton type='submit'>
								<SendIcon />
							</StyledButton>
					</SubcriberBox>
				</Stack>
			</Wrapper>
		);
}

export default Subcriber;

const Wrapper = styled(Box)(({theme}) => {
    return {
			display: "flex",
			backgroundColor: theme.palette.primary.dark,
            borderRadius: 20,
            padding: "45px 40px",
            height: "100%",
            width: '100%'
		};
})

const ContentBox = styled(Box)(({theme}) => {
    return {
        boxSizing: 'border-box',
        outline: 'none'
    }
})

const Title = styled(Typography)(({theme}) => {
    return {
        color: theme.palette.common.black
    }
})

const SubTitle = styled(Typography)(({theme})=> {
    return {
        color:  theme.palette.grey[200]
    }
})

const InputEmail = styled(TextField)(({theme})=> {
    return {
			backgroundColor: theme.palette.common.white,
			borderRadius: 50,
            minWidth: '100%',
            height: 55,
		};
})

const SubcriberBox = styled(Box)(({theme})=>{
    return {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '100%'
    }
})

const StyledButton = styled(Button)(({theme})=> {
    return {
        borderRadius: '50px',
        height: 55,
        width: 85,
		backgroundColor: theme.palette.secondary.main,
		transition: "all 0.3s",
        "&:hover" :{
            backgroundColor: theme.palette.common.white,
            boxShadow: 'none',
        }
	};
})