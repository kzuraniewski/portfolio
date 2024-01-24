import cn from 'classnames';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export type ButtonVariant = 'default' | 'big';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = 'default', className, ...props }, ref) => {
		return (
			<button
				className={cn(
					'px-4 py-2 text-lg leading-none transition-colors border rounded-md text-mustard border-mustard hover:bg-mustard hover:border-mustard hover:text-charcoal',
					{ 'px-6 py-3': variant === 'big' },
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
