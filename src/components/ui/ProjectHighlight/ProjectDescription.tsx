import React from 'react';

import { Polygon } from '@/components/ui';

export type ProjectDescriptionProps = React.PropsWithChildren;

const ProjectDescription = ({ children }: ProjectDescriptionProps) => {
	return (
		<Polygon
			variant="dashed"
			color="accent"
			getPoints={(width, height) => [
				[40, 5],
				[width - 10, 25],
				[width - 75, height],
				[15, height - 25],
			]}
			className="px-5 py-3"
		>
			<Polygon
				getPoints={(width, height) => [
					[0, 5],
					[width, 0],
					[width - 25, height],
					[5, height - 3],
				]}
				className="px-5 py-3"
			>
				<p className="text-on-secondary">{children}</p>
			</Polygon>
		</Polygon>
	);
};

export default ProjectDescription;
