import { ContactMe } from './components/ContactMe';
import Container from './components/Container';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { AppContextProvider } from './lib/context';
import { About, LandingPage, Projects } from './sections';

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
							<Projects />
						</Container>

						<ContactMe />
					</main>

					<Footer />
				</body>
			</AppContextProvider>
		</html>
	);
}
