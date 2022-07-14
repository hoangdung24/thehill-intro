import { useWindowScroll, useToggle } from "react-use";
// import { useIntl, FormattedMessage } from "react-intl";
import { useEffect, useState, Fragment, useMemo } from "react";
import cloneDeep from "lodash/cloneDeep";

import { AppBar, Box, Typography, useTheme, Stack } from "@mui/material";
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

  const setting = useSetting();

  const [isToggle, setIsToggle] = useToggle(false);
  const { isMdUp } = useMedia();
  const { y } = useWindowScroll();

  const [animationState, setAnimationState] = useState(false);
  const [data, setData] = useState([]);
  const [dataNavMobile, setDataNavMobile] = useState([]);

  useEffect(() => {
    if (y > 800 && !animationState) {
      setAnimationState(true);
    }

    if (y < 500 && animationState) {
      setAnimationState(false);
    }
  }, [y, animationState]);

  useEffect(() => {
    if (isMdUp) {
      setIsToggle(false);
    }
  }, [isMdUp]);

  useEffect(() => {
    const cloneSettingData = cloneDeep(setting?.header);
    cloneSettingData?.splice(3, 0, objLogo);
    setData(cloneSettingData);
    setDataNavMobile(setting?.header);
  }, [setting]);

  const Navbar = useMemo(() => {
    if (!data) {
      return null;
    }

    return (
      <Container id="Home" maxWidth="lg" sx={{ padding: "0 1.8rem" }}>
        <Box sx={{ padding: "24px 0 !important" }}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              alignItems: "center",
              "& .headerLogo": {
                width: "15%",
                backgroundColor: "none !important",
              },

              "& .navLink:last-child": {
                backgroundColor: theme.palette.primary.main,
                padding: "0.5rem 1rem",
                borderRadius: "5px",
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
    if (y > 880) {
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

              <Box
                sx={{
                  marginTop: "8rem",
                  "& .navMobile:last-child": {
                    marginTop: "6rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                    display: "inline-block",
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                    "& span": {
                      color: theme.palette.common.white,
                      display: "block",
                      margin: 0,
                    },
                  },
                }}
              >
                {dataNavMobile?.map((el, index) => {
                  return (
                    <Link
                      className="navMobile"
                      key={index}
                      href={
                        el.block_type === "by_section"
                          ? `#${el.value.section}`
                          : el.value.link
                      }
                      sx={{
                        textDecoration: "none",
                        marginBottom: "2rem",
                        display: "block",
                      }}
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
                })}
              </Box>

              <Stack
                direction="row"
                spacing={3}
                sx={{ height: "10vh", marginTop: "2.5rem" }}
              >
                <Image
                  src="/img/image 3.png"
                  width="100%"
                  height="calc(6vw * 1.72)"
                  objectFit="contain"
                />
                <Image
                  src="/img/image 4 (1).png"
                  width="100%"
                  height="calc(6vw * 1.72)"
                  objectFit="contain"
                />
              </Stack>
            </Container>
          </ModalMenu>
        </Fragment>
      );
    }
  }, [isMdUp, animationState, Navbar, staticNav, isToggle]);

  if (!setting) {
    return null;
  }

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
