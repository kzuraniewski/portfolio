import React from 'react';
import { Trans } from '@lingui/macro';

export const Footer = () => {
	return (
		<footer className="border-t-2 border-dashed border-secondary text-center text-sm">
			<div className="container py-8">
				<a
					href="https://github.com/kzuraniewski"
					className="text-on-primary hover:text-accent"
					target="_blank"
					rel="noreferrer"
				>
					<Trans>Designed and developed by Karol Żuraniewski</Trans>
				</a>
			</div>
		</footer>
	);
};
