import { AnchorHTMLAttributes } from 'react';

import { Polygon } from '@/components/ui';
import tw from '@/lib/tw';

export type CornerBannerProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	/**
	 * @default false
	 */
	hidden?: boolean;
};

export const CornerBanner = ({
	hidden = false,
	children,
	...props
}: CornerBannerProps) => {
	return (
		<RootLink visible={!hidden} {...props}>
			<BannerPolygon
				color="accent"
				getPoints={(width, height) => [
					[0, 7],
					[width, 0],
					[width, height],
					[0, height - 7],
				]}
			>
				<Content>{children}</Content>
			</BannerPolygon>
		</RootLink>
	);
};

const RootLink = tw.a<{ visible: boolean }>`
	w-56
	fixed
	bottom-0
	left-0
	origin-[center_100px]
	-translate-x-1/2
	-translate-y-[50px]
	rotate-45
	transition-opacity
	duration-500
	opacity-0
	pointer-events-none

	${(p) => p.visible && 'lg:pointer-events-auto lg:opacity-100'}
`;

const BannerPolygon = tw(Polygon)`
	w-full
	px-0
	py-3
`;

const Content = tw.div`
	inline-block
	w-full
	text-center
	font-bold
	uppercase
	text-on-accent

	hover:no-underline
`;
