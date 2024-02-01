import { CompanyHistory } from '@/components/CompanyHistory';
import IconStack from '@/components/IconStack';
import PolygonBackground from '@/components/PolygonBackground';
import { Section, SubSection } from '@/components/Section';
import { learningIcons, mainTechIcons } from '@/lib/data';

export default function LandingPage() {
	return (
		<Section title="About me" id="about">
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
				<p className="text-center w-max">
					Hi, my name is Karol. I develop web stuff.
				</p>
			</PolygonBackground>

			<p className="w-2/3 mx-auto mt-8 text-center">
				My web development journey started in 2021 - when I got to know
				React. Since then I've had the opportunity to design, develop
				and maintain websites, E-commerce services and fullstack web
				applications at different companies.
			</p>

			<div className="flex justify-around">
				<div className="flex flex-col">
					<SubSection title="Technologies I've worked with">
						<IconStack icons={mainTechIcons} />
					</SubSection>

					<SubSection title="What I'm learning">
						<IconStack icons={learningIcons} />
					</SubSection>
				</div>

				<SubSection title="Companies I worked in" className="w-1/2">
					<CompanyHistory />
				</SubSection>
			</div>
		</Section>
	);
}
