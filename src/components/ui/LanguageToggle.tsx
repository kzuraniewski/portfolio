import React, { forwardRef, HTMLAttributes } from 'react';

import cn from '@/lib/cn';
import useLocale from '@/hooks/useLocale';

export type LanguageToggleProps = Omit<
	HTMLAttributes<HTMLButtonElement>,
	'children'
>;

const LanguageToggle = forwardRef<HTMLButtonElement, LanguageToggleProps>(
	({ className, ...props }, ref) => {
		const { activeLocale, setLocale } = useLocale();

		const switchLocale = () => {
			const newLocale = activeLocale === 'en-US' ? 'pl-PL' : 'en-US';
			setLocale(newLocale);
		};

		const label = activeLocale?.split('-')[0].toUpperCase();

		return (
			<button
				ref={ref}
				className={cn('transition-colors hover:text-accent', className)}
				onClick={switchLocale}
				{...props}
			>
				{label}
			</button>
		);
	},
);
LanguageToggle.displayName = 'LanguageToggle';

export default LanguageToggle;
