import React, { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import cn from '@/lib/cn';
import useForwardedRef from '@/hooks/useForwardedRef';

import { PolygonProps } from './Polygon.types';
import {
	colorStrokeStyleMap,
	createProjectedPointsFactory,
	getDefaultPoints,
	parsePoints,
	parsePolygonPadding,
	strokeWidth,
} from './Polygon.utils';

// TODO: verify if padding prop necessary

const Polygon = forwardRef<HTMLDivElement, PolygonProps>((props, ref) => {
	const {
		variant = 'filled',
		color = 'secondary',
		padding,
		getPoints = getDefaultPoints,
		className,
		style,
		children,
		...other
	} = props;

	const rootRef = useForwardedRef(ref);
	const [viewObserverRef, inView] = useInView({
		triggerOnce: true,
		rootMargin: '-100px',
	});
	const maskRef = useRef<SVGPolygonElement>(null);
	const maskId = useId();
	const [points, setPoints] = useState<string>();

	const updatePoints = () => {
		if (!rootRef.current) return;
		const { offsetWidth, offsetHeight } = rootRef.current;

		const getProjectedPoints = createProjectedPointsFactory(getPoints);
		const points = getProjectedPoints(offsetWidth, offsetHeight);
		const parsedPoints = parsePoints(points);

		setPoints(parsedPoints);
	};

	useEffect(() => {
		if (!rootRef.current) return;

		const resizeObserver = new ResizeObserver(updatePoints);
		resizeObserver.observe(rootRef.current);

		return () => resizeObserver.disconnect();
	}, []);

	const noFill = variant === 'dashed' || variant === 'outline';
	const shouldAnimate = noFill && inView;

	const strokeLength = maskRef.current?.getTotalLength();
	const rootWidth = rootRef.current?.offsetWidth;
	const rootHeight = rootRef.current?.offsetHeight;
	const viewBox =
		rootWidth && rootHeight
			? [0, 0, rootWidth, rootHeight].join(' ')
			: undefined;

	return (
		<div
			ref={rootRef}
			className={cn('relative w-fit', className)}
			style={{
				padding: padding && parsePolygonPadding(padding),
				...style,
			}}
			{...other}
		>
			<svg
				ref={viewObserverRef}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={viewBox}
				preserveAspectRatio="none"
				width={rootWidth}
				height={rootHeight}
				className="absolute left-0 top-0"
			>
				<defs>
					<mask id={maskId} maskUnits="userSpaceOnUse">
						<polygon
							ref={maskRef}
							points={points}
							strokeWidth={`${strokeWidth}px`}
							stroke="#fff"
							strokeDasharray={strokeLength}
							strokeDashoffset={strokeLength}
							className="transition-dashoffset duration-400 ease-steppy"
							style={{
								strokeDashoffset: shouldAnimate
									? 0
									: strokeLength,
							}}
						/>
					</mask>
				</defs>

				<g mask={noFill ? `url(#${maskId})` : undefined}>
					<polygon
						points={points}
						strokeLinejoin="round"
						strokeWidth={`${strokeWidth}px`}
						fillOpacity={noFill ? 0 : 100}
						strokeDasharray={variant === 'dashed' ? 5 : undefined}
						className={colorStrokeStyleMap[color]}
					/>
				</g>
			</svg>

			<div className="relative z-10">{children}</div>
		</div>
	);
});
Polygon.displayName = 'Polygon';

export default Polygon;
