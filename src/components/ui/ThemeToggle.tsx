import React, { HTMLAttributes, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { Button } from '@/components/ui/Button';
import { getTheme, setTheme } from '@/lib/theme';

export type ThemeToggleProps = HTMLAttributes<HTMLButtonElement>;

const ThemeToggle = (props: ThemeToggleProps) => {
	const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');

	const changeTheme = () => {
		setTheme(isDarkMode ? 'light' : 'dark');
		setIsDarkMode(!isDarkMode); // purposefully omitted callback
	};

	return (
		<Button icon onClick={changeTheme} {...props}>
			{isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
		</Button>
	);
};

export default ThemeToggle;
