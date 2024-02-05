import { ForwardedRef, useEffect, useRef } from 'react';

const useForwardedRef = <T>(
	forwardedRef: ForwardedRef<T>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	initialValue: any = null,
) => {
	const targetRef = useRef<T>(initialValue);

	useEffect(() => {
		if (!forwardedRef) return;

		if (typeof forwardedRef === 'function') {
			forwardedRef(targetRef.current);
		} else {
			forwardedRef.current = targetRef.current;
		}
	});

	return targetRef;
};

export default useForwardedRef;
