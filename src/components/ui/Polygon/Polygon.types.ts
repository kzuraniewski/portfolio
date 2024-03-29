import { HTMLAttributes } from 'react';

import { tailwindConfig } from '@/lib/util';

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

	getPoints?: PolygonPointsFactory;
};

export type PolygonVariant = 'filled' | 'outline' | 'dashed';

export type PolygonColor = keyof typeof tailwindConfig.theme.colors;

export type PolygonPadding =
	| number
	| [number]
	| [number, number]
	| [number, number, number]
	| [number, number, number, number];

export type PolygonPointsFactory = (
	width: number,
	height: number,
) => PolygonPoints;

export type PolygonPoints = [number, number][];
