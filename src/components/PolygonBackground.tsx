import cn from '@/lib/cn';
import { HTMLAttributes, useEffect, useRef, useState } from 'react';

const BACKGROUND_PADDING_X = 40;
const BACKGROUND_PADDING_Y = 30;

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

export type PolygonBackgroundProps = HTMLAttributes<HTMLDivElement> & {
	getPoints?: PolygonPointsFactory;
	padding?: number;
};

const PolygonBackground = ({
	className,
	children,
	getPoints = getDefaultPoints,
	...props
}: PolygonBackgroundProps) => {
	const rootRef = useRef<HTMLDivElement>(null!);
	const [attributes, setAttributes] = useState<BackgroundAttributes>();

	useEffect(() => {
		const updatePolygonSize = () => {
			const { width, height } = rootRef.current.getBoundingClientRect();
			const boxWidth = width + 2 * BACKGROUND_PADDING_X;
			const boxHeight = height + 2 * BACKGROUND_PADDING_Y;

			const points = getPoints(boxWidth, boxHeight)
				.map(([x, y]) => x + ',' + y)
				.join(' ');

			const viewBox = [0, 0, boxWidth, boxHeight].join(' ');

			setAttributes({
				viewBox,
				points,
				width: boxWidth,
				height: boxHeight,
			});
		};

		updatePolygonSize();

		window.addEventListener('resize', updatePolygonSize);
		return () => {
			window.removeEventListener('resize', updatePolygonSize);
		};
	}, [children]);

	return (
		<div ref={rootRef} className={cn('relative', className)} {...props}>
			{attributes && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox={attributes.viewBox}
					preserveAspectRatio="none"
					width={attributes.width}
					height={attributes.height}
					style={{
						position: 'absolute',
						top: -BACKGROUND_PADDING_Y,
						left: -BACKGROUND_PADDING_X,
					}}
				>
					<polygon
						points={attributes.points}
						fill="#393E46" // secondary
					/>
				</svg>
			)}

			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default PolygonBackground;
