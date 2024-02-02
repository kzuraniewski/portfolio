import React from 'react';
import { Trans } from '@lingui/macro';

import ProjectHighlight from '@/components/ui/ProjectHighlight';
import { Section } from '@/components/ui/Section';
import { personalLinks, projects } from '@/lib/data';

export default function Projects() {
	return (
		<Section title="My Projects" id="projects">
			<div className="flex flex-col items-center">
				{projects
					.filter((project) => project.featured)
					.map((project, index) => (
						<ProjectHighlight
							key={project.name}
							project={project}
							className={
								'relative ' +
								(index % 2 ? '-translate-x-4' : 'translate-x-4')
							}
						/>
					))}

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
}
