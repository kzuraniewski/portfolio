import React, { HTMLAttributes } from 'react';

import cn from '@/lib/cn';

export type DividerColor = 'secondary' | 'accent';

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
	vertical?: boolean;

	/**
	 * @default 'secondary'
	 */
	color?: DividerColor;
};

// TODO: change to default export

export const Divider = ({
	vertical = false,
	color = 'secondary',
	className,
	...props
}: DividerProps) => {
	return (
		<div
			className={cn(
				'border-dashed border-secondary',
				borderColorMap[color],
				{ 'border-b-2': !vertical },
				{ 'h-10 w-fit border-r-2': vertical },
				className,
			)}
			{...props}
		/>
	);
};

const borderColorMap = {
	secondary: 'border-secondary',
	accent: 'border-accent',
} satisfies Record<DividerColor, string>;
