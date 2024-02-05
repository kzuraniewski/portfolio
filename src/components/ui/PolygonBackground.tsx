import React, { forwardRef, HTMLAttributes, useEffect, useState } from 'react';

import cn from '@/lib/cn';
import { tailwindConfig } from '@/lib/util';
import useEventActivatedValue from '@/hooks/useEventActivatedValue';
import useForwardedRef from '@/hooks/useForwardedRef';

const BORDER_RADIUS = 1;

export type PolygonPoints = [number, number][];

export type PolygonPointsFactory = (
	width: number,
	height: number,
) => PolygonPoints;

export type PolygonPadding =
	| number
	| [number]
	| [number, number]
	| [number, number, number]
	| [number, number, number, number];

export type PolygonVariant = 'filled' | 'outline' | 'dashed';

type BackgroundAttributes = {
	viewBox: string;
	points: string;
	width: number;
	height: number;
};

const getDefaultPoints: PolygonPointsFactory = (width, height) => [
	[0, 0],
	[width, 0],
	[width, height],
	[0, height],
];

const colors = tailwindConfig.theme.colors;

export type PolygonColor = keyof typeof colors;

// TODO: support `as` prop
export type PolygonBackgroundProps = HTMLAttributes<HTMLDivElement> & {
	/**
	 * @default 'filled'
	 */
	variant?: PolygonVariant;

	/**
	 * @default 'secondary'
	 */
	color?: PolygonColor;

	/**
	 * Order as in CSS `padding` shorthand property
	 */
	padding?: PolygonPadding;

	rotation?: number | string;

	getPoints?: PolygonPointsFactory;
};

const PolygonBackground = forwardRef<HTMLDivElement, PolygonBackgroundProps>(
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
		const [attributes, setAttributes] = useState<BackgroundAttributes>();

		const appliedRotation = useEventActivatedValue(() => {
			if (!rotation) return null;

			if (typeof rotation === 'string') return rotation;
			return rotation + 'deg';
		}, 'load');

		const strokeWidth = 2 * BORDER_RADIUS;
		const color = colors[colorName];

		const updatePolygonSize = () => {
			const { width, height } = rootRef.current.getBoundingClientRect();

			// project smaller point map over viewBox expanded by strokeWidth
			// to prevent clipping due to stroke overflowing
			const points = getPoints(width - strokeWidth, height - strokeWidth)
				.map(([x, y]) => {
					return `${x + BORDER_RADIUS}, ${y + BORDER_RADIUS}`;
				})
				.join(' ');

			const viewBox = [0, 0, width, height].join(' ');

			setAttributes({ viewBox, points, width, height });
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
PolygonBackground.displayName = 'PolygonBackground';

const parsePolygonPadding = (padding: PolygonPadding) => {
	return Array.isArray(padding)
		? padding.map((value) => value + 'px').join(' ')
		: padding + 'px';
};

export default PolygonBackground;
