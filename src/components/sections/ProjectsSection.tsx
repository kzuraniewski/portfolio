import React from 'react';
import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import ProjectHighlight from '@/components/ui/ProjectHighlight';
import Section from '@/components/ui/Section';
import { personalLinks, projects } from '@/lib/data';

const ProjectsSection = () => {
	const { _ } = useLingui();

	return (
		<Section title={_(msg`My Projects`)} id="projects">
			<div className="flex flex-col items-center">
				{projects
					.filter((project) => project.featured)
					.map((project, index) => (
						<ProjectHighlight
							key={project.name.id}
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
};

export default ProjectsSection;
