import { HTMLAttributes, forwardRef } from 'react';
import cn from '@/lib/cn';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn('container max-w-screen-lg', className)}
				{...props}
			></div>
		);
	}
);

export default Container;
