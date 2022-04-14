import { Typography, Box, Button, TextField, Grid, styled} from '@mui/material'
import { DOMAIN, SUBCRIBERS } from '../../helpers/api';
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios';
import {useForm} from 'react-hook-form'
import SendIcon from "@mui/icons-material/Send";
import { object, string } from "yup"

import { useSnackbar } from "notistack";
import { useCallback } from 'react';

const URL = `${DOMAIN}${SUBCRIBERS}`

const validateSchema = object({
	email: string().email().required("Required"),
});

const Subcriber = () => {
    const resolver = yupResolver(validateSchema);

    const {register, handleSubmit, reset} = useForm({
        resolver: resolver
    })

	const { enqueueSnackbar } = useSnackbar();


	const config = {
		"Content-Type": "application/json",
		Authorization: process.env.NEXT_PUBLIC_ANALYTICS_ID,
	};

	const onSubmit = useCallback((data) => {
		axios
			.post(URL, data, { headers: config })
			.then((res) => {
				enqueueSnackbar("Đăng ký thành công", {
					variant: "success",
				});
				reset()
				console.log("RESPONSE RECEIVED: ", res);
			})
			.catch((error) => {
				enqueueSnackbar("Đăng ký thất bại", {
					variant: "error",
				});
				console.log("ERROR: ", error);
			});
	}, [enqueueSnackbar, reset])  

    return (
			<Wrapper className='Wrapper Subcriber'>
				<Grid
					container
					spacing={2}
					direction='row'
					justifyContent={"center"}
					alignItems={"center"}>
					<Grid item lg={4} md={4} xs={12}>
						<ContentBox>
							<Title variant='h4'>SUBCRIBE</Title>
						</ContentBox>
					</Grid>
					<Grid item lg={8} md={8} xs={12}>
						<SubcriberBox
							className='Subcriber Form'
							component='form'
							onSubmit={handleSubmit(onSubmit)}
							>
							<InputEmail
								InputProps={{
									sx: {
										"& .MuiOutlinedInput-notchedOutline": {
											border: "none",
										},
									},
								}}
								className='Input Form'
								variant='outlined'
								margin='normal'
								placeholder='Your email address'
								fullWidth
								id='1'
								{...register("email")}
							/>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginLeft: "15px",
								}}>
								<StyledButton type='submit'>
									<SendIcon className='Icon' color='info' />
								</StyledButton>
							</Box>
						</SubcriberBox>
					</Grid>
				</Grid>
			</Wrapper>
		);
}

export default Subcriber;

const Wrapper = styled(Box)(({theme}) => {
    return {
			backgroundColor: theme.palette.primary.dark,
            borderRadius: 20,
            padding: "45px 40px",
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


const InputEmail = styled(TextField)(({theme})=> {
    return {
			backgroundColor: theme.palette.common.white,
			borderRadius: 50,
            height: 55,
		};
})

const SubcriberBox = styled(Box)(({theme})=>{
    return {
			display: "flex",
			"& .MuiFormControl-root": {
				marginTop: 0,
				marginBottom: 0,
			},
		};
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
        },
		"&:hover .Icon":{
			color: theme.palette.common.black
		}
	};
})
