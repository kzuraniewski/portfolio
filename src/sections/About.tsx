import { Button } from '../components/Button';
import { CompanyHistory } from '../components/CompanyHistory';
import { Divider } from '../components/Divider';
import { Section, SubSection } from '../components/Section';
import { Separated } from '../components/Separated';
import { mainTechIcons } from '../lib/data';

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

			<div className="flex justify-evenly">
				<SubSection title="Technologies I've worked with">
					<Separated
						as="ul"
						separator={<Divider vertical className="h-10" />}
						className="grid items-center grid-cols-5 mx-auto mb-20 justify-items-center gap-y-12"
						indexSelector={(index) => Boolean((index + 1) % 3)}
					>
						{mainTechIcons.map(({ src, alt }) => (
							<li>
								<img src={src} alt={alt} className="w-14" />
							</li>
						))}
					</Separated>
				</SubSection>

				<SubSection title="Companies I worked in" className='w-1/2'>
					<CompanyHistory />
				</SubSection>
			</div>
		</Section>
	);
}
