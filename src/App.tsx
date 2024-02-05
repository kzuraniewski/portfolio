import React, { useEffect } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import { About, Contact, LandingPage, Projects } from '@/components/sections';
import Container from '@/components/ui/Container';
import Footer from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';

import { loadCatalog } from './i18n';
import { getLanguage } from './lib/util';

export default function App() {
	useEffect(() => {
		const language = getLanguage();
		loadCatalog(language || 'en-US');
	}, []);

	return (
		<I18nProvider i18n={i18n}>
			<body className="min-h-screen bg-primary text-on-primary">
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
		</I18nProvider>
	);
}
