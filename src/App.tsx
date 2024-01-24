import Header from './components/Header';
import { AppContextProvider } from './lib/context';
import { About, LandingPage, Skills } from './sections';

export default function RootLayout() {
	return (
		<html lang="en">
			<AppContextProvider>
				<body className="min-h-screen text-silver bg-charcoal">
					<Header />
					<main className="container max-w-screen-lg py-10">
						<LandingPage />
						<About />
						<Skills />
					</main>
					{/* <Footer /> */}
				</body>
			</AppContextProvider>
		</html>
	);
}
