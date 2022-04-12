import CssBaseline from "@mui/material/CssBaseline";
import { Layout , ErrorFallback} from "../components";
import { ErrorBoundary } from "react-error-boundary";
import createEmotionCache from "../helpers/createEmotionCache";
import { Cache as EmotionCache, Theme as CustomMuiTheme } from "../HOC";
import "../axios.config";
import { SWRConfig } from "swr";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
		<EmotionCache emotionCache={emotionCache}>
			<CustomMuiTheme>
				<SWRConfig value={{
          refreshInterval: 3000,
          fetcher: async (resource, init)=> {
            return axios.get(resource, init).then((res)=> {
              return res.data
            })
          }
        }}>
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<Layout>
							<CssBaseline />
							<Component {...pageProps} />
						</Layout>
					</ErrorBoundary>
				</SWRConfig>
			</CustomMuiTheme>
		</EmotionCache>
	);
}

export default MyApp;
