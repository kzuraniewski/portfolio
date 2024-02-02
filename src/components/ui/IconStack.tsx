import React, { forwardRef, HTMLAttributes } from 'react';
import { useLingui } from '@lingui/react';

import { Divider } from '@/components/ui/Divider';
import PolygonBackground from '@/components/ui/PolygonBackground';
import { IndexSelector, Separated } from '@/components/ui/Separated';
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

const IconStack = forwardRef<HTMLDivElement, IconStackProps>(
	({ stack, className, ...props }, ref) => {
		const { _ } = useLingui();

		return (
			<Separated
				ref={ref}
				className={cn(
					'mx-auto grid w-fit list-none grid-cols-1 items-center justify-items-center gap-x-1 gap-y-10',
					{ 'grid-cols-3': stack.length === 2 },
					{ 'grid-cols-5': stack.length >= 3 },
					className,
				)}
				separator={<Divider vertical className="h-8" />}
				indexSelector={gridIndexSelector}
				{...props}
			>
				{stack.map(({ icon, highlighted }) => (
					<li key={icon.src} className="relative">
						<img
							src={icon.src}
							alt={_(icon.alt)}
							className="w-12"
						/>

						{highlighted && (
							<PolygonBackground
								background="accent"
								className="absolute -right-1 -top-1 h-6 w-6"
								// TODO: improve shape
								getPoints={(width, height) => [
									[0, 1],
									[7, 0],
									[width, height - 8],
									[width - 1, height],
								]}
							/>
						)}
					</li>
				))}
			</Separated>
		);
	},
);
IconStack.displayName = 'IconStack';

export default IconStack;
