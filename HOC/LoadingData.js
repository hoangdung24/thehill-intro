import { LoadingFail } from "../components";
import { Container } from "@mui/material";

const LoadingData = ({ data, error, children, ...props }) => {
	if (error) {
		return (
			<Container>
				<LoadingFail />
			</Container>
		);
	}

	if (data === undefined) {
		return (
			<Container maxWidth="lg">
				<div>Loading...</div>
			</Container>
		);
	}

	return children({ data, ...props });
};

export default LoadingData;
