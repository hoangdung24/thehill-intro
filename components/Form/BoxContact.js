import { Box as MuiBox, Container, Stack, Typography } from "@mui/material";
import { QRcode, Image } from "../../components";

const SIZE = 40;
const BoxContact = () => {
	return (
		<Container maxWidth='xl'>
			<MuiBox>
				<Stack direction='column' spacing={5} alignItems='center'>
					<QRcode />
					<Stack direction='row' spacing={2}>
						<Image src='/google-play.svg' height={SIZE} width={SIZE} />
						<Image src='/apple-store.svg' height={SIZE} width={SIZE} />
					</Stack>
				</Stack>
			</MuiBox>
		</Container>
	);
};

export default BoxContact;
