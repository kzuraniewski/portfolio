import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export type DividerProps = HTMLAttributes<HTMLDivElement>;

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(
					'my-5 border-b-2 border-dashed border-b-gunmetal',
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
