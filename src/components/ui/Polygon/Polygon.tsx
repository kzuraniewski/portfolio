import React, { forwardRef, useEffect, useState } from 'react';

import cn from '@/lib/cn';
import useForwardedRef from '@/hooks/useForwardedRef';

import { PolygonProps } from './Polygon.types';
import {
	colorClassNameMap,
	createProjectedPointsFactory,
	getDefaultPoints,
	parsePoints,
	parsePolygonPadding,
	strokeWidth,
} from './Polygon.utils';

// TODO: verify if padding prop necessary

const Polygon = forwardRef<HTMLDivElement, PolygonProps>(
	(
		{
			variant = 'filled',
			color = 'secondary',
			padding,
			getPoints = getDefaultPoints,
			className,
			style,
			children,
			...props
		},
		ref,
	) => {
		const rootRef = useForwardedRef(ref);
		const [attributes, setAttributes] = useState<{
			viewBox: string;
			points: string;
			width: number;
			height: number;
		}>();

		const updatePolygonSize = () => {
			const { offsetWidth, offsetHeight } = rootRef.current;

			const getProjectedPoints = createProjectedPointsFactory(getPoints);
			const points = getProjectedPoints(offsetWidth, offsetHeight);
			const parsedPoints = parsePoints(points);

			const viewBox = [0, 0, offsetWidth, offsetHeight].join(' ');

			setAttributes({
				viewBox,
				points: parsedPoints,
				width: offsetWidth,
				height: offsetHeight,
			});
		};

		useEffect(() => {
			if (!rootRef.current) return;

			const resizeObserver = new ResizeObserver(updatePolygonSize);
			resizeObserver.observe(rootRef.current);

			return () => resizeObserver.disconnect();
		}, []);

		const noFill = variant === 'dashed' || variant === 'outline';

		return (
			<div
				ref={rootRef}
				className={cn('relative w-fit', className)}
				style={{
					padding: padding && parsePolygonPadding(padding),
					...style,
				}}
				{...props}
			>
				{attributes && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox={attributes.viewBox}
						preserveAspectRatio="none"
						width={attributes.width}
						height={attributes.height}
						className="absolute left-0 top-0"
					>
						<polygon
							points={attributes.points}
							strokeLinejoin="round"
							strokeWidth={`${strokeWidth}px`}
							fillOpacity={noFill ? 0 : 100}
							strokeDasharray={
								variant === 'dashed' ? 5 : undefined
							}
							className={colorClassNameMap[color]}
						/>
					</svg>
				)}

				<div className="relative z-10">{children}</div>
			</div>
		);
	},
);
Polygon.displayName = 'Polygon';

export default Polygon;
