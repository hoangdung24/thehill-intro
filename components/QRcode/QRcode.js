import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { DOMAIN, QR_CUSTOMER } from '../../helpers/api'
import {Box, Stack, styled} from '@mui/material'
import { Image } from "../../HOC";
import { display } from "@mui/system";


const URL = `${DOMAIN}${QR_CUSTOMER}`;

const ALT = "QRCode";

const SIZE = "120px";

const HEIGHT = "35px"

const QRcode = ({isBadge = false, left = false , right= false, content, ...props}) => {
	const [src, setSrc] = useState("");

	useEffect(() => {
		QRCode.toDataURL(URL).then(setSrc);
	}, []);

	return (
		<Wrapper spacing={1} left={left} right={right}>
			<WrapperIcon isBadge={isBadge}>
				<Image src={"/apple.svg"} height={HEIGHT} width={SIZE} alt={"ICON APPLE"}/>
			</WrapperIcon>
			<WrapperIcon isBadge={isBadge}>
				<Image src={"/google.svg"} height={HEIGHT} width={SIZE} alt={"ICON GOOGLE"}/>
			</WrapperIcon>
			<Box>
				<img src={src} width={SIZE} height={SIZE} alt={ALT} />
			</Box>
		</Wrapper>
	);
};

export default QRcode;

// styled sheet

const Wrapper = styled(Stack, {shouldForwardProp: (prop) => {
	return prop !== "left" && prop !== "right";
}
})(({theme, left, right})=>{
	let defaultStyle = {
		justifyContent: "center",
		alignItems: "center",
		
	};
	if (left) {
		return {
			...defaultStyle,
			justifyContent: "flex-start",
			alignItems: "flex-start",
		};
	}
	else if (right){
		return {
			...defaultStyle,
			justifyContent: "flex-end",
			alignItems: "flex-end",
		};
	}
	else {
		return{
			...defaultStyle
		}
	}
})

const WrapperIcon = styled(Box, {shouldForwardProp: (prop) => {
	return prop !== "isBadge"
}})(({theme, isBadge}) => {
	let defaultStyle = {
		display: 'none'
	}
	if (isBadge) {
		return {
			...defaultStyle,
			display: "unset",
		};
	} else {
		return {
			...defaultStyle,
		};
	}
}) 