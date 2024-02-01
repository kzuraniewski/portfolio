import { CompanyHistory } from '@/components/CompanyHistory';
import IconStack from '@/components/IconStack';
import PolygonBackground from '@/components/PolygonBackground';
import { Section, SubSection } from '@/components/Section';
import { learningTechStack, mainTechStack } from '@/lib/data';

export default function LandingPage() {
	return (
		<Section title="About me" id="about">
			<div className="mx-auto flex w-3/5 justify-between gap-20">
				<div className="">
					<PolygonBackground
						noFill
						padding={[15, 25]}
						className="mx-auto"
						getPoints={(width, height) => [
							[5, 10],
							[width, 0],
							[width - 15, height],
							[0, height - 10],
						]}
					>
						<p className="w-max text-center">
							Hi, my name is Karol. I develop web stuff.
						</p>
					</PolygonBackground>

					<p className="mx-auto mt-8 w-fit text-center">
						My web development journey started in 2021 - when I got
						to know React. Since then I've had the opportunity to
						design, develop and maintain websites, E-commerce
						services and fullstack web applications at different
						companies.
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
					<SubSection title="Technologies I've worked with">
						<IconStack stack={mainTechStack} />
					</SubSection>

					<SubSection title="What I'm learning">
						<IconStack stack={learningTechStack} />
					</SubSection>
				</div>

				<SubSection title="Companies I worked in" className="w-1/2">
					<CompanyHistory />
				</SubSection>
			</div>
		</Section>
	);
}
