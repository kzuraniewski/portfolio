import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { Button } from '@/components/ui/Button';
import { getTheme, setTheme } from '@/lib/theme';

const ThemeToggle = () => {
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

export default ThemeToggle;
