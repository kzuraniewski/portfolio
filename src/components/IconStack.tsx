import { Divider } from '@/components/Divider';
import { IndexSelector, Separated } from '@/components/Separated';
import cn from '@/lib/cn';
import { TechStack } from '@/lib/data';
import { HTMLAttributes, forwardRef } from 'react';
import PolygonBackground from './PolygonBackground';

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
		return (
			<Separated
				ref={ref}
				className={cn(
					'grid items-center grid-cols-1 mx-auto list-none w-fit justify-items-center gap-y-10 gap-x-1',
					{ 'grid-cols-3': stack.length === 2 },
					{ 'grid-cols-5': stack.length >= 3 },
					className
				)}
				separator={<Divider vertical className="h-8" />}
				indexSelector={gridIndexSelector}
				{...props}
			>
				{stack.map(({ icon, highlighted }) => (
					<li key={icon.src} className="relative">
						<img src={icon.src} alt={icon.alt} className="w-12" />

						{highlighted && (
							<PolygonBackground
								background="accent"
								className="absolute w-6 h-6 -top-1 -right-1"
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
	}
);

export default IconStack;
