import { LoadingIcon, FailToFetchData } from "../components";
import { Container } from "@mui/material";

const LoadingData = ({ data, error, children, ...props }) => {
	if (error) {
		return (
			<Container>
				<FailToFetchData />
			</Container>
		);
	}

	if (data === undefined) {
		return (
			<Container>
				<LoadingIcon />
			</Container>
		);
	}

	return children({ data, ...props });
};

export default LoadingData;
