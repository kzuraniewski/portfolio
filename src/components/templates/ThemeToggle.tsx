import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { getTheme, setTheme } from '@/lib/theme';

import { Button } from '@/components/ui';

export const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');

	const changeTheme = () => {
		setTheme(isDarkMode ? 'light' : 'dark');
		setIsDarkMode(!isDarkMode); // purposefully omitted callback
	};

	return (
		<Button icon onClick={changeTheme}>
			{isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
		</Button>
	);
};
