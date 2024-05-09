import React, { HTMLAttributes } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

import Polygon from '@/components/ui/Polygon';
import cn from '@/lib/cn';

export type ProjectPreviewProps = HTMLAttributes<HTMLDivElement> & {
	image: string;
	link: string;
	alt: string;
	banner?: string | null;
};

const ProjectPreview = ({
	image,
	link,
	alt,
	banner,
	className,
	...props
}: ProjectPreviewProps) => {
	return (
		<div className={cn('relative', className)} {...props}>
			{banner && (
				<Polygon
					color="accent"
					className="rotate-30 pointer-events-none absolute -right-6 top-2 z-10 px-[25px] py-[7px] text-sm font-bold uppercase text-on-accent"
					getPoints={(width, height) => [
						[30, 0],
						[width - 13, 5],
						[width - 4, height],
						[0, height - 5],
					]}
				>
					{banner}
				</Polygon>
			)}

			<a
				href={link}
				className="group relative block overflow-hidden rounded-sm"
				target="_blank"
				rel="noreferrer"
			>
				<div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-5/6 -translate-x-1/2 -translate-y-1/2 overflow-ellipsis px-5 text-center text-sm text-light opacity-0 transition-opacity group-hover:opacity-100">
					{link}
					<MdOutlineArrowOutward className="ml-2 inline-block h-4 w-4" />
				</div>

				<img
					src={image}
					alt={alt}
					className="aspect-video h-64 scale-[1.03] transition-[filter] group-hover:blur-[2px] group-hover:brightness-50"
				/>
			</a>
		</div>
	);
};

export default ProjectPreview;
