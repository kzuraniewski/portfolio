'use client';

import './reset.scss';
import './variables.scss';
import './global.scss';

import { Roboto } from '@next/font/google';
import Header from '../components/Header';
import UrlDynamicId from '../components/UrlDynamicId';
import { useState } from 'react';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [currentId, setCurrentId] = useState<string | null>(null);

	return (
		<html lang="en">
			<body>
				<Header currentId={currentId} />
				<main className={roboto.className}>
					<UrlDynamicId onChange={setCurrentId}>
						{children}
					</UrlDynamicId>
				</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
