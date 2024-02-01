import { CompanyHistory } from '@/components/CompanyHistory';
import IconStack from '@/components/IconStack';
import PolygonBackground, {
	PolygonPointsFactory,
} from '@/components/PolygonBackground';
import { Section, SubSection } from '@/components/Section';
import { learningIcons, mainTechIcons } from '@/lib/data';

const getParagraphPoints: PolygonPointsFactory = (width, height) => [
	[20, 10],
	[width, 0],
	[width - 35, height],
	[0, height - 15],
];

export default function LandingPage() {
	return (
		<Section title="About me" id="about">
			<PolygonBackground
				className="w-2/3 mx-auto text-center"
				getPoints={getParagraphPoints}
			>
				<p>
					My name is Karol and I develop web stuff. My web development
					journey started in 2021 - when I got to know React. Since
					then I've had the opportunity to design, develop and
					maintain websites, E-commerce services and fullstack web
					applications at different&nbsp;companies.
				</p>
			</PolygonBackground>

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
