import { Divider } from '@/components/Divider';
import { IndexSelector, Separated } from '@/components/Separated';
import cn from '@/lib/cn';
import { Icon } from '@/lib/data';
import { HTMLAttributes, forwardRef } from 'react';

const gridIndexSelector: IndexSelector = (index, array) => {
	return Boolean((index + 1) % 3) && index < array.length - 1;
};

export type IconStackProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> & {
	icons: Icon[];
};

const IconStack = forwardRef<HTMLDivElement, IconStackProps>(
	({ icons, className, ...props }, ref) => {
		return (
			<Separated
				ref={ref}
				className={cn(
					'grid items-center grid-cols-1 mx-auto mb-20 list-none w-fit justify-items-center gap-y-10 gap-x-1',
					{ 'grid-cols-3': icons.length === 2 },
					{ 'grid-cols-5': icons.length >= 3 },
					className
				)}
				separator={<Divider vertical className="h-8" />}
				indexSelector={gridIndexSelector}
				{...props}
			>
				{icons.map(({ src, alt }) => (
					<li key={src}>
						<img src={src} alt={alt} className="w-12" />
					</li>
				))}
			</Separated>
		);
	}
);

export default IconStack;
