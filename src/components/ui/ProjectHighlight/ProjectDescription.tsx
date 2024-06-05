import { Polygon } from '@/components/ui';
import tw from '@/lib/tw';

export type ProjectDescriptionProps = React.PropsWithChildren;

const ProjectDescription = ({ children }: ProjectDescriptionProps) => {
	return (
		<RootPolygon
			variant="dashed"
			color="accent"
			getPoints={(width, height) => [
				[40, 5],
				[width - 10, 25],
				[width - 75, height],
				[15, height - 25],
			]}
		>
			<InnerPolygon
				getPoints={(width, height) => [
					[0, 5],
					[width, 0],
					[width - 25, height],
					[5, height - 3],
				]}
			>
				<Text>{children}</Text>
			</InnerPolygon>
		</RootPolygon>
	);
};

const RootPolygon = tw(Polygon)`
	px-5
	py-3
`;

const InnerPolygon = tw(Polygon)`
	px-5
	py-3
`;

const Text = tw.p`
	text-on-secondary
`;

export default ProjectDescription;
