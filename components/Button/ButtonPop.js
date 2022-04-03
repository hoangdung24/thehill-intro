import styled from "@emotion/styled";
import { Button as ButtonMui, Typography } from "@mui/material";
import { Theme } from "../../components";

const ButtonPop = () => {
	return <ButtonStyled></ButtonStyled>;
};

export default ButtonPop;

// Styled Sheet

const ButtonStyled = styled(ButtonMui)(({ theme }) => {
	return {
		background: Theme.palette.secondary.main,
		borderRadius: "50%",
		height: 50,
		width: 50,
	};
});
