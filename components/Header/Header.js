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

import Link from "../Link";
import ModalMenu from "./ModalMenu";
import Container from "../Container";
import HamburgerIcon from "../HamburgerIcon";

import { NAVBAR } from "../../constants";
import { Image } from "../../HOC";
import useMedia from "../../hooks/useMedia";
import { useSetting } from "../../hooks";

const objLogo = {
  block_type: "by_link",
  value: {
    title: "Logo",
    img: "/img/Logo-theHill.png",
    link: "/",
  },
};

const Header = ({}) => {
  const theme = useTheme();
  const router = useRouter();
  const [isToggle, setIsToggle] = useToggle(false);
  const { isMdUp } = useMedia();
  const { y } = useWindowScroll();

  const [animationState, setAnimationState] = useState(false);
  // const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);
  const setting = useSetting();

  if (!setting) {
    return null;
  }
  useEffect(() => {
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

  useEffect(() => {
    setting.header.splice(3, 0, objLogo);
    console.log("header", setting.header);
    setData(setting.header);
  }, []);

  const Navbar = useMemo(() => {
    if (!data) {
      return null;
    }

    return (
      <Container id="Home" maxWidth="lg">
        <Box spacing={3} sx={{ padding: "24px 0 !important" }}>
          <Stack
            className="asdasdasdasd"
            direction="row"
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "center",
              "& .headerLogo": {
                width: "15%",
                backgroundColor: "none !important",
              },

              "& .navLink:last-child": {
                backgroundColor: theme.palette.primary.light,
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                color: "white",
                transition: "all 0.5s",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                "& span": {
                  color: "white",
                  display: "block",
                },
              },
            }}
          >
            {data.map((el, index) => {
              return (
                <Box
                  className={
                    el.value.title === "Logo" ? "headerLogo navLink" : "navLink"
                  }
                  key={index}
                >
                  {el.value.title === "Logo" ? (
                    <Link href="/">
                      <Image
                        src={el.value.img}
                        width="100%"
                        height="calc(2.5vw * 1.72)"
                        objectFit="contain"
                      />
                    </Link>
                  ) : (
                    <Link
                      key={index}
                      href={
                        el.block_type === "by_section"
                          ? `#${el.value.section}`
                          : el.value.link
                      }
                      sx={{
                        textDecoration: "none",
                        my: 2,
                        transition: "all 0.5s",
                      }}
                    >
                      {/* // color:
                          //   el.link === router.pathname
                          //     ? theme.palette.primary.main
                          //     : theme.palette.common.black, // Nếu vào trang nào thì chỉ hiện màu ở title ở header đó */}
                      <Typography
                        variant="button2"
                        sx={{
                          textTransform: "uppercase",
                          color: theme.palette.common.natural2,
                          transition: "all 0.5s",

                          "&:hover": {
                            color: theme.palette.primary.light,
                          },
                          // color:
                          //   el.link === router.pathname
                          //     ? "red"
                          //     : theme.palette.common.natural2,
                          // Nếu vào trang nào thì chỉ hiện màu ở title ở header đó
                        }}
                      >
                        {el.value.title}
                      </Typography>
                    </Link>
                  )}
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    );
  }, [NAVBAR, data]);

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
                {data.map((el, index) => {
                  if (el.value.title === "Logo") {
                    return;
                  } else {
                    return (
                      <Link
                        key={index}
                        href={
                          el.block_type === "by_section"
                            ? `#${el.value.section}`
                            : el.value.link
                        }
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
                          }}
                        >
                          {el.value.title}
                        </Typography>
                      </Link>
                    );
                  }
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
