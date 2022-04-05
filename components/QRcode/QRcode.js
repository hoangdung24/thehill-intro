import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { DOMAIN, QR_CUSTOMER } from '../../helpers/api'
import {Box} from '@mui/material'


const URL = `${DOMAIN}${QR_CUSTOMER}`;

const ALT = "QRCode";

const SIZE = "250px";

const QRcode = () => {
	const [src, setSrc] = useState("");

	useEffect(() => {
		QRCode.toDataURL(URL).then(setSrc);
	}, []);

	return (
		<Box>
			<img src={src} width={SIZE} height={SIZE} alt={ALT} />
		</Box>
	)
};

export default QRcode;
