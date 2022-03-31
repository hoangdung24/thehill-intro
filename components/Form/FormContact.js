import styled from "@emotion/styled";
import { Box as BoxMui, TextField, Stack, Typography } from "@mui/material";
import theme from "../HOC/Theme";
import { useForm, Controller } from "react-hook-form";
import { useState, useRef } from "react";
import axios from "axios";
import { Button } from "../../components";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

import { CountrySelectWithIcon } from "./CountrySelect";
import { isValidPhoneNumber } from "react-phone-number-input";
import { SUBMISSIONS, DOMAIN } from "../../helpers/api";

const URL = `${DOMAIN}${SUBMISSIONS}`;

const FormContact = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			page: 6,
			category: 1,
			phone: "+84912345679",
		},
	});

	const ref = useRef("");

	const [value, setValue] = useState("");

	// console.log(errors);

	// console.log(watch());
	const config = {
		"Content-Type": "application/json",
		Authorization: "Api-Key ubc9FYnH.brSNHwzFxNIZgehgQosDArgFe70dfigA", //KEY could be changed
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
						{...register("store_name", { required: true, maxLength: 20 })}
					/>
					<TextField
						fullWidth
						label='Người đại diện'
						id='2'
						{...register("presentator", { required: true, maxLenght: 20 })}
					/>
					<TextField
						fullWidth
						label='Email'
						id='3'
						{...register("email", { required: true })}
					/>
					<TextField
						fullWidth
						label='Số tài khoản ngân hàng'
						id='5'
						{...register("bank_number", { required: true })}
					/>
					<TextField
						fullWidth
						label='Bank'
						id='6'
						{...register("bank", { required: true })}
					/>
					<TextField
						fullWidth
						label='Chủ tài khoản'
						id='7'
						{...register("owner", { required: true })}
					/>
					<TextField
						fullWidth
						label='Chi nhánh'
						id='8'
						{...register("branch", { required: true })}
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

					<Button
						type='submit'
						title={"Đăng Ký"}
						isBackground={true}
						backgroundColor={theme.palette.primary.main}
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
