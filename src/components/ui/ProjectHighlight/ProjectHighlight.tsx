import React from 'react';
import { msg, Trans as TransMacro } from '@lingui/macro';
import { Trans, useLingui } from '@lingui/react';
import { FaGithub } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

import { Button } from '@/components/ui/Button';
import { Separated } from '@/components/ui/Separated';
import cn from '@/lib/cn';
import { ProjectData } from '@/lib/data';

import ProjectDescription from './ProjectDescription';
import ProjectPreview from './ProjectPrevew';

// FEATURE: Define shape by providing edge angles to preserve it on any size, i.e. [85, 190, 95, 170]

export type ProjectHighlightProps = Omit<
	React.HTMLAttributes<HTMLDivElement>,
	'children'
> & {
	project: ProjectData;
};

const ProjectHighlight = ({
	project,
	className,
	...props
}: ProjectHighlightProps) => {
	const { _ } = useLingui();

	const previewLink = project.links.website ?? project.links.github;

	return (
		<div className={cn('mb-24 flex gap-16', className)} {...props}>
			<div className="flex w-80 shrink-0 flex-col">
				<div className="mb-5 flex w-full items-end justify-between">
					<h3 className="font-display text-2xl font-bold uppercase">
						<Trans id={project.name.id} />
					</h3>

					<Separated
						as="ul"
						className="flex items-center gap-1.5 text-sm"
						separator={<RxCross2 className="text-xs text-accent" />}
					>
						{project.tech.map((el) => (
							<li key={el}>{el}</li>
						))}
					</Separated>
				</div>

				<ProjectDescription>
					<Trans id={project.description.id} />
				</ProjectDescription>

				<div className="grow" />

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

			<ProjectPreview
				image={project.previewImage}
				link={previewLink}
				alt={`${project.name} preview`}
				banner={project.wip ? _(msg`Working on`) : null}
			/>
		</div>
	);
};

export default ProjectHighlight;
