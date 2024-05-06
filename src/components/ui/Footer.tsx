import React from 'react';
import { Trans } from '@lingui/macro';

import Container from '@/components/ui/Container';

const Footer = () => {
	return (
		<footer className="border-t-2 border-dashed border-secondary text-center text-sm">
			<Container className="py-8">
				<a
					href="https://github.com/kzuraniewski"
					className="text-on-primary hover:text-accent"
					target="_blank"
					rel="noreferrer"
				>
					<Trans>Designed and developed by Karol Żuraniewski</Trans>
				</a>
			</Container>
		</footer>
	);
};

export default Footer;
