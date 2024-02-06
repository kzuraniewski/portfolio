import { useCallback } from 'react';
import { getActiveLocale, loadCatalog, Locale } from '@/i18n';

const useLocale = () => {
	const activeLocale = getActiveLocale();

	const setLocale = useCallback((locale: Locale) => {
		loadCatalog(locale);
		localStorage.setItem('lang', locale);
	}, []);

	return { activeLocale, setLocale };
};

export default useLocale;
