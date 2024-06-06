import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import { ProjectHighlight, Section } from '@/components/ui';
import { personalLinks, projects } from '@/lib/data';

export const ProjectsSection = () => {
	const { _ } = useLingui();

	return (
		<Section title={_(msg`My Projects`)} id="projects">
			<div className="flex flex-col items-center">
				<ul className="odd:-translate-x-4 even:translate-x-4">
					{projects
						.filter((project) => project.featured)
						.map((project) => (
							<li key={project.name.id}>
								<ProjectHighlight
									project={project}
									className="relative"
								/>
							</li>
						))}
				</ul>

				<div className="w-fit">
					<Trans>
						See more projects on my{' '}
						<a
							href={personalLinks.github}
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</Trans>
				</div>
			</div>
		</Section>
	);
};
