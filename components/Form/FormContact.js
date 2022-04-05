import styled from "@emotion/styled";
import {
	Box as BoxMui,
	TextField,
	Stack,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from "@mui/material";
import theme from "../../HOC/Theme";
import { useForm, Controller } from "react-hook-form";
import { useState, useRef, useCallback } from "react";
import axios from "axios";
import { Button } from "../../components";
import { DOMAIN, SUBMISSIONS } from "../../helpers/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const URL = `${DOMAIN}${SUBMISSIONS}`;

const useYupValidationResolver = (validateSchema) =>
	useCallback(
		async (data) => {
			try {
				const values = await validateSchema.validate(data, {
					abortEarly: false,
				});
				return {
					values,
					error: {},
				};
			} catch (error) {
				return {
					values: {},
					errors: errors.inner.reduce(
						(allErrors, currentError) => ({
							...allErrors,
							[currentError.path]: {
								type: currentError.type ?? "validation",
								message: currentError.message,
							},
						}),
						{}
					),
				};
			}
		},
		[validateSchema]
	);

const validateSchema = yup.object({
	store_name: yup.string().required("Required"),
	presentator: yup.string().required("Required"),
	email: yup.string().email().required("Required"),
	bank_number: yup.number().positive().integer().required("Required"),
	bank: yup.string().required("Required"),
	owner: yup.string().required("Required"),
	branch: yup.string().required("Required"),
	phone: yup.string().required("Required"),
});

const FormContact = () => {
	// const resolver = useYupValidationResolver(validateSchema);

	const resolver = yupResolver(validateSchema);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: resolver,
		defaultValues: {
			page: 6,
			category: 1,
			phone: "+84978216729",
		},
	});

	const ref = useRef("");

	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	// console.log(errors);

	// console.log(watch());

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
									{...register("category")}
									label='Categogy'
									defaultValue={1}
									autoWidth
									onChange={handleChange}>
									<MenuItem value={1}>Quán Ăn</MenuItem>
									<MenuItem value={2}>Quán Cafe</MenuItem>
									<MenuItem value={3}>Giải trí</MenuItem>
									<MenuItem value={4}>Giáo dục</MenuItem>
									<MenuItem value={5}>Baby & Toddler</MenuItem>
									<MenuItem value={6}>Automative</MenuItem>
								</Select>
							</FormControl>
						)}
						defaultValue={1}
					/>

					{/* <Controller
						name='iceCreamType'
						render={({ field }) => (
							<Select
								{...field}
								options={[
									{ value: "chocolate", label: "Chocolate" },
									{ value: "strawberry", label: "Strawberry" },
									{ value: "vanilla", label: "Vanilla" },
								]}
							/>
						)}
						control={control}
						defaultValue=''
					/>
					<Controller
						name='Checkbox'
						control={control}
						render={({ field }) => <Checkbox {...field} />}
					/> */}

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

					{/* <PhoneInput
						name='phoneInput'
						value={value}
						ref={ref}
						{...register("phone", { required: true })}
						international
						defaultCountry='VN'
						country='VN'
						withCountryCallingCode
						countryCallingCodeEditable={false}
					/> */}

					{/* <Controller
						name='phoneInput'
						control={control}
						rules={{ required: true }}
						render={({ field: { onchange, value } }) => (
							<PhoneInput
								value={value}
								onChange={onchange}
								defaultCountry='VN'
								country='VN'
								withCountryCallingCode
								id='phone'
							/>
						)}
					/> */}
					{/* <CountrySelect value={value} onChange={onChange} /> */}

					<Button
						type='submit'
						title={"Đăng Ký"}
						isBackground={true}
						backgroundColor={theme.palette.secondary.main}
						sx={{
							paddingX: 10,
						}}
					/>
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
