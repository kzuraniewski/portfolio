import { useState } from 'react';

import useWindowEvent from './useWindowEvent';

/**
 * Ensures the value is `null` until specified window event is triggered
 */
const useEventActivatedValue = <T>(
	value: T | (() => T),
	event: keyof WindowEventMap,
) => {
	const [state, setState] = useState<T | null>(null);

	const getValue = () => {
		if (typeof value === 'function') return (value as () => T)();
		return value;
	};

	useWindowEvent(event, () => {
		setState(getValue());
	});

	return state;
};

export default useEventActivatedValue;
