import ProjectHighlight from '@/components/ProjectHighlight';
import { Section } from '@/components/Section';
import { personalLinks, projects } from '@/lib/data';

export default function Projects() {
	return (
		<Section title="My Projects" id="projects">
			{projects
				.filter((project) => project.featured)
				.map((project) => (
					<ProjectHighlight
						project={project}
						className="w-4/5 mx-auto"
					/>
				))}

			<div className="mx-auto w-fit">
				See more projects on my{' '}
				<a href={personalLinks.github} target="_blank">
					GitHub
				</a>
			</div>
		</Section>
	);
}
