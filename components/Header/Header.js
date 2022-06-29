import { useWindowScroll, useToggle } from "react-use";
// import { useIntl, FormattedMessage } from "react-intl";
import { useEffect, useState, Fragment, useMemo, useCallback } from "react";

import { useRouter } from "next/router";

import {
  AppBar,
  Box,
  Typography,
  Button,
  useTheme,
  Stack,
} from "@mui/material";
import Fade from "@mui/material/Fade";

// import {
//   usePopupState,
//   bindToggle,
//   bindPopper,
// } from "material-ui-popup-state/hooks";

import LanguageIcon from "@mui/icons-material/Language";

import Link from "../Link";
import ModalMenu from "./ModalMenu";
import Container from "../Container";
import HamburgerIcon from "../HamburgerIcon";

import { NAVBAR } from "../../constants";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";

const Header = ({}) => {
  const theme = useTheme();
  const router = useRouter();
  //   const { messages } = useIntl();

  //   const popupState = usePopupState({
  //     variant: "popper",
  //     popupId: "languagesPopper",
  //   });

  const [isToggle, setIsToggle] = useToggle(false);

  const { isMdUp } = useMedia();
  const { y } = useWindowScroll();

  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    // popupState.close();

    if (y > 50 && !animationState) {
      setAnimationState(true);
    }

    if (y < 50 && animationState) {
      setAnimationState(false);
    }
  }, [y, animationState]);

  useEffect(() => {
    if (isMdUp) {
      setIsToggle(false);
    }
  }, [isMdUp]);

  const Navbar = useMemo(() => {
    // if (!setting) {
    //   return null;
    // }

    // const { logo_1 } = setting;

    return (
      <Container
        id="Home"
        maxWidth="lg"
        sx={{
          paddingX: "0 !important",
        }}
      >
        <Stack
          direction={"row"}
          spacing={3}
          sx={{ padding: "24px 0 !important" }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              // gap: "60px",
              //   padding: "24px 0",
              "& .headerLogo": {
                width: "15%",
              },
            }}
          >
            {NAVBAR.map((el, index) => {
              return (
                <Box
                  className={el.type === "logo" ? "headerLogo" : ""}
                  key={index}
                >
                  {el.type === "logo" ? (
                    <Link href={el.link}>
                      <Image
                        src="/img/Logo-theHill.png"
                        width="100%"
                        height="100%"
                        objectFit="contain"
                      />
                    </Link>
                  ) : (
                    <Link
                      key={index}
                      href={el.link}
                      sx={{ textDecoration: "none" }}
                    >
                      <Button
                        sx={{
                          my: 2,
                          // color:
                          //   el.link === router.pathname
                          //     ? theme.palette.primary.main
                          //     : theme.palette.common.black, // Nếu vào trang nào thì chỉ hiện màu ở title ở header đó
                          display: "block",
                        }}
                      >
                        <Typography
                          variant="button2"
                          sx={{
                            color:
                              el.link === router.pathname
                                ? "red"
                                : theme.palette.common.natural2, // Nếu vào trang nào thì chỉ hiện màu ở title ở header đó
                          }}
                        >
                          {el.name}
                        </Typography>
                      </Button>
                    </Link>
                  )}
                </Box>
              );
            })}
          </Box>

          <Button>
            <Link href="/dang-ky" sx={{ textDecoration: "none" }}>
              <Typography variant="button2">TRỞ THÀNH ĐỐI TÁC</Typography>
            </Link>
          </Button>
        </Stack>
      </Container>
    );
  }, [NAVBAR, router]);

  const staticNav = useMemo(() => {
    if (y > 150) {
      return (
        <AppBar
          sx={{
            position: "fixed",
            backgroundColor: "white",
            top: 0,
            boxShadow: " 0px 2px 20px 0 rgba(0, 0, 0, 0.3)",
          }}
          elevation={0}
        >
          {Navbar}
        </AppBar>
      );
    }

    return null;
  }, [y, Navbar]);

  const NavbarMemo = useMemo(() => {
    if (isMdUp) {
      return (
        <Fragment>
          {Navbar}
          <Fade
            in={animationState}
            mountOnEnter
            unmountOnExit
            timeout={{
              enter: 1000,
              exit: 100,
            }}
          >
            <AppBar
              sx={{
                position: "fixed",
                backgroundColor: theme.palette.common.white,
              }}
            >
              {staticNav}
            </AppBar>
          </Fade>
          {/* <Fade in={animationState}>{staticNav}</Fade> */}
        </Fragment>
      );
    } else {
      //ở chế độ màn hình sẽ chuyển sang layout mobile
      const TopNav = (
        <Stack
          sx={{ background: "white" }}
          direction={"row"}
          paddingTop={3}
          paddingBottom={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ width: "17%", height: "9vh" }}>
            <Link href="/">
              <Image
                layout="fill"
                src="/img/Logo-theHill.png"
                width="100%"
                height="100%"
                // objectFit="contain"
              />
            </Link>
          </Box>
          <HamburgerIcon
            onClick={() => {
              setIsToggle(!isToggle);
              //   popupState.close();
            }}
            className={isToggle && "open"}
          />
        </Stack>
      );

      return (
        <Fragment>
          <Container sx={{ zIndex: 10, position: "static", top: 0, left: 0 }}>
            {TopNav}
          </Container>

          <Fade
            in={animationState}
            mountOnEnter
            unmountOnExit
            timeout={{
              enter: 300,
              exit: 150,
            }}
          >
            <AppBar
              sx={{
                position: "fixed",
                backgroundColor: theme.palette.common.white,
                paddingX: "32px",
              }}
            >
              {TopNav}
            </AppBar>
          </Fade>

          <ModalMenu open={isToggle} toggle={setIsToggle}>
            <Container>
              {TopNav}

              <Box sx={{ marginTop: "8rem" }}>
                {NAVBAR.map((el, index) => {
                  return (
                    <Link
                      key={index}
                      href={el.link}
                      sx={{ textDecoration: "none", marginBottom: "2rem" }}
                    >
                      <Typography
                        variant="button2"
                        sx={{
                          lineHeight: "2rem",
                          color: theme.palette.common.natural2,
                          display: "block",
                          my: 2,
                        }}
                        onClick={() => {
                          setIsToggle(false);
                          // popupState.close();
                        }}
                      >
                        {el.name}
                        {/* {messages[`navbar.${el.key}`][0].value} */}
                      </Typography>
                    </Link>
                  );
                })}
              </Box>

              <Button sx={{ marginTop: "6rem" }}>
                <Typography variant="button2">TRỞ THÀNH ĐỐI TÁC</Typography>
              </Button>

              <Stack
                direction="row"
                spacing={3}
                sx={{ height: "5vh", marginTop: "2.5rem" }}
              >
                <Image
                  src="/img/image 3.png"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
                <Image
                  src="/img/image 4 (1).png"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </Stack>
            </Container>
          </ModalMenu>
        </Fragment>
      );
    }
  }, [isMdUp, animationState, Navbar, staticNav, isToggle]);

  return (
    <Box
      sx={{
        background: "white",
        width: "100vw",
        boxShadow: " 0px 2px 20px 0 rgba(0, 0, 0, 0.3)",
        zIndex: 10,
      }}
    >
      {NavbarMemo}
    </Box>
  );
};
export default Header;
