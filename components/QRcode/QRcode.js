import QRCode from "qrcode";
import { useEffect, useState } from "react";

const URL = "https://hyuti.herokuapp.com/qr/customer";

const ALT = "QRCode";

const QRcode = ({ SIZE = "200" }) => {
	const [src, setSrc] = useState("");

	useEffect(() => {
		QRCode.toDataURL(URL).then(setSrc);
	}, []);

	return <img src={src} alt={ALT} width={SIZE} height={SIZE} />;
};

export default QRcode;
