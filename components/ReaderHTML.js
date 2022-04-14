import createDOMPurify from "isomorphic-dompurify";
import { Box } from "@mui/material";

const ReaderHTML = ({ content, ...props }) => {
	return (
		<Box
			dangerouslySetInnerHTML={{
				__html: createDOMPurify.sanitize(content),
			}}
			sx={{
				"& span": {
					position: "relative",
					zIndex: 0,
					"&::after": {
						content: '""',
						position: "absolute",
						height: "8px",
						bottom: "8px",
						backgroundColor: "secondary.main",
						width: "100%",
						bottom: 0,
						left: 0,
						zIndex: -1,
					},
				},
			}}></Box>
	);
};

export default ReaderHTML;


