import { tailwindConfig } from '@/lib/util';

import {
	PolygonPadding,
	PolygonPoints,
	PolygonPointsFactory,
	PolygonRotation,
} from './Polygon.types';

export const borderRadius = 1;
export const strokeWidth = 2 * borderRadius;

export const getDefaultPoints: PolygonPointsFactory = (width, height) => [
	[0, 0],
	[width, 0],
	[width, height],
	[0, height],
];

export const polygonColors = tailwindConfig.theme.colors;

export const parsePolygonPadding = (padding: PolygonPadding) => {
	return Array.isArray(padding)
		? padding.map((value) => value + 'px').join(' ')
		: padding + 'px';
};

/**
 * Project smaller point map over viewBox expanded by stroke width
 * to prevent clipping due to stroke overflowing
 */
export const createProjectedPointsFactory =
	(pointsFactory: PolygonPointsFactory): PolygonPointsFactory =>
	(width, height) => {
		return pointsFactory(width - strokeWidth, height - strokeWidth).map(
			([x, y]) => {
				return [x + borderRadius, y + borderRadius];
			},
		);
	};

/**
 * Parse polygon points tuple array so it can be used as a `<polygon>` attribute
 */
export const parsePoints = (points: PolygonPoints) => {
	return points.map(([x, y]) => x + ',' + y).join(' ');
};

export const parseRotation = (rotation: PolygonRotation) => {
	if (typeof rotation === 'string') return rotation;
	return rotation + 'deg';
};
