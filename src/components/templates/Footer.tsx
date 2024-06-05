import { Trans } from '@lingui/macro';

import tw from '@/lib/tw';

export const Footer = () => {
	return (
		<RootPanel>
			<Content>
				<Link
					href="https://github.com/kzuraniewski"
					target="_blank"
					rel="noreferrer"
				>
					<Trans>Designed and developed by Karol Żuraniewski</Trans>
				</Link>
			</Content>
		</RootPanel>
	);
};

const RootPanel = tw.footer`
	border-t-2
	border-dashed
	border-secondary
	text-center
	text-sm
`;

const Content = tw.div`
	container
	py-8
`;

const Link = tw.a`
	text-on-primary

	hover:text-accent
`;
