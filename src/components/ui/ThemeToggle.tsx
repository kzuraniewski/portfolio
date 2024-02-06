import React, { forwardRef, HTMLAttributes, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import cn from '@/lib/cn';
import { getTheme, setTheme } from '@/lib/theme';

import { IconButton } from './Button';

export type ThemeToggleProps = HTMLAttributes<HTMLDivElement>;

const ThemeToggle = forwardRef<HTMLDivElement, ThemeToggleProps>(
	({ className, ...props }, ref) => {
		const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');

		const changeTheme = () => {
			setTheme(isDarkMode ? 'light' : 'dark');
			setIsDarkMode(!isDarkMode); // purposefully omitted callback
		};

		return (
			<div ref={ref} className={cn('', className)} {...props}>
				<IconButton onClick={changeTheme}>
					{isDarkMode ? (
						<MdOutlineDarkMode />
					) : (
						<MdOutlineLightMode />
					)}
				</IconButton>
			</div>
		);
	},
);
ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
