import { About, Contact, LandingPage, Projects } from '@/sections';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';

export default function App() {
	return (
		<html lang="en" className="text-[18px]">
			<body className="min-h-screen bg-primary text-light">
				<Header />

				<main>
					<Container>
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
