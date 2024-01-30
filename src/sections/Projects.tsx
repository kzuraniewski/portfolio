import ProjectHighlight from '@/components/ProjectHighlight';
import { Section } from '@/components/Section';
import { projects } from '@/lib/data';

export default function Projects() {
	return (
		<Section title="Projects" id="projects">
			{projects.map((project) => (
				<ProjectHighlight project={project} className="mx-auto w-4/5" />
			))}
		</Section>
	);
}
