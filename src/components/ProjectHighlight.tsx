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
	const { name, description, links, previewImage, tech } = project;

	return (
		<div className={cn('flex gap-10 mb-24', className)} {...props}>
			<div className="flex flex-col">
				<div className="flex items-end justify-between w-full mb-5">
					<h3 className="text-2xl font-bold uppercase font-display">
						{name}
					</h3>

					<Separated
						as="ul"
						className="flex items-center gap-1.5 text-sm"
						separator={<RxCross2 className="text-xs text-accent" />}
					>
						{tech.map((el) => (
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
					<p>{description}</p>
				</PolygonBackground>

				<div className="grow" />

				<div className="flex items-center justify-end gap-5 ml-auto">
					<IconButton size="big" href={links.github}>
						<FaGithub />
					</IconButton>

					{links.website && (
						<Button variant="primary" href={links.website}>
							See live
						</Button>
					)}
				</div>
			</div>

			<div className="border h-60 aspect-video border-secondary"></div>
		</div>
	);
};

export default ProjectHighlight;
