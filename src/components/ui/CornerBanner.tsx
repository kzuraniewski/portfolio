import React, { HTMLAttributes } from 'react';

import Polygon from '@/components/ui/Polygon';
import cn from '@/lib/cn';

export type CornerBannerProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	'children'
> & {
	label: string;
	href: string;

	/**
	 * @default false
	 */
	hidden?: boolean;
};

export const CornerBanner = ({
	label,
	href,
	hidden = false,
	className,
	...props
}: CornerBannerProps) => {
	return (
		<div
			className={cn(
				'fixed bottom-0 left-0 w-56 origin-[center_100px] -translate-x-1/2 -translate-y-[50px] rotate-45 opacity-100 transition-opacity duration-500',
				{ 'pointer-events-none opacity-0': hidden },
				className,
			)}
			{...props}
		>
			<Polygon
				color="accent"
				padding={[12, 0]}
				getPoints={(width, height) => [
					[0, 7],
					[width, 0],
					[width, height],
					[0, height - 7],
				]}
				className="w-full"
			>
				<a
					href={href}
					className="text-on-accent inline-block w-full text-center font-bold uppercase hover:no-underline"
				>
					{label}
				</a>
			</Polygon>
		</div>
	);
};
