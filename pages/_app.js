import CssBaseline from "@mui/material/CssBaseline";

import { Layout } from "../components";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "@mui/material/styles";

import createEmotionCache from "../helpers/createEmotionCache";

import { Cache as EmotionCache, Theme } from "../HOC";
import "../axios.config";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;



  return (
    <EmotionCache emotionCache={emotionCache}>
      <ThemeProvider theme={Theme}>
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div role="alert">
              <div>RUN FOR YOUR LIFE</div>
              <pre>{error.message}</pre>
            </div>
          )}
        >
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </EmotionCache>
  );
}

export default MyApp;
