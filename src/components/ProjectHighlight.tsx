import { Button, IconButton } from '@/components/Button';
import PolygonBackground from '@/components/PolygonBackground';
import { Separated } from '@/components/Separated';
import cn from '@/lib/cn';
import { ProjectData } from '@/lib/data';
import { FaGithub } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

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
		<div className={cn('flex gap-20 mb-24', className)} {...props}>
			<div className="flex flex-col">
				<div className="flex items-end justify-between w-full mb-5">
					<h3 className="text-2xl font-bold uppercase font-display">
						{project.name}
					</h3>

					<Separated
						as="ul"
						className="flex items-center gap-1.5 text-sm"
						separator={<RxCross2 className="text-xs text-accent" />}
					>
						{project.tech.map((el) => (
							<li>{el}</li>
						))}
					</Separated>
				</div>

				<PolygonBackground
					padding={[10, 20]}
					getPoints={(width, height) => [
						[0, 5],
						[width, 0],
						[width - 25, height],
						[5, height - 3],
					]}
				>
					<p>{project.description}</p>
				</PolygonBackground>

				<div className="grow" />

				<div className="flex items-center justify-end gap-5 ml-auto">
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
							See live
						</Button>
					)}
				</div>
			</div>

			<div className="relative shrink-0">
				{project.wip && (
					<PolygonBackground
						padding={[7, 25]}
						rotation={30}
						background="accent"
						className="absolute z-10 px-6 py-1 text-sm font-bold uppercase pointer-events-none top-2 -right-6 text-primary"
						getPoints={(width, height) => [
							[30, 0],
							[width - 13, 5],
							[width - 4, height],
							[0, height - 5],
						]}
					>
						Working on
					</PolygonBackground>
				)}

				<a
					href={previewLink}
					className="relative block overflow-hidden rounded-sm group"
					target="_blank"
				>
					<div className="absolute z-10 w-5/6 px-5 text-sm text-center transition-opacity -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none group-hover:opacity-100 overflow-ellipsis top-1/2 left-1/2 text-light">
						{previewLink}
						<MdOutlineArrowOutward className="inline-block w-4 h-4 ml-2" />
					</div>

					<img
						src={project.previewImage}
						alt={`${project.name} preview`}
						className="h-56 scale-[1.03] transition-[filter] aspect-video group-hover:blur-[2px] group-hover:brightness-50"
					/>
				</a>
			</div>
		</div>
	);
};

export default ProjectHighlight;
