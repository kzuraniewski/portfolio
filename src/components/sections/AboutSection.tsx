import React from 'react';
import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import { CompanyHistory } from '@/components/ui/CompanyHistory';
import IconStack from '@/components/ui/IconStack';
import Polygon from '@/components/ui/Polygon';
import { Section, SubSection } from '@/components/ui/Section';
import { learningTechStack, mainTechStack } from '@/lib/data';

const AboutSection = () => {
	const { _ } = useLingui();

	return (
		<Section title={_(msg`About me`)} id="about">
			<div className="mx-auto flex  flex-wrap-reverse justify-center gap-10 xl:gap-20">
				<div className="max-w-md">
					<Polygon
						variant="outline"
						color="accent"
						getPoints={(width, height) => [
							[5, 10],
							[width, 0],
							[width - 15, height],
							[0, height - 10],
						]}
						className="mx-auto px-6 py-4"
					>
						<p className="text-center">
							<Trans>
								Hi, my name is Karol. I develop web stuff.
							</Trans>
						</p>
					</Polygon>

					<p className="mx-auto mt-8 w-fit text-center">
						<Trans>
							My web development journey started in 2021 - when I
							got to know React. Since then I&apos;ve had the
							opportunity to design, develop and maintain
							websites, E-commerce services and fullstack web
							applications at different companies.
						</Trans>
					</p>
				</div>

				<div className="flex w-44 shrink-0 items-center justify-center">
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
					<div className="aspect-square w-full overflow-hidden rounded-full border-2 border-accent">
						<img
							src="/photo.jpg"
							alt="My photo"
							className="h-full w-full object-cover"
						/>
					</div>
					{/* </PolygonBackground> */}
				</div>
			</div>

			<div className="mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[300px_1fr] lg:gap-x-12 xl:grid-cols-[400px_1fr] xl:gap-x-16">
				<SubSection title={_(msg`Technologies I've worked with`)}>
					<IconStack stack={mainTechStack} />
				</SubSection>

				<SubSection
					title={_(msg`Companies I worked in`)}
					variant="dashed"
					className="sm:order-2 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2"
				>
					<CompanyHistory />
				</SubSection>

				<SubSection title={_(msg`What I'm learning`)} variant="flat">
					<IconStack stack={learningTechStack} />
				</SubSection>
			</div>
		</Section>
	);
};

export default AboutSection;
