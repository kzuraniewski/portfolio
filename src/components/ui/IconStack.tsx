import { HTMLAttributes } from 'react';
import { useLingui } from '@lingui/react';

import { Divider, IndexSelector, Polygon, Separated } from '@/components/ui';
import cn from '@/lib/cn';
import { TechStack } from '@/lib/data';

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
			separator={<Divider vertical color="accent" className="h-8" />}
			indexSelector={gridIndexSelector}
			{...props}
		>
			{stack.map(({ icon, highlighted }) => (
				<li key={icon.src} className="relative">
					<img src={icon.src} alt={_(icon.alt)} className="w-12" />

					{highlighted && (
						<Polygon
							color="accent"
							getPoints={(width, height) => [
								[height - 3, 0],
								[0, 6],
								[height, width],
							]}
							className="absolute -right-1 -top-1 h-3 w-3"
						/>
					)}
				</li>
			))}
		</Separated>
	);
};
