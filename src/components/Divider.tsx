import React, { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
	vertical?: boolean;
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ vertical = false, className, ...props }, ref) => {
		return (
			<div
				className={cn(
					'border-dashed border-secondary',
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
