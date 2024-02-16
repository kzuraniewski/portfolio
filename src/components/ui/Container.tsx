import React, { HTMLAttributes } from 'react';

import cn from '@/lib/cn';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = ({ className, ...props }: ContainerProps) => {
	return (
		<div
			className={cn('container max-w-screen-xl', className)}
			{...props}
		/>
	);
};

export default Container;
