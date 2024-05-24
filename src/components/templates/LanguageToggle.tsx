import { HTMLAttributes } from 'react';

import cn from '@/lib/cn';
import useLocale from '@/hooks/useLocale';

export type LanguageToggleProps = Omit<
	HTMLAttributes<HTMLButtonElement>,
	'children'
>;

export const LanguageToggle = ({
	className,
	...props
}: LanguageToggleProps) => {
	const { activeLocale, setLocale } = useLocale();

	const switchLocale = () => {
		const newLocale = activeLocale === 'en-US' ? 'pl-PL' : 'en-US';
		setLocale(newLocale);
	};

	const label = activeLocale?.split('-')[0].toUpperCase();

	return (
		<button
			className={cn('transition-colors hover:text-accent', className)}
			onClick={switchLocale}
			{...props}
		>
			{label}
		</button>
	);
};
