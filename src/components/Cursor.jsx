import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const Cursor = () => {
	const cursorInner = useRef(null);
	const cursorOuter = useRef(null);
	const mousePos = useRef({ clientX: 0, clientY: 0 });
	const [hover, setHover] = useState(false);
	const [hide, setHide] = useState(false);

	/**
	 * Lerp
	 * @param {number} start
	 * @param {number} end
	 * @param {number} value
	 * @returns {number}
	 */
	const lerp = useCallback((start, end, value) => (1 - value) * start + value * end, []);

	/**
	 * Moves an alement smoothly using lerp
	 * @param {React.MutableRefObject} ref - reference to the element
	 * @param {number} speed - movement speed between 0 and 1
	 * @returns {() => void}
	 */
	const moveSmooth = useCallback(
		(ref, speed) => () => {
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
