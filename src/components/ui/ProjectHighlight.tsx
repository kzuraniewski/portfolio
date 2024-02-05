import React from 'react';
import { Trans as TransMacro } from '@lingui/macro';
import { Trans } from '@lingui/react';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import { Button, IconButton } from '@/components/ui/Button';
import Polygon from '@/components/ui/Polygon';
import { Separated } from '@/components/ui/Separated';
import cn from '@/lib/cn';
import { ProjectData } from '@/lib/data';

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

				<Polygon
					variant="dashed"
					color="accent"
					padding={[10, 20]}
					getPoints={(width, height) => [
						[40, 5],
						[width - 10, 25],
						[width - 75, height],
						[15, height - 25],
					]}
				>
					<Polygon
						padding={[10, 20]}
						getPoints={(width, height) => [
							[0, 5],
							[width, 0],
							[width - 25, height],
							[5, height - 3],
						]}
					>
						<p className="text-on-secondary">
							<Trans id={project.description.id} />
						</p>
					</Polygon>
				</Polygon>

				<div className="grow" />

				<div className="ml-auto mt-10 flex items-center justify-end gap-5">
					<IconButton
						size="big"
						href={project.links.github}
						target="_blank"
					>
						<FaGithub />
					</IconButton>

					{project.links.website && (
						<Button
							variant="primary"
							href={project.links.website}
							target="_blank"
						>
							<TransMacro>See live</TransMacro>
						</Button>
					)}
				</div>
			</div>

			<div className="relative shrink-0">
				{project.wip && (
					<Polygon
						padding={[7, 25]}
						color="accent"
						className="pointer-events-none absolute -right-6 top-2 z-10 px-6 py-1 text-sm font-bold uppercase text-on-accent rotate-30"
						getPoints={(width, height) => [
							[30, 0],
							[width - 13, 5],
							[width - 4, height],
							[0, height - 5],
						]}
					>
						<TransMacro>Working on</TransMacro>
					</Polygon>
				)}

				<a
					href={previewLink}
					className="group relative block overflow-hidden rounded-sm"
					target="_blank"
					rel="noreferrer"
				>
					<div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-5/6 -translate-x-1/2 -translate-y-1/2 overflow-ellipsis px-5 text-center text-sm text-font-light opacity-0 transition-opacity group-hover:opacity-100">
						{previewLink}
						<MdOutlineArrowOutward className="ml-2 inline-block h-4 w-4" />
					</div>

					<img
						src={project.previewImage}
						alt={`${project.name} preview`}
						className="aspect-video h-64 scale-[1.03] transition-[filter] group-hover:blur-[2px] group-hover:brightness-50"
					/>
				</a>
			</div>
		</div>
	);
};

export default ProjectHighlight;
