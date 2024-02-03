import { detect, fromNavigator, fromStorage } from '@lingui/detect-locale';
import config from '@root/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = resolveConfig(config);

export const getLanguage = () => detect(fromStorage('lang'), fromNavigator());
