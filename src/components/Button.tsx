import cn from 'classnames';
import React from 'react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonVariant = 'default' | 'big';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	href?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = 'default', href, className, ...props }, ref) => {
		return React.createElement(href ? 'a' : 'button', {
			className: cn(
				'px-4 py-2 text-lg leading-none transition-colors border rounded-sm text-accent border-accent hover:bg-accent hover:border-accent hover:text-primary hover:no-underline',
				{ 'px-6 py-3': variant === 'big' },
				className
			),
			href,
			ref,
			...props,
		});
	}
);
