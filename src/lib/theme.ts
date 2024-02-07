export const themes = ['light', 'dark'] as const;

export type Theme = (typeof themes)[number];

export const defaultTheme: Theme = 'light';

export const isTheme = (theme: string): theme is Theme => {
	return (themes as unknown as string[]).includes(theme);
};

export const getTheme = () => {
	const presentTheme = themes.find((theme) =>
		document.documentElement.classList.contains(theme),
	);

	return presentTheme ?? defaultTheme;
};

export const setTheme = (theme: Theme) => {
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add(theme);
	localStorage.setItem('theme', theme);
};

export const setupTheme = () => {
	const storedTheme = localStorage.getItem('theme');

	if (!storedTheme || !isTheme(storedTheme)) {
		setTheme(defaultTheme);
		return;
	}

	setTheme(storedTheme);
};
