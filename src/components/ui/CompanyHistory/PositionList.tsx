import React from 'react';

import Polygon, { PolygonProps } from '@/components/ui/Polygon';
import cn from '@/lib/cn';

export type CompanyRolesProps = PolygonProps & {
	positions: string[];
};

const PositionList = ({
	positions,
	className,
	...props
}: CompanyRolesProps) => {
	return (
		<Polygon
			getPoints={(width, height) => [
				[0, 5],
				[width, 0],
				[width - 5, height - 1],
				[3, height],
			]}
			className={cn('mb-3 h-fit w-fit p-3', className)}
			{...props}
		>
			<ul>
				{positions.map((position) => (
					<li
						key={position}
						className="w-max font-display font-bold uppercase text-accent"
					>
						{position}
					</li>
				))}
			</ul>
		</Polygon>
	);
};

export default PositionList;
