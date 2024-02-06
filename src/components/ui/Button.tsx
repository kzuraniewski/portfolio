import React, {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	forwardRef,
} from 'react';
import cn from 'classnames';

export type ButtonSize = 'normal' | 'big';

export type ButtonVariant = 'default' | 'primary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	/** @default 'default' */
	variant?: ButtonVariant;
	/** @default 'normal' */
	size?: ButtonSize;
	href?: string;

	// FIXME: infer anchor props when href is present instead
	target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};

// FIXME: Props type needs to be conditional whether it is a button or an anchor
// TODO: Create a ButtonBase that renders a or button and appends target="_blank" with rel="noreferrer" when external link

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ variant = 'default', size = 'normal', href, className, ...props },
		ref,
	) => {
		return React.createElement(href ? 'a' : 'button', {
			// prettier-ignore
			className: cn(
				'px-4 py-2 w-fit leading-none transition-colors border-2 rounded-sm text-accent hover:text-primary hover:no-underline uppercase tracking-wide',
				{ 'border-light hover:bg-light': variant === 'default' },
				{ 'text-accent border-accent hover:bg-accent hover:text-on-accent': variant === 'primary' },
				{ 'px-6 py-3': size === 'big' },
				className
			),
			href,
			ref,
			...props,
		});
	},
);
Button.displayName = 'Button';

export type IconButtonProps = Omit<ButtonProps, 'variant'>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ size = 'normal', href, className, ...props }, ref) => {
		return React.createElement(href ? 'a' : 'button', {
			className: cn(
				'block text-inherit hover:text-accent w-6 h-6 [&>svg]:w-full [&>svg]:h-full [&>svg]:transition-colors',
				{ 'w-8 h-8': size === 'big' },
				className,
			),
			href,
			ref,
			...props,
		});
	},
);
IconButton.displayName = 'IconButton';
