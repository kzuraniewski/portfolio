import { DependencyList, useRef } from 'react';
import useWindowEvent from './useWindowEvent';

export type ScrollDirection = 'up' | 'down';

export type ScrollHandler = (direction: ScrollDirection) => void;

export default function useScroll(
	handler: ScrollHandler,
	deps: DependencyList = []
) {
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

	useWindowEvent('scroll', handleScroll, deps);
}
