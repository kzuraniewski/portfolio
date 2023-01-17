import { useEffect } from 'react';
import _ from 'lodash';

const SYNC_DELAY = 100;

export default function useScroll(callback: () => void) {
	useEffect(() => {
		const event = _.throttle(callback, SYNC_DELAY);
		document.addEventListener('scroll', event);

		return () => document.removeEventListener('scroll', event);
	}, []);
}
