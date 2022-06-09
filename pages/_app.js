import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorBoundary } from "react-error-boundary";
import createEmotionCache from "../libs/createEmotionCache";

import { useRouting } from "../hooks";
import { Layout, ErrorFallback } from "../components";
import { Cache as EmotionCache, Theme as CustomMuiTheme, SWR } from "../HOC";

import "../axios.config";
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../node_modules/nprogress/nprogress.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useRouting();

  return (
    <EmotionCache emotionCache={emotionCache}>
      <CustomMuiTheme>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SWR fallback={pageProps?.fallback}>
            <SnackbarProvider autoHideDuration={4000} maxSnack={3}>
              <Layout>
                <CssBaseline />
                <Component {...pageProps} />
              </Layout>
            </SnackbarProvider>
          </SWR>
        </ErrorBoundary>
      </CustomMuiTheme>
    </EmotionCache>
  );
}

export default MyApp;
