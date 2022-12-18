import './reset.scss';
import './variables.scss';
import './global.scss';

import { Roboto } from '@next/font/google';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				{/* <Header /> */}
				<main className={roboto.className}>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
