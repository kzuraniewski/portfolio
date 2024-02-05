import React, { AnchorHTMLAttributes } from 'react';

import cn from '@/lib/cn';

export type CornerBannerProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const CornerBanner = ({ className, ...props }: CornerBannerProps) => {
	return (
		<a
			className={cn(
				'fixed bottom-0 left-0 w-96 origin-[center_100px] -translate-x-1/2 -translate-y-[50px] rotate-45 bg-accent py-3 text-center font-bold uppercase text-on-accent hover:no-underline',
				className,
			)}
			{...props}
		/>
	);
};
