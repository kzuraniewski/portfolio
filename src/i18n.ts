import { i18n } from '@lingui/core';
import { detect, fromNavigator, fromStorage } from '@lingui/detect-locale';
import linguiConfig from '@root/lingui.config';

export type Locale = (typeof linguiConfig.locales)[number];

export const DEFAULT_LOCALE: Locale = 'en-US';

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there are
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export const loadCatalog = async (locale: Locale) => {
	const catalog = await import(`./locales/${locale}.po`);
	i18n.loadAndActivate({ locale, messages: catalog.messages });
};

export const isValidLocale = (locale: string): locale is Locale => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return linguiConfig.locales.indexOf(locale as any) !== -1;
};

export const getActiveLocale = (): Locale => {
	const detectedLocale = detect(fromStorage('lang'), fromNavigator());

	if (!detectedLocale || !isValidLocale(detectedLocale)) {
		return DEFAULT_LOCALE;
	}

	return detectedLocale;
};
