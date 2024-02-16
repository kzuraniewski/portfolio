import React, { forwardRef, HTMLAttributes, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import { Button } from '@/components/ui/Button';
import { getTheme, setTheme } from '@/lib/theme';

export type ThemeToggleProps = HTMLAttributes<HTMLButtonElement>;

const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
	(props, ref) => {
		const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');

		const changeTheme = () => {
			setTheme(isDarkMode ? 'light' : 'dark');
			setIsDarkMode(!isDarkMode); // purposefully omitted callback
		};

		return (
			<Button icon ref={ref} onClick={changeTheme} {...props}>
				{isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
			</Button>
		);
	},
);
ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
