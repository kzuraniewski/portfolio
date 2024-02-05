import React, { useEffect } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import {
	AboutSection,
	ContactSection,
	LandingPage,
	ProjectsSection,
} from '@/components/sections';
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
			<body className="text-on-primary min-h-screen bg-primary">
				<Header />

				<main>
					<Container>
						<LandingPage />
						<AboutSection />
						<ProjectsSection />
						<ContactSection />
					</Container>
				</main>

				<Footer />
			</body>
		</I18nProvider>
	);
}
