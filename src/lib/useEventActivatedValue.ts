import { useEffect, useState } from 'react';

/**
 * Ensures the value is `null` until specified window event is triggered
 */
const useEventActivatedValue = <T>(
	value: T | (() => T),
	event: keyof WindowEventMap
) => {
	const [state, setState] = useState<T | null>(null);

	const getValue = () => {
		if (typeof value === 'function') return (value as () => T)();
		return value;
	};

	useEffect(() => {
		const updateState = () => {
			setState(getValue());
		};

		window.addEventListener(event, updateState);
		return () => {
			window.removeEventListener(event, updateState);
		};
	});

	return state;
};

export default useEventActivatedValue;
