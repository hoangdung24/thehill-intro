import { useState, useCallback } from "react";
import { useRouter } from "next/router";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Box,
  Button,
  alpha,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useSetting } from "../../hooks";

const Navbar = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { header, logo_header } = useSetting();

  const router = useRouter();

  const handleOpenNavMenu = useCallback((e) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const navigationHandler = useCallback((section, type) => {
    return (e) => {
      if (type === "by_section") {
        router.push(`/#${section}`);
      } else if (type === "by_page") {
        router.push(`cau-hoi-thuong-gap`);
      } else {
        router.push(`/`);
      }

      setAnchorEl(null);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              component={"div"}
              sx={{
                cursor: "pointer",
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img src={logo_header} width="100px" height="100px" alt="logo header" />
            </Box>

            <Box
              className="nav-bar-anchor"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                open={!!anchorEl}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={navigationHandler()}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                  "& .MuiMenu-paper": {
                    top: "55px !important",
                    left: "55px !important",
                  },
                }}
              >
                {header?.slice(0, -1).map((page, index) => (
                  <MenuItem
                    key={index}
                    onClick={navigationHandler(page.value.section, page.block_type)}
                  >
                    <Typography textAlign="center">{page.value.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              onClick={navigationHandler()}
              component={"div"}
              sx={{
                cursor: "pointer",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <img src={logo_header} width="100px" height="100px" alt="logo header" />
            </Box>
            <Box
              className="navbar-full"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}
            >
              {header?.slice(0, -1).map((page, index) => {
                return (
                  <Button
                    key={index}
                    disableRipple
                    onClick={navigationHandler(page.value.section, page.block_type)}
                    sx={{
                      "&:hover": {
                        color: alpha("#F6CB18", 0.8),
                        backgroundColor: "unset",
                      },
                    }}
                  >
                    {page.value.title}
                  </Button>
                );
              })}

              <Button
                href="/contact"
                sx={{
                  color: "common.white",
                  backgroundColor: "#F6CB18",
                  paddingX: 2,
                  "&:hover": {
                    backgroundColor: alpha("#F6CB18", 0.8),
                  },
                }}
              >
                Đăng ký
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Navbar;

// styled sheet
