import React from 'react';
import { msg, Trans as TransMacro } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import { FaGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui';
import cn from '@/lib/cn';
import { ProjectData } from '@/lib/data';

import ProjectDescription from './ProjectDescription';
import ProjectPreview from './ProjectPreview';
import ProjectTechStack from './ProjectTechStack';

export type ProjectHighlightProps = Omit<
	React.HTMLAttributes<HTMLDivElement>,
	'children'
> & {
	project: ProjectData;
};

export const ProjectHighlight = ({
	project,
	className,
	...props
}: ProjectHighlightProps) => {
	const { _ } = useLingui();

	const previewLink = project.links.website ?? project.links.github;

	return (
		<div
			className={cn(
				'grid-rows-[repeat(3, fit-content)] mb-24 grid grid-cols-[20rem_1fr] gap-x-16',
				className,
			)}
			{...props}
		>
			<div className="mb-5 flex w-full items-end justify-between">
				<h3 className="font-display text-2xl font-bold uppercase">
					<Trans id={project.name.id} />
				</h3>

				<ProjectTechStack tech={project.tech} />
			</div>

			<ProjectPreview
				image={project.previewImage}
				link={previewLink}
				alt={`${project.name} preview`}
				banner={project.wip ? _(msg`Working on`) : null}
				className="row-span-3"
			/>

			<ProjectDescription>
				<Trans id={project.description.id} />
			</ProjectDescription>

			<div className="ml-auto mt-10 flex items-center justify-end gap-5">
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
			</div>
		</div>
	);
};
