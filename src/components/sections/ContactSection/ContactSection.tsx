import { useState } from 'react';
import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import { CornerBanner, Section } from '@/components/ui';

import {
	CenteredText,
	ContactAlternative,
	ContactBlock,
	ContentBlock,
	ContentDivider,
	FreelanceSubSection,
	HighlightPolygonInner,
	HighlightPolygonOuter,
	SeparatedContent,
} from './ContactSection.styles';

export const ContactSection = () => {
	const { _ } = useLingui();
	const [hideBanner, setHideBanner] = useState(false);

	return (
		<Section
			title={_(msg`Contact me`)}
			id="contact"
			onViewportEnter={() => setHideBanner(true)}
			onViewportExit={() => setHideBanner(false)}
		>
			<SeparatedContent separator={<ContentDivider vertical />}>
				<ContentBlock>
					<CenteredText>
						<Trans>
							I am currently open to work, so if you found my
							portfolio interesting, feel free to contact me.
						</Trans>
					</CenteredText>

					<FreelanceSubSection title={_(msg`Need a website?`)}>
						<CenteredText>
							<Trans>
								I also develop websites as a freelancer. If you
								are in need of one, reach out to me.
							</Trans>
						</CenteredText>
					</FreelanceSubSection>
				</ContentBlock>

				<ContactBlock>
					<HighlightPolygonOuter
						variant="dashed"
						color="accent"
						getPoints={(width, height) => [
							[5, 35],
							[width - 50, 0],
							[width - 10, height - 20],
							[55, height - 5],
						]}
					>
						<HighlightPolygonInner
							getPoints={(width, height) => [
								[0, 10],
								[width, 0],
								[width - 20, height],
								[10, height - 5],
							]}
						>
							<Trans>Contact me at</Trans>{' '}
							<a href="mailto:zuraniewski.karol@gmail.com">
								zuraniewski.karol@gmail.com
							</a>
						</HighlightPolygonInner>
					</HighlightPolygonOuter>

					<ContactAlternative>
						<Trans>Or call me:</Trans>{' '}
						<a href="tel:+48503129246">503 129 246</a>
					</ContactAlternative>
				</ContactBlock>
			</SeparatedContent>

			<CornerBanner hidden={hideBanner} href="#contact">
				<Trans>Need a website?</Trans>
			</CornerBanner>
		</Section>
	);
};
