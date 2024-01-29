import { Section, SubSection } from '../components/Section';
import { Separated } from '../components/Separated';
import techIcons from '../lib/techIcons';

export default function LandingPage() {
	return (
		<Section title="About me" id="about">
			<p className="w-2/3 mx-auto mb-20 text-center">
				My name is Karol and I develop web stuff. My web development
				journey started in 2021 - when I got to know React. Since then
				I've had the opportunity to design, develop and maintain
				websites, E-commerce services and fullstack web applications at
				different&nbsp;companies.
			</p>

			<SubSection title="Technologies I've worked with">
				<Separated
					as="ul"
					separator={
						<div className="h-10 border-r-2 border-dashed border-secondary" />
					}
					className="flex items-center justify-between w-5/6 mx-auto mb-20"
				>
					{techIcons.map(({ src, alt }) => (
						<li>
							<img src={src} alt={alt} className="w-14" />
						</li>
					))}
				</Separated>
			</SubSection>

			<SubSection title="Companies I worked in">
				<Separated
					as="ul"
					separator={
						<div className="w-full border-b-2 border-dashed border-secondary" />
					}
					className="flex flex-col gap-3 mx-auto text-sm tracking-wide w-fit"
				>
					{[
						['09.2022 - 08.2023', 'All for One Poland'],
						['02.2022 - 07.2022', 'Olimp Agency'],
					].map(([timeSpan, company]) => (
						<li>
							<span className="inline-block mr-2 text-accent">
								{timeSpan}
							</span>{' '}
							{company}
						</li>
					))}
				</Separated>
			</SubSection>
		</Section>
	);
}
