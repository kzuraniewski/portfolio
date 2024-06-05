import tw from '@/lib/tw';

import _ProjectPreview from './ProjectPreview';

export const Root = tw.div`
	grid
	grid-rows-[repeat(3, fit-content)]
	grid-cols-[20rem_1fr]
	gap-x-16
	mb-24
`;

export const Header = tw.div`
	mb-5
	w-full
	flex
	justify-between
	items-end
`;

export const Title = tw.h3`
	font-display
	text-2xl
	font-bold
	uppercase
`;

export const ProjectPreview = tw(_ProjectPreview)`
	row-span-3
`;

export const Actions = tw.div`
	ml-auto
	mt-10
	flex
	justify-end
	items-center
	gap-5
`;
