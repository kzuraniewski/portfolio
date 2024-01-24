import Header from './components/Header';
import { AppContextProvider } from './lib/context';
import { About, LandingPage } from './sections';

export default function RootLayout() {
	return (
		<html lang="en">
			<AppContextProvider>
				<body className="min-h-screen text-silver bg-charcoal">
					<Header />
					<main className="container py-10">
						<LandingPage />
						<About />
					</main>
					{/* <Footer /> */}
				</body>
			</AppContextProvider>
		</html>
	);
}
