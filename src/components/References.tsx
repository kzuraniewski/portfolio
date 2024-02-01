import React, { HTMLAttributes, ReactNode } from 'react';

import cn from '@/lib/cn';

export type ReferencesProps = HTMLAttributes<HTMLUListElement>;

export const References = ({ className, children }: ReferencesProps) => {
	return (
		<ul className={cn('flex justify-center gap-8', className)}>
			{children}
		</ul>
	);
};

export type ReferenceProps = {
	href: string;
	children?: ReactNode;
};

export const Reference = ({ href, children }: ReferenceProps) => {
	return (
		<li>
			<a
				href={href}
				className="block text-light hover:text-accent [&>svg]:h-6 [&>svg]:w-6 [&>svg]:transition-colors"
			>
				{children}
			</a>
		</li>
	);
};
