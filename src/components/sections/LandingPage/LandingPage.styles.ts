import { FaArrowTurnDown } from 'react-icons/fa6';

import { Button, Divider, Polygon } from '@/components/ui';
import tw from '@/lib/tw';

export const Root = tw.section`
	relative
	h-[80vh]
	pt-header
	flex
	items-center
`;

export const Content = tw.div`
	container
	flex
	flex-col
	items-center
`;

export const TitlePrefix = tw.span`
	text-small
	text-accent
	tracking-wide
`;

export const Title = tw.h1`mb-10
	text-center
	font-display
	text-7xl
	font-bold
	leading-tight

	md:text-8xl
`;

export const ContentDivider = tw(Divider)`
	w-48
	mb-7
`;

export const IntroPolygonOuter = tw(Polygon)`
	px-5
	py-3
`;

export const IntroPolygonInner = tw(Polygon)`p-5`;

export const IntroText = tw.p`
	max-w-sm
	text-center
	text-on-secondary
`;

export const CtaArrowIcon = tw(FaArrowTurnDown)`
	inline-block
	w-2
	ml-2
`;
