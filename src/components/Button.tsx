import cn from 'classnames';
import React from 'react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonSize = 'normal' | 'big';

export type ButtonVariant = 'default' | 'primary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	/** @default 'default' */
	variant?: ButtonVariant;
	/** @default 'normal' */
	size?: ButtonSize;
	href?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ variant = 'default', size = 'normal', href, className, ...props },
		ref
	) => {
		return React.createElement(href ? 'a' : 'button', {
			// prettier-ignore
			className: cn(
				'px-4 py-2 text-lg leading-none transition-colors border rounded-sm text-light hover:text-primary hover:no-underline',
				{ 'border-light hover:bg-light': variant === 'default' },
				{ 'text-accent border-accent hover:bg-accent': variant === 'primary' },
				{ 'px-6 py-3': size === 'big' },
				className
			),
			href,
			ref,
			...props,
		});
	}
);

export type IconButtonProps = ButtonProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{ variant = 'default', size = 'normal', href, className, ...props },
		ref
	) => {
		return React.createElement(href ? 'a' : 'button', {
			className: cn(
				'block text-light hover:text-accent w-6 h-6 [&>svg]:w-full [&>svg]:h-full [&>svg]:transition-colors',
				{ 'w-8 h-8': size === 'big' },
				className
			),
			href,
			ref,
			...props,
		});
	}
);
