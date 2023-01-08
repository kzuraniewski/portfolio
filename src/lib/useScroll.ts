import { useEffect } from 'react';
import throttle from 'lodash.throttle';

const SYNC_DELAY = 100;

export default function useScroll(callback: () => void) {
	const event = throttle(callback, SYNC_DELAY);

	useEffect(() => {
		document.addEventListener('scroll', event);

		return () => document.removeEventListener('scroll', event);
	}, [event]);
}
