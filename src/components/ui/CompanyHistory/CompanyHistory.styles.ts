import tw from '@/lib/tw';

import _PositionList from './PositionList';

export const CompanyList = tw.ul`
	flex
	flex-col
	gap-16

	@container
`;

export const CompanyInfo = tw.li`
	grid-rows-[repeat(4, fit-content)]
	grid
	grid-cols-3
	text-sm
`;

export const Title = tw.h3`
	col-span-3
	mb-7
	text-center
	font-display
	text-base
	font-bold
	uppercase

	@lg:col-span-1
	@lg:mr-5
	@lg:w-44
	@lg:shrink-0
	@lg:text-start
`;

export const PositionList = tw(_PositionList)`
	col-span-3

	@sm:col-span-2

	@lg:col-span-2

	@xl:col-span-1
`;

export const TimeSpan = tw.div`
	col-span-3
	ml-3
	w-max
	text-end
	tracking-wide

	@sm:col-span-1
	@sm:ml-auto
	@sm:mr-1
	@sm:mt-2

	@lg:col-span-3
	@lg:col-start-2
	@lg:mx-3
	@lg:mt-0

	@xl:order-none
	@xl:col-span-1
`;

export const SummaryList = tw.ul`
	col-span-3
	mt-6

	@lg:col-span-2
	@lg:col-start-2
`;
