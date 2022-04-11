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
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import { Button } from "../../components";
import { DOMAIN, SUBMISSIONS } from "../../helpers/api";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const URL = `${DOMAIN}${SUBMISSIONS}`;

const validateSchema = object({
	store_name: string().required("Required"),
	presentator: string().required("Required"),
	email: string().email().required("Required"),
	bank_number: number().positive().integer().required("Required"),
	bank: string().required("Required"),
	owner: string().required("Required"),
	branch: string().required("Required"),
	phone: string().required("Required"),
});

const FormContact = ({category,data, ...props}) => {

	const resolver = yupResolver(validateSchema);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: resolver,
		defaultValues: {
			page: data.id,
			category: 1,
			phone: "+84",
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

	const onSubmit = (data) => {
		axios
			.post(URL, data, { headers: config })
			.then((res) => {
				console.log("RESONSE RECEIVED: ", res);
			})
			.catch((error) => {
				console.log("ERROR: ", error);
				console.log(error.response.data);
			});
	};

	return (
		<ContainerBox className='BoxForm'>
			<BoxMui
				onSubmit={handleSubmit(onSubmit)}
				component='form'
				sx={{ width: "100%" }}>
				<Stack direction={"column"} spacing={2} alignItems='center'>
					<TextField
						fullWidth
						label='Tên quán / Thương hiệu'
						id='1'
						{...register("store_name")}
					/>
					<TextField
						fullWidth
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
										<MenuItem
										key={e.id}
										value={e.id}>{e.name}</MenuItem>
									))}
								</Select>
							</FormControl>
						)}
						defaultValue={1}
					/>
					<TextField fullWidth label='Email' id='3' {...register("email")} />
					<TextField
						fullWidth
						label='Số tài khoản ngân hàng'
						id='5'
						{...register("bank_number")}
					/>
					<TextField fullWidth label='Bank' id='6' {...register("bank")} />
					<TextField
						fullWidth
						label='Chủ tài khoản'
						id='7'
						{...register("owner")}
					/>
					<TextField
						fullWidth
						label='Chi nhánh'
						id='8'
						{...register("branch")}
					/>
					<TextField
						fullWidth
						label='Số điện thoại'
						id='9'
						{...register("phone")}
					/>

					<Button
						type='submit'
						title={"Đăng Ký"}
						isBackground={true}
						backgroundColor='#F7CC15'
						sx={{
							paddingX: 10,
						}}
					/>
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
