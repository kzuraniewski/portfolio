import React from 'react';
import { RxCross2 } from 'react-icons/rx';

import { Separated } from '@/components/ui';

export type ProjectTechStackProps = {
	tech: string[];
};

const ProjectTechStack = ({ tech }: ProjectTechStackProps) => {
	return (
		<Separated
			as="ul"
			className="flex items-center gap-1.5 text-sm"
			separator={<RxCross2 className="text-xs text-accent" />}
		>
			{tech.map((el) => (
				<li key={el}>{el}</li>
			))}
		</Separated>
	);
};

export default ProjectTechStack;
