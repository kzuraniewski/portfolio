import React from 'react';
import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import { CompanyHistory } from '@/components/ui/CompanyHistory';
import IconStack from '@/components/ui/IconStack';
import Polygon from '@/components/ui/Polygon';
import { Section, SubSection } from '@/components/ui/Section';
import { learningTechStack, mainTechStack } from '@/lib/data';

export default function LandingPage() {
	const { _ } = useLingui();

	return (
		<Section title={_(msg`About me`)} id="about">
			<div className="mx-auto flex w-3/5 justify-between gap-20">
				<div className="">
					<Polygon
						variant="outline"
						color="accent"
						padding={[15, 25]}
						getPoints={(width, height) => [
							[5, 10],
							[width, 0],
							[width - 15, height],
							[0, height - 10],
						]}
						className="mx-auto"
					>
						<p className="w-max text-center">
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

				<div className="flex w-1/4 shrink-0 items-center justify-center">
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
							className="h-full w-full"
						/>
					</div>
					{/* </PolygonBackground> */}
				</div>
			</div>

			<div className="flex justify-around">
				<div className="flex flex-col">
					<SubSection title={_(msg`Technologies I've worked with`)}>
						<IconStack stack={mainTechStack} />
					</SubSection>

					<SubSection title={_(msg`What I'm learning`)}>
						<IconStack stack={learningTechStack} />
					</SubSection>
				</div>

				<SubSection
					title={_(msg`Companies I worked in`)}
					className="w-1/2"
				>
					<CompanyHistory />
				</SubSection>
			</div>
		</Section>
	);
}
