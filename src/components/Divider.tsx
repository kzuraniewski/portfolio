import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

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
					{ 'border-r-2 h-full w-fit': vertical },
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
