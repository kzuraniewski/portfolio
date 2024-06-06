import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import {
	CompanyHistory,
	IconStack,
	Section,
	SubSection,
} from '@/components/ui';
import { learningTechStack, mainTechStack } from '@/lib/data';

import {
	AuthorDescription,
	AuthorImage,
	AuthorImageBlock,
	AuthorImageShape,
	AuthorPanel,
	CompanySubSection,
	HighlightPolygon,
	HighlightText,
	SubSections,
	Summary,
} from './AboutSection.styles';

export const AboutSection = () => {
	const { _ } = useLingui();

	return (
		<Section title={_(msg`About me`)} id="about">
			<AuthorPanel>
				<AuthorDescription>
					<HighlightPolygon
						variant="outline"
						color="accent"
						getPoints={(width, height) => [
							[5, 10],
							[width, 0],
							[width - 15, height],
							[0, height - 10],
						]}
					>
						<HighlightText>
							<Trans>
								Hi, my name is Karol. I develop web stuff.
							</Trans>
						</HighlightText>
					</HighlightPolygon>

					<Summary>
						<Trans>
							My web development journey started in 2021 - when I
							got to know React. Since then I&apos;ve had the
							opportunity to design, develop and maintain
							websites, E-commerce services and fullstack web
							applications at different companies.
						</Trans>
					</Summary>
				</AuthorDescription>

				<AuthorImageBlock>
					{/* <PolygonBackground
						background="accent"
						padding={10}
						getPoints={(width, height) => [
							[0, 20],
							[width / 2, 5],
							[width - 10, 0],
							[width - 5, height / 2 - 15],
							[width - 15, height],
							[0, height],
						]}
					> */}
					<AuthorImageShape>
						<AuthorImage src="/photo.jpg" alt="My photo" />
					</AuthorImageShape>
					{/* </PolygonBackground> */}
				</AuthorImageBlock>
			</AuthorPanel>

			<SubSections>
				<SubSection title={_(msg`Technologies I've worked with`)}>
					<IconStack stack={mainTechStack} />
				</SubSection>

				<CompanySubSection
					title={_(msg`Companies I worked in`)}
					variant="dashed"
				>
					<CompanyHistory />
				</CompanySubSection>

				<SubSection title={_(msg`What I'm learning`)} variant="flat">
					<IconStack stack={learningTechStack} />
				</SubSection>
			</SubSections>
		</Section>
	);
};
