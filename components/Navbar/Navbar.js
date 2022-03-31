import { GridContainer, Button, Theme } from "../../components";
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
} from "@mui/material";

import { useState } from "react";
import { Image } from "@mui/icons-material";

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
		<AppBar position='static'>
			<GridContainer
				OuterProps={{
					sx: {
						backgroundColor: Theme.palette.primary.main,
						padding: 2,
					},
				}}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Typography
							href='/'
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
							LOGO
						</Typography>

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
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							LOGO
						</Typography>
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
								title={"Đăng ký"}
								isBackground={true}
								backgroundColor={"#E2D784"}
							/>
						</Box>
					</Toolbar>
				</Container>
			</GridContainer>
		</AppBar>
	);
};
export default Navbar;
