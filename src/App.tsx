import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { About, Contact, LandingPage, Projects } from '@/sections';

export default function App() {
	return (
		<html lang="en" className="text-[18px]">
			<body className="min-h-screen text-light bg-primary">
				<Header />

				<main>
					<Container className="py-10">
						<LandingPage />
						<About />
						<Projects />
						<Contact />
					</Container>
				</main>

				<Footer />
			</body>
		</html>
	);
}
