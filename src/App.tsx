import React from 'react';
import { About, Contact, LandingPage, Projects } from '@/components/sections';

import Container from '@/components/ui/Container';
import Footer from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';

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
