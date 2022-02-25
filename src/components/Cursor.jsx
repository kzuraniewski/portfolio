import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const SPEED = 0.3;

const Cursor = () => {
	const cursor = useRef(null);
	const cursorSmooth = useRef(null);
	const mousePos = useRef({ pageX: 0, pageY: 0 });
	const [hover, setHover] = useState(false);

	const lerp = (start, end, value) => (1 - value) * start + value * end;

	const moveSmoothCursor = () => {
		const style = cursorSmooth.current.style;
		const { pageX, pageY } = mousePos.current;
		const topParsed = parseFloat(style.top),
			leftParsed = parseFloat(style.left);

		style.top = `${lerp(topParsed, pageY, SPEED)}px`;
		style.left = `${lerp(leftParsed, pageX, SPEED)}px`;

		requestAnimationFrame(moveSmoothCursor);
	};

	useEffect(() => {
		document.addEventListener('mousemove', ({ pageX, pageY }) => {
			// update normal cursor's position
			cursor.current.style.top = `${pageY}px`;
			cursor.current.style.left = `${pageX}px`;

			// update mousePos for smooth movement updates
			mousePos.current = { pageX, pageY };
		});

		// update smooth cursor's position
		requestAnimationFrame(moveSmoothCursor);

		// add hover effect for given elements
		['a', 'btn'].forEach(query =>
			document.querySelectorAll(query).forEach(el => {
				el.addEventListener('mouseenter', () => setHover(true));
				el.addEventListener('mouseleave', () => setHover(false));
			})
		);
	}, []);

	return (
		<>
			<div ref={cursor} className={classNames('cursor', { 'cursor--hover': hover })} />
			<div
				ref={cursorSmooth}
				style={{ top: '0px', left: '0px' }}
				className={classNames('cursor cursor--smooth', { 'cursor--hover': hover })}
			/>
		</>
	);
};

export default Cursor;
