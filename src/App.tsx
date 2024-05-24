import React, { useEffect } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import {
	AboutSection,
	ContactSection,
	LandingPage,
	ProjectsSection,
} from '@/components/sections';
import Footer from '@/components/templates/Footer';
import { Header } from '@/components/templates/Header';
import { setupTheme } from '@/lib/theme';
import useLocale from '@/hooks/useLocale';

export default function App() {
	const { activeLocale, setLocale } = useLocale();

	useEffect(() => {
		setLocale(activeLocale);

		setupTheme();
	}, []);

	return (
		<I18nProvider i18n={i18n}>
			<div className="min-h-screen bg-primary text-on-primary">
				<Header />

				<main>
					<LandingPage />
					<AboutSection />
					<ProjectsSection />
					<ContactSection />
				</main>

				<Footer />
			</div>
		</I18nProvider>
	);
}
