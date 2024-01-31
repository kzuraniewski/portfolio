import { DependencyList, useEffect } from 'react';

const useWindowEvent = (
	eventName: keyof WindowEventMap,
	callback: () => void,
	deps: DependencyList = []
) => {
	useEffect(() => {
		window.addEventListener(eventName, callback);

		return () => {
			window.removeEventListener(eventName, callback);
		};
	}, deps);
};

export default useWindowEvent;
