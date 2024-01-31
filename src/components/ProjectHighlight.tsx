import { Button, IconButton } from '@/components/Button';
import PolygonBackground from '@/components/PolygonBackground';
import { Separated } from '@/components/Separated';
import cn from '@/lib/cn';
import { ProjectData } from '@/lib/data';
import { FaGithub } from 'react-icons/fa6';
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
					<IconButton size="big" href={project.links.github}>
						<FaGithub />
					</IconButton>

					{project.links.website && (
						<Button variant="primary" href={project.links.website}>
							See live
						</Button>
					)}
				</div>
			</div>

			<div className="relative shrink-0">
				{project.wip && (
					<div className="absolute top-0 px-6 py-1 uppercase -right-5 rotate-12 text-primary bg-accent">
						Working on
					</div>
				)}

				<img
					src={project.previewImage}
					alt={`${project.name} preview`}
					className="h-56 aspect-video"
				/>
			</div>
		</div>
	);
};

export default ProjectHighlight;
