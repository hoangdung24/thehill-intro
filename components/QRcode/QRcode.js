import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Image } from "../../HOC";

const URL = "https://hyuti.herokuapp.com/qr/customer";

const ALT = "QRCode";

const QRcode = ({ SIZE = "10vw" }) => {
	const [src, setSrc] = useState("");

	useEffect(() => {
		QRCode.toDataURL(URL).then(setSrc);
	}, []);

	return <Image src={src} alt={ALT} width={SIZE} height={SIZE} />;
};

export default QRcode;
