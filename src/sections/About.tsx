import { BiLogoJava } from 'react-icons/bi';
import {
	SiMui,
	SiNodedotjs,
	SiReact,
	SiTypescript,
	SiWordpress,
} from 'react-icons/si';
import { Section } from '../components/Section';

export default function LandingPage() {
	return (
		<Section title="About me" id="about">
			<div className="flex flex-col items-center">
				<p className="w-2/3 mb-20 text-center">
					My name is Karol and I develop web stuff. My web development
					journey started in 2021 - when I got to know React. Since
					then I've had the opportunity to design, develop and
					maintain websites, E-commerce services and fullstack web
					applications at <a href="#work">different&nbsp;companies</a>
					.
				</p>

				<h3 className="px-3 mx-auto font-bold uppercase mb-14">
					Technologies I've worked with
				</h3>

				<ul className="flex items-center justify-between w-5/6">
					{[
						<SiTypescript />,
						<SiReact />,
						<SiMui />,
						<BiLogoJava />,
						<SiNodedotjs />,
						<SiWordpress />,
					].map((icon, index, array) => (
						<>
							<li className="flex flex-col items-center gap-6">
								<span className="text-4xl">{icon}</span>
							</li>

							{index !== array.length - 1 && (
								<div className="h-10 border-r-2 border-dashed border-secondary" />
							)}
						</>
					))}
				</ul>
			</div>
		</Section>
	);
}
