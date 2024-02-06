import { i18n } from '@lingui/core';
import { detect, fromNavigator, fromStorage } from '@lingui/detect-locale';
import linguiConfig from '@root/lingui.config';

export type Locale = (typeof linguiConfig.locales)[number];

export const DEFAULT_LOCALE: Locale = 'en-US';

/**
 * Load messages for requested locale and activate it.
 */
export const loadCatalog = async (locale: Locale) => {
	const catalog = await import(`./locales/${locale}.po`);
	i18n.loadAndActivate({ locale, messages: catalog.messages });
};

export const isValidLocale = (locale: string): locale is Locale => {
	return (linguiConfig.locales as string[]).indexOf(locale) !== -1;
};

/**
 * Returns current locale. Fallbacks to default locale when
 * current is invalid or not found
 */
export const getActiveLocale = (): Locale => {
	const detectedLocale = detect(fromStorage('lang'), fromNavigator());

	if (!detectedLocale || !isValidLocale(detectedLocale)) {
		return DEFAULT_LOCALE;
	}

	return detectedLocale;
};
