import { AnchorHTMLAttributes } from 'react';

import { Polygon } from '@/components/ui';
import cn from '@/lib/cn';

export type CornerBannerProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	/**
	 * @default false
	 */
	hidden?: boolean;
};

export const CornerBanner = ({
	hidden = false,
	className,
	children,
	...props
}: CornerBannerProps) => {
	return (
		<a
			className={cn(
				'pointer-events-none fixed bottom-0 left-0 w-56 origin-[center_100px] -translate-x-1/2 -translate-y-[50px] rotate-45 opacity-0 transition-opacity duration-500',
				{ 'lg:pointer-events-auto lg:opacity-100': !hidden },
				className,
			)}
			{...props}
		>
			<Polygon
				color="accent"
				getPoints={(width, height) => [
					[0, 7],
					[width, 0],
					[width, height],
					[0, height - 7],
				]}
				className="w-full px-0 py-3"
			>
				<div className="inline-block w-full text-center font-bold uppercase text-on-accent hover:no-underline">
					{children}
				</div>
			</Polygon>
		</a>
	);
};
