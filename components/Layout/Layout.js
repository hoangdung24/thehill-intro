import { Footer, Navbar } from "../../components";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import { SettingConfig, GlobalConfig } from "../../context";
import Header from "../Header/Header";
import BackToTop from "../BackToTop/BackToTop";
import { useMemo } from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <SettingConfig>
        <GlobalConfig>
          {/* <Navbar /> */}
          <Header />
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
            }}
          >
            <BackToTop />
            {children}
          </Box>
          <Footer />
        </GlobalConfig>
      </SettingConfig>
    </Box>
  );
};

export default Layout;
