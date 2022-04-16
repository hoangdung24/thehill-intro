import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import { SWRConfig } from "swr";
import { ErrorBoundary } from "react-error-boundary";
import createEmotionCache from "../helpers/createEmotionCache";

import { SnackbarProvider } from "notistack";

import { Layout, ErrorFallback } from "../components";
import { useRouting } from "../hooks";
import { Cache as EmotionCache, Theme as CustomMuiTheme } from "../HOC";

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
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher: async (resource, init) => {
              return axios.get(resource, init).then((res) => {
                return res.data;
              });
            },
          }}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <SnackbarProvider autoHideDuration={4000} maxSnack={3}>
              <Layout>
                <CssBaseline />
                <Component {...pageProps} />
              </Layout>
            </SnackbarProvider>
          </ErrorBoundary>
        </SWRConfig>
      </CustomMuiTheme>
    </EmotionCache>
  );
}

export default MyApp;
