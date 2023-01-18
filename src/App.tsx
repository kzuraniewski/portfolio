import Header from './components/Header';
import UrlDynamicId from './components/UrlDynamicId';
import { AppContextProvider } from './lib/context';
import { LandingPage } from './sections';

export default function RootLayout() {
	return (
		<html lang="en">
			<AppContextProvider>
				<body className="text-white bg-gray-900 min-h-screen">
					<Header />
					<main className="container mx-auto py-0 px-5">
						<UrlDynamicId>
							<LandingPage />
						</UrlDynamicId>
					</main>
					{/* <Footer /> */}
				</body>
			</AppContextProvider>
		</html>
	);
}
