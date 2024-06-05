import { HTMLAttributes } from 'react';

import tw from '@/lib/tw';
import useLocale from '@/hooks/useLocale';

export type LanguageToggleProps = Omit<
	HTMLAttributes<HTMLButtonElement>,
	'children'
>;

export const LanguageToggle = (props: LanguageToggleProps) => {
	const { activeLocale, setLocale } = useLocale();

	const switchLocale = () => {
		const newLocale = activeLocale === 'en-US' ? 'pl-PL' : 'en-US';
		setLocale(newLocale);
	};

	const label = activeLocale?.split('-')[0].toUpperCase();

	return (
		<Root onClick={switchLocale} {...props}>
			{label}
		</Root>
	);
};

const Root = tw.button`
	transition-colors

	hover:text-accent
`;
