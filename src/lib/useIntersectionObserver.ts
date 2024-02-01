import { RefObject, useEffect, useMemo } from 'react';

export type VisibilityChangeHandler = (isIntersecting: boolean) => void;

const useIntersectionObserver = (
	ref: RefObject<HTMLElement>,
	callback: VisibilityChangeHandler,
) => {
	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				callback(entry.isIntersecting),
			),
		[ref],
	);

	useEffect(() => {
		if (!ref.current) return () => {};

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [ref]);
};

export default useIntersectionObserver;
