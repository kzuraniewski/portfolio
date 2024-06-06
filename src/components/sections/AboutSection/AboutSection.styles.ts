import { Polygon, SubSection } from '@/components/ui';
import tw from '@/lib/tw';

export const AuthorPanel = tw.div`
	mx-auto
	flex
	flex-wrap-reverse
	justify-center
	gap-10

	xl:gap-20
`;

export const AuthorDescription = tw.div`
	max-w-md
`;

export const Summary = tw.p`
	w-fit
	mx-auto
	mt-8
	text-center
`;

export const HighlightPolygon = tw(Polygon)`
	mx-auto
	px-6
	py-4
`;

export const HighlightText = tw.p`
	text-center
`;

export const AuthorImageBlock = tw.div`
	w-44
	flex
	items-center
	justify-center
	shrink-0
`;

export const AuthorImageShape = tw.div`
	w-full
	aspect-square
	overflow-hidden
	rounded-full
	border-2
	border-accent
`;

export const AuthorImage = tw.img`
	w-full
	h-full
	object-cover
`;

export const SubSections = tw.div`
	mx-auto
	mt-16
	grid
	grid-cols-1

	sm:grid-cols-2

	lg:grid-cols-[300px_1fr]
	lg:gap-x-12

	xl:grid-cols-[400px_1fr]
	xl:gap-x-16
`;

export const CompanySubSection = tw(SubSection)`
	sm:order-2
	sm:col-span-2
	lg:order-none
	lg:col-span-1
	lg:row-span-2
`;
