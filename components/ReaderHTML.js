import createDOMPurify from "isomorphic-dompurify";
import { Box } from "@mui/material";

const ReaderHTML = ({ content, ...props }) => {
	return (
		<Box
			dangerouslySetInnerHTML={{
				__html: createDOMPurify.sanitize(content),
			}}
			sx={{
				"& h4": {
					fontSize: "30px",
					lineHeight: "40px",
					fontWeight: 500,
					marginBottom: "14px",
					color: "primary.light",
				},
				"& h3": {
					fontSize: "14px",
					fontWeight: 700,
					color: "primary.light",
				},
				"& p": {
					fontSize: "14px",
					fontWeight: 500,
				},
				"& b": {
					color: "primary.light",
				},
				"& span": {
					position: "relative",
					zIndex: 0,
					"&::after": {
						content: '""',
						position: "absolute",
						height: "5px",
						bottom: "8px",
						backgroundColor: "secondary.main",
						width: "100%",
						left: 0,
						zIndex: -1,
					},
				},
			}}></Box>
	);
};

export default ReaderHTML;


