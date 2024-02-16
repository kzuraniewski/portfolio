import React from 'react';
import { PolymorphicProps } from '@/types';

import cn from '@/lib/cn';

export type ButtonSize = 'normal' | 'big';

export type ButtonVariant = 'default' | 'primary';

export type ButtonProps<RootElement extends React.ElementType> =
	PolymorphicProps<
		{
			/** @default 'default' */
			variant?: ButtonVariant;
			/** @default 'normal' */
			size?: ButtonSize;
			/** @default false */
			icon?: boolean;
		},
		RootElement
	>;

export const Button = <RootElement extends React.ElementType = 'button'>({
	as,
	variant = 'default',
	size = 'normal',
	icon = false,
	className,
	...props
}: ButtonProps<RootElement>) => {
	const RootElement = as ?? 'button';

	return (
		<RootElement
			// prettier-ignore
			className={cn(
				{ 'hover:text-primary w-fit rounded-sm border-2 px-4 py-2 uppercase leading-none tracking-wide text-accent transition-colors hover:no-underline': !icon },
				{ 'border-light hover:bg-light': variant === 'default' },
				{ 'border-accent text-accent hover:bg-accent hover:text-on-accent': variant === 'primary' },
				{ 'px-6 py-3': !icon && size === 'big' },
				{ 'block text-inherit hover:text-accent w-6 h-6 [&>svg]:w-full [&>svg]:h-full [&>svg]:transition-colors': icon },
				{ 'w-8 h-8': icon && size == 'big' },
				className,
			)}
			{...props}
		/>
	);
};
