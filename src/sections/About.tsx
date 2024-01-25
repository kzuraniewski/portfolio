import { Section } from '../components/Section';

export default function LandingPage() {
	return (
		<Section title="About me" id="about">
			<div className="flex items-center">
				<p className="w-1/2 mb-5">
					My name is Karol and I develop web stuff. My web development
					journey started in 2021 - when I got to know React. Since
					then I've had the opportunity to design, develop and
					maintain websites, E-commerce services and fullstack web
					applications at <a href="#work">different&nbsp;companies</a>
					.
				</p>

				<fieldset className="px-10 mx-auto border-2 border-dashed rounded py-7 w-fit border-secondary">
					<legend className="px-3 mx-auto font-bold uppercase">
						Technologies I've used
					</legend>

					<ul className="list-['>'] marker:text-accent grid grid-cols-2 gap-y-2 gap-x-10">
						{skills.map((skill) => (
							<li className="px-3 w-max">
								<span className="-ml-2">{skill}</span>
							</li>
						))}
					</ul>
				</fieldset>
			</div>
		</Section>
	);
}

const skills = ['TypeScript', 'React', 'MUI', 'Java', 'Node.js', 'WordPress'];
