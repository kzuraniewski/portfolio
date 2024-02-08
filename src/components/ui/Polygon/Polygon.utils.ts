import {
	PolygonColor,
	PolygonPadding,
	PolygonPoints,
	PolygonPointsFactory,
} from './Polygon.types';

export const borderRadius = 1;
export const strokeWidth = 2 * borderRadius;

export const getDefaultPoints: PolygonPointsFactory = (width, height) => [
	[0, 0],
	[width, 0],
	[width, height],
	[0, height],
];

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

export const colorStrokeStyleMap = {
	primary: 'fill-primary stroke-primary',
	secondary: 'fill-secondary stroke-secondary',
	accent: 'fill-accent stroke-accent',
} satisfies Record<PolygonColor, string>;
