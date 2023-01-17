import createFastContext from './createFastContext';

const { Provider: AppContextProvider, useStore } = createFastContext({
	currentSectionIndex: 0,
});

export { AppContextProvider, useStore };
