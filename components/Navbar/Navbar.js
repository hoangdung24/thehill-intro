import { Button } from "../../components";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	MenuItem,
	styled,
	Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import { NAVBAR } from "../../helpers/router";
import { useSetting } from "../../hooks";


const Navbar = ({ ...props }) => {
	const { header, logo_header } = useSetting();

	// console.log(header)

	const router = useRouter();

	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (section , type) => {
		return () => {
			const pathname = router.pathname;
			if (type === 'by_section'){
				router.push(`/#${section}`);
			} else if (type === "by_page"){
				router.push(`cau-hoi-thuong-gap`)
			} else {
				router.push(`/`)
			}
			
		}
	};

	const handleClick = (e) => {
		e.preventDefault()
		router.push(href)
	}

	return (
		<Box sx={{ flexGrow: 1, width: "100%" }}>
			<AppBar
				position='static'
				sx={{
					backgroundColor: "transparent",
				}}>
				<Container maxWidth='lg'>
					<Toolbar disableGutters>
						<Box
							onClick={handleCloseNavMenu()}
							component={"div"}
							sx={{
								cursor: "pointer",
								mr: 2,
								display: { xs: "none", md: "flex" },
							}}>
							<img
								src={logo_header}
								width='100px'
								height='101px'
								alt='logo header'
							/>
						</Box>

						<Box
							className='nav-bar-anchor'
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
								{header?.slice(0, -1).map((page, index) => (
									<MenuItem
										key={index}
										onClick={handleCloseNavMenu(
											page.value.section,
											page.block_type
										)}>
										<Typography textAlign='center'>
											{page.value.title}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Box
							onClick={handleCloseNavMenu()}
							component={"div"}
							sx={{
								cursor: "pointer",
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}>
							{/* <Typography variant='h6'>LOGO</Typography> */}
							<img
								src={logo_header}
								width='100px'
								height='101px'
								alt='logo header'
							/>
						</Box>
						<NavMo
							className='navbar-full'
							sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{header?.slice(0, -1).map((page, index) => (
								<Button
									key={index}
									onClick={handleCloseNavMenu(
										page.value.section,
										page.block_type
									)}
									title={page.value.title}
									isBackground={false}
								/>
							))}
						</NavMo>

						<Box sx={{ flexGrow: 0 }}>
							<Button
								href='/contact'
								title={"Đăng ký"}
								isBackground={true}
								backgroundColor='#F6CB18'
							/>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};
export default Navbar;

// styled sheet

const NavMo = styled(Box)(({theme})=> {
	return {
		justifyContent: 'flex-end',
	}
})