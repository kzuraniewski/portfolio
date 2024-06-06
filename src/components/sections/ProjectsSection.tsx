import { msg, Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';

import { ProjectHighlight, Section } from '@/components/ui';
import { personalLinks, projects } from '@/lib/data';
import tw from '@/lib/tw';

export const ProjectsSection = () => {
	const { _ } = useLingui();

	return (
		<Section title={_(msg`My Projects`)} id="projects">
			<Content>
				<ProjectList>
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
				</ProjectList>

				<Appendix>
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
				</Appendix>
			</Content>
		</Section>
	);
};

const Content = tw.div`
	flex
	flex-col
	items-center
`;

const ProjectList = tw.ul`
	odd:-translate-x-4
	even:translate-x-4
`;

const Appendix = tw.div`
	w-fit
`;
