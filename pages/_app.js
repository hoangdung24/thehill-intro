import "../styles/globals.css";
import { Layout } from "../components";
import { ErrorBoundary } from "react-error-boundary";
import "../axios.config";

function MyApp({ Component, pageProps }) {
	// return <Component {...pageProps} />;

	return (
		<ErrorBoundary
			fallbackRender={({ error, resetErrorBoundary }) => (
				<div role='alert'>
					<div>RUN FOR YOUR LIFE</div>
					<pre>{error.message}</pre>
					<button
						onClick={() => {
							resetComponentState();
							resetErrorBoundary();
						}}>
						Try again
					</button>
				</div>
			)}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ErrorBoundary>
	);
}

export default MyApp;
