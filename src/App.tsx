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

import useLocale from './hooks/useLocale';

export default function App() {
	const { activeLocale, setLocale } = useLocale();

	useEffect(() => {
		setLocale(activeLocale);
	}, []);

	return (
		<I18nProvider i18n={i18n}>
			<body className="min-h-screen bg-primary text-on-primary">
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
