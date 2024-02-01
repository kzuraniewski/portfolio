import cn from '@/lib/cn';
import useEventActivatedValue from '@/lib/useEventActivatedValue';
import useWindowEvent from '@/lib/useWindowEvent';
import { HTMLAttributes, useRef, useState } from 'react';

const DEFAULT_PADDING_X = 40;
const DEFAULT_PADDING_Y = 30;
const BORDER_RADIUS = 2;

export type PolygonPoints = [number, number][];

export type PolygonPointsFactory = (
	width: number,
	height: number
) => PolygonPoints;

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

// TODO: infer from theme
const backgroundColors = {
	primary: '#222831',
	secondary: '#393E46',
	accent: '#FFD369',
	light: '#EEEEEE',
};

// TODO: support `as` prop
export type PolygonBackgroundProps = HTMLAttributes<HTMLDivElement> & {
	getPoints?: PolygonPointsFactory;
	/**
	 * Order as in CSS `padding` shorthand property
	 * @default [30, 40]
	 */
	padding?:
		| number
		| [number]
		| [number, number]
		| [number, number, number]
		| [number, number, number, number];
	/**
	 * @default 'secondary'
	 */
	background?: keyof typeof backgroundColors;
	rotation?: number | string;
	/**
	 * @default false
	 */
	noFill?: boolean;
};

const PolygonBackground = ({
	className,
	children,
	getPoints = getDefaultPoints,
	padding = [DEFAULT_PADDING_Y, DEFAULT_PADDING_X],
	background = 'secondary',
	rotation,
	noFill = false,
	style,
	...props
}: PolygonBackgroundProps) => {
	const rootRef = useRef<HTMLDivElement>(null!);
	const [attributes, setAttributes] = useState<BackgroundAttributes>();

	const appliedRotation = useEventActivatedValue(() => {
		if (!rotation) return null;

		if (typeof rotation === 'string') return rotation;
		return rotation + 'deg';
	}, 'load');

	const strokeWidth = 2 * BORDER_RADIUS;
	const backgroundColor = backgroundColors[background];

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

	useWindowEvent('load', updatePolygonSize, [children]);
	useWindowEvent('resize', () => !rotation && updatePolygonSize(), [
		children,
	]);

	const parsedPadding = Array.isArray(padding)
		? padding.map((value) => value + 'px').join(' ')
		: padding + 'px';

	return (
		<div
			ref={rootRef}
			className={cn('relative w-fit', className)}
			style={{
				padding: parsedPadding,
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
					className="absolute top-0 left-0"
				>
					<polygon
						points={attributes.points}
						strokeLinejoin="round"
						strokeWidth={`${strokeWidth}px`}
						stroke={backgroundColor}
						fill={backgroundColor}
						fillOpacity={noFill ? 0 : 100}
					/>
				</svg>
			)}

			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default PolygonBackground;
