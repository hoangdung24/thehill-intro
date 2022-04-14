import {styled, Stack, Box, Typography, Button} from '@mui/material'
import { useCallback } from "react";


const Category = ({ data, selectedItems,  ...props }) => {
	
	const onClick = useCallback((data) => {
		return (e)=> {
			props.onClick(e,data);
		}
	}, [])

	return (
		<Stack spacing={2} direction={"column"}>
				
					<Wrapper >
						<ButtonStyled  variant='outlined'>{data.title}</ButtonStyled>
					</Wrapper>
			
			
		</Stack>
	)
};

export default Category;

// styled sheet

const Wrapper = styled(Box)(({theme})=> {
	return {
		width: '100%',
	}
})

const ButtonStyled = styled(Button)(({theme})=> {
	return {
		width: "100%",
		color: theme.palette.common.black,
		borderColor: theme.palette.action.hover
	};
})