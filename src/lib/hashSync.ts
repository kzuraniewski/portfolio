import { useCallback } from 'react';
import createFastContext from './createFastContext';

const { Provider, useStore } = createFastContext({ currentSectionIndex: 0 });

function useUrlId() {
	const [currentSectionIndex, setCurrentSectionIndex] = useStore(
		(store) => store.currentSectionIndex
	);

	const setUrlHash = useCallback((id: string) => {
		window.history.pushState(null, '', `#${id}`);
		setCurrentSectionIndex({ id });
	}, []);

	return [currentSectionIndex, setUrlHash] as const;
}

// prettier-ignore
export {
	Provider as UrlIdSyncProvider,
	useUrlId,
};
