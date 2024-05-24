import React, { useState } from 'react';
import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Section, Separated, Divider, SubSection, Polygon, CornerBanner } from '../ui';

const ContactSection = () => {
	const { _ } = useLingui();
	const [hideBanner, setHideBanner] = useState(false);

	return (
		<Section
			title={_(msg`Contact me`)}
			id="contact"
			onViewportEnter={() => setHideBanner(true)}
			onViewportExit={() => setHideBanner(false)}
		>
			<Separated
				separator={<Divider vertical className="h-64 self-center" />}
				className="mx-auto flex w-4/5 items-start justify-between gap-10"
			>
				<div className="w-2/5 [&>p]:mb-5">
					<p className="text-center">
						<Trans>
							I am currently open to work, so if you found my
							portfolio interesting, feel free to contact me.
						</Trans>
					</p>

					<SubSection
						title={_(msg`Need a website?`)}
						className="mb-0"
					>
						<p className="text-center">
							<Trans>
								I also develop websites as a freelancer. If you
								are in need of one, reach out to me.
							</Trans>
						</p>
					</SubSection>
				</div>

				<div className="flex flex-col items-center gap-10">
					<Polygon
						variant="dashed"
						color="accent"
						getPoints={(width, height) => [
							[5, 35],
							[width - 50, 0],
							[width - 10, height - 20],
							[55, height - 5],
						]}
						className="mt-5 p-3"
					>
						<Polygon
							getPoints={(width, height) => [
								[0, 10],
								[width, 0],
								[width - 20, height],
								[10, height - 5],
							]}
							className="w-max px-8 py-5 text-on-secondary"
						>
							<Trans>Contact me at</Trans>{' '}
							<a href="mailto:zuraniewski.karol@gmail.com">
								zuraniewski.karol@gmail.com
							</a>
						</Polygon>
					</Polygon>

					<div className="text-sm">
						<Trans>Or call me:</Trans>{' '}
						<a href="tel:+48503129246">503 129 246</a>
					</div>
				</div>
			</Separated>

			<CornerBanner hidden={hideBanner} href="#contact">
				<Trans>Need a website?</Trans>
			</CornerBanner>
		</Section>
	);
};

export default ContactSection;
