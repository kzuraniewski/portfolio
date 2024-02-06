import React, { forwardRef, HTMLAttributes, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import cn from '@/lib/cn';

import { IconButton } from './Button';

export type ThemeToggleProps = HTMLAttributes<HTMLDivElement>;

const ThemeToggle = forwardRef<HTMLDivElement, ThemeToggleProps>(
	({ className, ...props }, ref) => {
		const [isDarkMode, setIsDarkMode] = useState(false);

		const changeTheme = () => {
			const root = document.documentElement;
			root.classList.toggle('dark');
			setIsDarkMode(root.classList.contains('dark'));
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
