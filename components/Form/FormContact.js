import {
	Box as BoxMui,
	TextField,
	Stack,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	styled,
	Alert,
	AlertTitle
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import { DOMAIN, SUBMISSIONS } from "../../helpers/api";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import LoadingButton from "@mui/lab/LoadingButton";

import NumberFormat from 'react-number-format'
import {useSnackbar} from 'notistack';

const URL = `${DOMAIN}${SUBMISSIONS}`;

const validateSchema = object({
	store_name: string().required("Required"),
	presentator: string().required("Required"),
	email: string().email().required("Required"),
	owner: string().required("Required"),
	branch: string().required("Required"),
	phone: string().required("Required"),
});

const FormContact = ({category,data, ...props}) => {

	const [loading, setLoading] = useState(false);

	const resolver = yupResolver(validateSchema);

	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: resolver,
		defaultValues: {
			page: data.id,
			category: 1,
			phone: "+84"
		},
	});

	const ref = useRef("");

	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const onChange = useCallback((event) => {
		const value = event.target.value;
		onChange(value === "VN" ? undefined : value);
	}, []);

	const config = {
		"Content-Type": "application/json",
		Authorization: process.env.NEXT_PUBLIC_ANALYTICS_ID,
	};


	const { enqueueSnackbar } = useSnackbar();

	const onSubmit = useCallback((data) => {
		setLoading(!loading)
		axios
			.post(URL, data, { headers: config })
			.then((res) => {
				enqueueSnackbar("Đăng ký thành công", {
					variant: "success",
				});
				setLoading(false)
				reset()
				console.log("RESONSE RECEIVED: ", res);
			})
			.catch((error) => {
				enqueueSnackbar("Đăng ký thất bại", {
					variant: "error",
				});
				setLoading(false)
				console.log("ERROR: ", error);
			});
	},[enqueueSnackbar, reset]);


	return (
		<ContainerBox className='BoxForm'>
			<BoxMui
				onSubmit={handleSubmit(onSubmit)}
				component='form'
				sx={{ width: "100%" }}>
				<Stack direction={"column"} spacing={2} alignItems='center'>
					<TextField
						fullWidth
						required={true}
						label='Tên quán / Thương hiệu'
						id='1'
						{...register("store_name")}
					/>
					<TextField
						fullWidth
						required={true}
						label='Người đại diện'
						id='2'
						{...register("presentator")}
					/>

					<Controller
						name='category'
						control={control}
						render={() => (
							<FormControl fullWidth>
								<InputLabel id='10'>Categogy</InputLabel>
								<Select
									sx={{
										width: "100%",
									}}
									{...register("category")}
									label='Categogy'
									defaultValue={1}
									fullWidth
									onChange={handleChange}>
									{category?.map((e) => (
										<MenuItem key={e.id} value={e.id}>
											{e.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						)}
						defaultValue={1}
					/>
					<TextField
						required={true}
						fullWidth
						label='Email'
						id='3'
						{...register("email")}
					/>
					<NumberFormat
						{...register("bank_number")}
						id='5'
						label='Số tài khoản ngân hàng'
						fullWidth
						customInput={TextField}
						format='#### #### #### ####'
					/>
					<TextField fullWidth label='Bank' id='6' {...register("bank")} />
					<TextField
						required={true}
						fullWidth
						label='Chủ tài khoản'
						id='7'
						{...register("owner")}
					/>
					<TextField
						required={true}
						fullWidth
						label='Chi nhánh'
						id='8'
						{...register("branch")}
					/>
					<TextField
						required
						fullWidth
						label="Số điện thoại"
						id='9'
						{...register("phone")}
					/>

	
					{/* <Controller 
						control={control}
						name="phone"
						render={() => (
							<NumberFormat 
							format="+84##########"
							label="Số điện thoại"
							{...register("phone")}
							fullWidth
							defaultValue={"+84978216729"}
							customInput={TextField}
							required
							/>
						)}
					/> */}
					<LoadingButton
						type='submit'
						loading={loading}
						variant='contained'
						sx={{
							paddingX: 10,
							backgroundColor: "#F7CC15",
						}}>
						Đăng ký
					</LoadingButton>
					{Object.keys(errors).length !== 0 && (
						<ErrorBox severity='error' variant='outlined' icon={false}>
							<AlertTitle>Error</AlertTitle>
							<ul>
								{errors.store_name?.type === "required" && (
									<li>Hãy điền tên quán / thương hiệu</li>
								)}
								{errors.presentator?.type === "required" && (
									<li>Hãy điền tên người đại diện</li>
								)}
								{errors.email?.type === "required" && (
									<li>Hãy điền email của mình</li>
								)}
								{errors.owner?.type === "required" && (
									<li>Hãy điền tên chủ tài khoản</li>
								)}
								{errors.bank?.type === "required" && (
									<li>Hãy điền số tài khoản</li>
								)}
								{errors.branch?.type === "required" && (
									<li>Hãy điền chi nhánh</li>
								)}
								{errors.phone?.type === "required" && (
									<li>Hãy điền đúng số điện thoại</li>
								)}
							</ul>
						</ErrorBox>
					)}
				</Stack>
			</BoxMui>
		</ContainerBox>
	);
};

export default FormContact;

// styled sheet
const ContainerBox = styled(BoxMui)(({ theme }) => {
	return {
		alignContent: "center",
		display: "flex",
		maxWidth: "100%",
	};
});


const ErrorBox = styled(Alert)(({theme})=>{
	return {
		color:"red",
		borderColor: 'red',
		width: '100%'
	}
})
