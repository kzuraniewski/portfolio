import _ from 'lodash';
import { useEffect, useRef } from 'react';

const SYNC_DELAY_MS = 100;

export type ScrollDirection = 'up' | 'down';

export type ScrollHandler = (direction: ScrollDirection) => void;

export default function useScroll(handler: ScrollHandler) {
	const previousY = useRef(0);

	const getScrollDirection = (): ScrollDirection => {
		// window.scrollY cannot be equal to previousY
		return window.scrollY > previousY.current ? 'down' : 'up';
	};

	const handleScroll = () => {
		const direction = getScrollDirection();
		handler(direction);
		previousY.current = window.scrollY;
	};

	useEffect(() => {
		const event = _.throttle(handleScroll, SYNC_DELAY_MS);
		document.addEventListener('scroll', event);

		return () => document.removeEventListener('scroll', event);
	}, []);
}
