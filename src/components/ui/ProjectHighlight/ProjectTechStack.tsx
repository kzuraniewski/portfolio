import { RxCross2 } from 'react-icons/rx';

import { Separated } from '@/components/ui';
import tw from '@/lib/tw';

export type ProjectTechStackProps = {
	tech: string[];
};

const ProjectTechStack = ({ tech }: ProjectTechStackProps) => {
	return (
		<Separated
			as="ul"
			className="flex items-center gap-1.5 text-sm"
			separator={<SeparatorIcon />}
		>
			{tech.map((el) => (
				<li key={el}>{el}</li>
			))}
		</Separated>
	);
};

const SeparatorIcon = tw(RxCross2)`
	text-xs
	text-accent
`;

export default ProjectTechStack;
