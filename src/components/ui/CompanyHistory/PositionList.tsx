import { Polygon, PolygonProps } from '@/components/ui';
import tw from '@/lib/tw';

export type PositionListProps = PolygonProps & {
	positions: string[];
};

const PositionList = ({ positions, ...props }: PositionListProps) => {
	return (
		<RootPolygon
			getPoints={(width, height) => [
				[0, 5],
				[width, 0],
				[width - 5, height - 1],
				[3, height],
			]}
			{...props}
		>
			<ul>
				{positions.map((position) => (
					<Position key={position}>{position}</Position>
				))}
			</ul>
		</RootPolygon>
	);
};

const RootPolygon = tw(Polygon)`
	mb-3
	h-fit
	w-fit
	p-3
`;

const Position = tw.li`
	w-max
	font-display
	font-bold
	uppercase
	text-accent
`;

export default PositionList;
