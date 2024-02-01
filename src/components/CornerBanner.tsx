import { AnchorHTMLAttributes } from 'react';

import cn from '@/lib/cn';

export type CornerBannerProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const CornerBanner = ({ className, ...props }: CornerBannerProps) => {
	return (
		<a
			className={cn(
				'fixed bottom-0 left-0 py-3 font-bold text-center uppercase rotate-45 -translate-x-1/2 hover:no-underline -translate-y-[50px] origin-[center_100px] w-96 bg-accent text-primary',
				className,
			)}
			{...props}
		/>
	);
};
