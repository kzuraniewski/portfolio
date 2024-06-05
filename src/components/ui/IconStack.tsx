import { HTMLAttributes } from 'react';
import { useLingui } from '@lingui/react';

import { Divider, IndexSelector, Polygon, Separated } from '@/components/ui';
import cn from '@/lib/cn';
import { TechStack } from '@/lib/data';
import tw from '@/lib/tw';

const gridIndexSelector: IndexSelector = (index, array) => {
	return Boolean((index + 1) % 3) && index < array.length - 1;
};

export type IconStackProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> & {
	stack: TechStack;
};

export const IconStack = ({ stack, className, ...props }: IconStackProps) => {
	const { _ } = useLingui();

	return (
		<Separated
			className={cn(
				'mx-auto grid w-fit list-none grid-cols-1 items-center justify-items-center gap-x-1 gap-y-10',
				{ 'grid-cols-3': stack.length === 2 },
				{ 'grid-cols-5': stack.length >= 3 },
				className,
			)}
			separator={<IconDivider vertical color="accent" />}
			indexSelector={gridIndexSelector}
			{...props}
		>
			{stack.map(({ icon, highlighted }) => (
				<IconRoot key={icon.src}>
					<IconImage src={icon.src} alt={_(icon.alt)} />

					{highlighted && (
						<HighlightPolygon
							color="accent"
							getPoints={(width, height) => [
								[height - 3, 0],
								[0, 6],
								[height, width],
							]}
						/>
					)}
				</IconRoot>
			))}
		</Separated>
	);
};

const IconRoot = tw.li`
	relative
`;

const IconImage = tw.img`
	w-12
`;

const IconDivider = tw(Divider)`h-8`;

const HighlightPolygon = tw(Polygon)`
	w-3
	h-3
	absolute
	-right-1
	-top-1
`;
