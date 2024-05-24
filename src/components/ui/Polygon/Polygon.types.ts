import { HTMLAttributes } from 'react';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

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

	getPoints?: PolygonPointsFactory;
};

export type PolygonVariant = 'filled' | 'outline' | 'dashed';

export type PolygonColor = keyof Omit<
	typeof tailwindConfig.theme.colors,
	keyof DefaultColors
>;

export type PolygonPointsFactory = (
	width: number,
	height: number,
) => PolygonPoints;

export type PolygonPoints = [number, number][];
