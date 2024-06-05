import { msg, Trans as TransMacro } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import { FaGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui';
import { ProjectData } from '@/lib/data';

import ProjectDescription from './ProjectDescription';
import {
	Actions,
	Header,
	ProjectPreview,
	Root,
	Title,
} from './ProjectHighlight.styles';
import ProjectTechStack from './ProjectTechStack';

export type ProjectHighlightProps = Omit<
	React.HTMLAttributes<HTMLDivElement>,
	'children'
> & {
	project: ProjectData;
};

export const ProjectHighlight = ({
	project,
	...props
}: ProjectHighlightProps) => {
	const { _ } = useLingui();

	const previewLink = project.links.website ?? project.links.github;

	return (
		<Root {...props}>
			<Header>
				<Title>
					<Trans id={project.name.id} />
				</Title>

				<ProjectTechStack tech={project.tech} />
			</Header>

			<ProjectPreview
				image={project.previewImage}
				link={previewLink}
				alt={`${project.name} preview`}
				banner={project.wip ? _(msg`Working on`) : null}
			/>

			<ProjectDescription>
				<Trans id={project.description.id} />
			</ProjectDescription>

			<Actions>
				<Button
					icon
					as="a"
					size="big"
					href={project.links.github}
					target="_blank"
				>
					<FaGithub />
				</Button>

				{project.links.website && (
					<Button
						as="a"
						variant="primary"
						href={project.links.website}
						target="_blank"
					>
						<TransMacro>See live</TransMacro>
					</Button>
				)}
			</Actions>
		</Root>
	);
};
