import { ContactMe } from './components/ContactMe';
import Container from './components/Container';
import { Header } from './components/Header';
import { AppContextProvider } from './lib/context';
import { About, LandingPage, Skills } from './sections';

export default function RootLayout() {
	return (
		<html lang="en" className="text-[18px]">
			<AppContextProvider>
				<body className="min-h-screen text-light bg-primary">
					<Header />

					<main>
						<Container className="py-10">
							<LandingPage />
							<About />
							<Skills />
						</Container>

						<ContactMe />
					</main>
					{/* <Footer /> */}
				</body>
			</AppContextProvider>
		</html>
	);
}
