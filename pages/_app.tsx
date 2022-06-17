import "../styles/globals.css";
import "normalize.css/normalize.css";

import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ThemeProvider theme={defaultTheme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
