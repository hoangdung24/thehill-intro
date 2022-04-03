import { Button, Theme } from "../../components";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	MenuItem,
	Box,
	SvgIcon,
} from "@mui/material";

import { useState } from "react";
import { Image } from "@mui/icons-material";
import ButtonBack from "../Button/ButtonShape";

const pages = [
	"Giới thiệu",
	"Hướng dẫn sử dụng",
	"FAQ",
	"Thương Hiệu Đối Tác",
	"Tin Tức",
	"Liên Hệ",
];

const Navbar = (props) => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				sx={{
					backgroundColor: Theme.palette.primary.main,
				}}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Box
							component={"div"}
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
							<Typography variant='h6'>LOGO</Typography>
						</Box>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size='large'
								aria-label='current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign='center'>{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Box
							component={"div"}
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<Typography variant='h6'>LOGO</Typography>
						</Box>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									title={page}
									isBackground={false}
								/>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Button
								href='/contact'
								title={"Đăng ký"}
								isBackground={true}
								backgroundColor={Theme.palette.secondary.main}
							/>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};
export default Navbar;
