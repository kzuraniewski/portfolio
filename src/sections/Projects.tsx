import ProjectHighlight from '@/components/ProjectHighlight';
import { Section } from '@/components/Section';
import { personalLinks, projects } from '@/lib/data';

export default function Projects() {
	return (
		<Section title="My Projects" id="projects">
			{projects
				.filter((project) => project.featured)
				.map((project, index) => (
					<ProjectHighlight
						project={project}
						className={
							'relative w-4/5 mx-auto ' +
							(index % 2 ? '-translate-x-4' : 'translate-x-4')
						}
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
