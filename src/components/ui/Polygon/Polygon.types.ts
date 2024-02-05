import { HTMLAttributes } from 'react';

import { polygonColors } from './Polygon.utils';

// TODO: support `as` prop
export type PolygonProps = HTMLAttributes<HTMLDivElement> & {
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

export type PolygonColor = keyof typeof polygonColors;
