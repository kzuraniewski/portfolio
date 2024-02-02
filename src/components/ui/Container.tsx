import React, { forwardRef, HTMLAttributes } from 'react';

import cn from '@/lib/cn';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn('container max-w-screen-xl', className)}
				{...props}
			></div>
		);
	},
);
Container.displayName = 'Container';

export default Container;