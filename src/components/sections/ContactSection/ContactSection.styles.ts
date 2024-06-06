import { Divider, Polygon, Separated, SubSection } from '@/components/ui';
import tw from '@/lib/tw';

export const SeparatedContent = tw(Separated)`
	w-4/5
	mx-auto
	flex
	items-start
	justify-between
	gap-10
`;

export const ContentDivider = tw(Divider)`
	h-64
	self-center
`;

export const ContentBlock = tw.div`
	w-2/5

	[&>p]:mb-5
`;

export const CenteredText = tw.p`
	text-center
`;

export const FreelanceSubSection = tw(SubSection)`
	mb-0
`;

export const ContactBlock = tw.div`
	flex
	flex-col
	items-center
	gap-10
`;

export const HighlightPolygonOuter = tw(Polygon)`
	mt-5
	p-3
`;

export const HighlightPolygonInner = tw(Polygon)`
	w-max
	px-8
	py-5
	text-on-secondary
`;

export const ContactAlternative = tw.div`
	text-sm
`;
