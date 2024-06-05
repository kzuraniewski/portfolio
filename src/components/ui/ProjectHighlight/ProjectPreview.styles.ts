import { MdOutlineArrowOutward } from 'react-icons/md';

import { Polygon } from '@/components/ui/Polygon';
import tw from '@/lib/tw';

export const Root = tw.div`
	relative
`;

export const BannerPolygon = tw(Polygon)`
	px-[25px]
	py-[7px]
	absolute
	-right-6
	top-2
	z-10
	text-sm
	text-on-accent
	font-bold
	uppercase
	rotate-30
	pointer-events-none
`;

export const PreviewLink = tw.a`
	block
	relative
	group
	overflow-hidden
	rounded-sm
`;

export const Overlay = tw.div`
	w-5/6
	px-5
	absolute
	left-1/2
	top-1/2
	z-10
	-translate-x-1/2
	-translate-y-1/2
	text-center
	text-sm
	text-light
	transition-opacity
	opacity-0
	overflow-ellipsis
	pointer-events-none

	group-hover:opacity-100
`;

export const LinkIcon = tw(MdOutlineArrowOutward)`
	inline-block
	w-4
	h-4
	ml-2
`;

export const Image = tw.img`
	h-64
	aspect-video
	scale-[1.03]
	transition-[filter]

	group-hover:blur-[2px]
	group-hover:brightness-50
`;
