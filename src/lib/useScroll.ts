import { useEffect, useRef } from 'react';

const DEFAULT_OFFSET = 1;

export type ScrollDirection = 'up' | 'down';

export type ScrollHandler = (direction: ScrollDirection) => void;

export type UseScrollOptions = {
	offset?: number;
};

export default function useScroll(
	handler: ScrollHandler,
	options: UseScrollOptions = {}
) {
	const { offset = DEFAULT_OFFSET } = options;

	const previousY = useRef(0);

	const getScrollDirection = (): ScrollDirection => {
		// window.scrollY cannot be equal to previousY
		return window.scrollY > previousY.current ? 'down' : 'up';
	};

	const hasSurpassedOffset = () => {
		return Math.abs(window.scrollY - previousY.current) > offset;
	};

	const handleScroll = () => {
		if (!hasSurpassedOffset()) return;

		const direction = getScrollDirection();
		handler(direction);
		previousY.current = window.scrollY;
	};

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	}, []);
}
