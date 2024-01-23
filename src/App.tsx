import Header from './components/Header';
import UrlDynamicId from './components/UrlDynamicId';
import { AppContextProvider } from './lib/context';
import { About, LandingPage } from './sections';

export default function RootLayout() {
	return (
		<html lang="en">
			<AppContextProvider>
				<body className="text-silver bg-charcoal min-h-screen">
					<Header />
					<main className="container mx-auto py-10 px-5">
						<UrlDynamicId>
							<LandingPage />
							<About />
						</UrlDynamicId>
					</main>
					{/* <Footer /> */}
				</body>
			</AppContextProvider>
		</html>
	);
}
