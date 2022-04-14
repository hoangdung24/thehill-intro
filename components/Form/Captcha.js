import { Button, Typography , Box, TextField} from '@mui/material';

const Captcha = () => {
    const captcha = " ";

    const value = ' ';

	const alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

	const handlerGenerate = () => {
		const first = alphabets[Math.floor(Math.random() * alphabets.length)];
		const second = Math.floor(Math.random() * 10);
		const third = Math.floor(Math.random() * 10);
		const fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
		const fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
		const sixth = Math.floor(Math.random() * 10);
		const resultCaptcha =
			first.toString() +
			second.toString() +
			third.toString() +
			fourth.toString() +
			fifth.toString() +
			sixth.toString();
		console.log(resultCaptcha);

        return resultCaptcha;
		// if (typeof window !== "undefined") {
		// 	document.getElementById("generated-captcha").value = captcha;
		// 	document.getElementById("entered-captcha").value = "";
		// }
	};

	const Check = () => {
		// if (typeof window !== "undefined") {
		// 	const userValue = document.getElementById("entered-captcha").value;
		// }
		// console.log(captcha);
		// console.log(userValue);
		// if (userValue == captcha) {
            
		// } else {
		// 	if (typeof window !== "undefined") {
		// 		document.getElementById("entered-captcha").value = "";
		// 	}
		// }
	};

	return (
		<Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%'
        }}>
			<Box>
				<Typography variant='h3'>Captcha</Typography>
			</Box>
			<Box onChange={handlerGenerate()}>
				<Typography variant='title2'>{captcha}</Typography>
			</Box>
			<Box>
				<TextField fullWidth placeholder='Enter the captcha ...'></TextField>
			</Box>
			<Box>
				<Button onClick={Check()} variant="outlined">Check</Button>
			</Box>
			<Box>
				<Button onClick={handlerGenerate()} variant="outlined">Generate New</Button>
			</Box>
		</Box>
	);
};

export default Captcha;
