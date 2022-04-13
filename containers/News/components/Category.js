import {List, ListItem, ListItemText, Stack, Box} from '@mui/material'
import { useCallback } from "react";


const Category = ({ items, selectedItem, ...props }) => {
	const handleClick = useCallback((data) => {
		return (e) => {
			props.handleClick(e, data);
		};
	}, []);

	return (
		<Stack spacing={2} direction={"row"}>
			{items.map((e, index) => {
				return (
						<List sx={{width: '100%'}} key={index} >
							<ListItem key={index}>
								<ListItemText primary={e} onClick={handleClick(e)} />
							</ListItem>
						</List>
				);
			})}
		</Stack>
	);
};

export default Category;