import React, { useEffect } from 'react';
import { i18n } from '@lingui/core';
import { detect, fromNavigator, fromStorage } from '@lingui/detect-locale';
import { I18nProvider } from '@lingui/react';

import { About, Contact, LandingPage, Projects } from '@/components/sections';
import Container from '@/components/ui/Container';
import Footer from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';

import { loadCatalog } from './i18n';

export default function App() {
	useEffect(() => {
		const detectedLanguage = detect(fromStorage('lang'), fromNavigator());

		loadCatalog(detectedLanguage || 'en-US');
	}, []);

	return (
		<I18nProvider i18n={i18n}>
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
		</I18nProvider>
	);
}
