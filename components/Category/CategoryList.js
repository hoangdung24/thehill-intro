import styled from "@emotion/styled";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	Collapse,
} from "@mui/material";
import { useState } from "react";
import { Theme } from "../../HOC";

const CategoryList = ({ title }) => {
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<List>
			<ListItemButton onClick={handleClick}>
				<ListItemText>
					<Title variant='h5'>Categories</Title>
				</ListItemText>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout='auto' unmountOnExit>
				<List component={"div"} disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemText>
							<SubTilte variant='h6'>{title}</SubTilte>
						</ListItemText>
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
};

export default CategoryList;

// Styled Sheet

const Title = styled(Typography)(({ theme }) => {
	return {
		color: Theme.palette.common.black,
	};
});

const SubTilte = styled(Typography)(({ theme }) => {
	return {
		color: Theme.palette.common.black,
	};
});
