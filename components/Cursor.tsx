import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const Cursor = () => {
	const cursorInner = useRef(null);
	const cursorOuter = useRef(null);
	const mousePos = useRef({ clientX: 0, clientY: 0 });
	const [hover, setHover] = useState(false);
	const [hide, setHide] = useState(false);

	const lerp = useCallback((start: number, end: number, value: number) => {
		return (1 - value) * start + value * end;
	}, []);

	/**
	 * Moves an alement smoothly using lerp
	 */
	const moveSmooth = useCallback(
		(ref: React.MutableRefObject<any>, speed: number) => () => {
			const style = ref.current.style;
			const { clientX, clientY } = mousePos.current;

			style.top = `${lerp(parseFloat(style.top) || 0, clientY, speed)}px`;
			style.left = `${lerp(parseFloat(style.left) || 0, clientX, speed)}px`;

			requestAnimationFrame(moveSmooth(ref, speed));
		},
		[lerp]
	);

	useEffect(() => {
		// update mousePos when mouse moves
		document.addEventListener('mousemove', ({ clientX, clientY }) => {
			mousePos.current = { clientX, clientY };
		});

		// update cursor positions
		requestAnimationFrame(moveSmooth(cursorInner, 0.8));
		requestAnimationFrame(moveSmooth(cursorOuter, 0.3));

		// add hover effect for given elements
		['a', 'btn'].forEach(query =>
			document.querySelectorAll(query).forEach(el => {
				el.addEventListener('mouseenter', () => setHover(true));
				el.addEventListener('mouseleave', () => setHover(false));
			})
		);

		// hide cursor when mouse is outside of window
		document.addEventListener('mouseleave', () => setHide(true));
		document.addEventListener('mouseenter', () => setHide(false));
	}, [moveSmooth]);

	return (
		<>
			<div
				ref={cursorInner}
				className={classNames('cursor', { 'cursor--hover': hover, 'cursor--hidden': hide })}
			/>
			<div
				ref={cursorOuter}
				className={classNames('cursor cursor--outer', {
					'cursor--hover': hover,
					'cursor--hidden': hide,
				})}
			/>
		</>
	);
};

export default Cursor;
