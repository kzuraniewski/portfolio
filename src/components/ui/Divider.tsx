import React, { forwardRef, HTMLAttributes } from 'react';

import cn from '@/lib/cn';
import { tailwindConfig } from '@/lib/util';

export type DividerColor = keyof typeof tailwindConfig.theme.colors;

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
	vertical?: boolean;

	/**
	 * @default 'secondary'
	 */
	color?: DividerColor;
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ vertical = false, color = 'secondary', className, ...props }, ref) => {
		return (
			<div
				className={cn(
					'border-dashed border-secondary',
					borderColorMap[color],
					{ 'border-b-2': !vertical },
					{ 'h-10 w-fit border-r-2': vertical },
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Divider.displayName = 'Divider';

const borderColorMap = {
	primary: 'border-primary',
	secondary: 'border-secondary',
	accent: 'border-accent',
	light: 'border-light',
} satisfies Record<DividerColor, string>;
