import { HTMLAttributes } from 'react';

import cn from '@/lib/cn';

export type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = ({ children, className, ...props }: ListItemProps) => {
	return (
		<li
			className={cn(
				"relative -left-2 mb-1 marker:text-accent marker:content-['-']",
				className,
			)}
			{...props}
		>
			<span className="relative left-2">{children}</span>
		</li>
	);
};
