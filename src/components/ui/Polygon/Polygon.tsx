import React, { forwardRef, useEffect, useState } from 'react';

import cn from '@/lib/cn';
import useEventActivatedValue from '@/hooks/useEventActivatedValue';
import useForwardedRef from '@/hooks/useForwardedRef';

import { PolygonProps } from './Polygon.types';
import {
	createProjectedPointsFactory,
	getDefaultPoints,
	parsePoints,
	parsePolygonPadding,
	parseRotation,
	polygonColors,
	strokeWidth,
} from './Polygon.utils';

const Polygon = forwardRef<HTMLDivElement, PolygonProps>(
	(
		{
			variant = 'filled',
			color: colorName = 'secondary',
			padding,
			rotation,
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

		const appliedRotation = useEventActivatedValue(() => {
			if (!rotation) return null;
			return parseRotation(rotation);
		}, 'load');

		const color = polygonColors[colorName];

		const updatePolygonSize = () => {
			const { width, height } = rootRef.current.getBoundingClientRect();

			const getProjectedPoints = createProjectedPointsFactory(getPoints);
			const points = getProjectedPoints(width, height);
			const parsedPoints = parsePoints(points);

			const viewBox = [0, 0, width, height].join(' ');

			setAttributes({
				viewBox,
				points: parsedPoints,
				width,
				height,
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
					rotate: appliedRotation ?? undefined,
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
							stroke={color}
							fill={color}
							fillOpacity={noFill ? 0 : 100}
							strokeDasharray={
								variant === 'dashed' ? 5 : undefined
							}
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
