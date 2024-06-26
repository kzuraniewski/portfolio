import { Trans } from '@lingui/react';

import { ListItem } from '@/components/ui';
import { companies } from '@/lib/data';

import PositionList from './PositionList';

const CompanyHistory = () => {
	return (
		<ul className="flex flex-col gap-16 @container">
			{companies.map((company) => (
				<li
					key={company.name}
					className="grid-rows-[repeat(4, fit-content)] grid grid-cols-3 text-sm"
				>
					<h3 className="col-span-3 mb-7 text-center font-display text-base font-bold uppercase @lg:col-span-1 @lg:mr-5 @lg:w-44 @lg:shrink-0 @lg:text-start">
						{company.name}
					</h3>

					<PositionList
						className="col-span-3 @sm:col-span-2 @lg:col-span-2 @xl:col-span-1"
						positions={company.positions}
					/>

					<div className="col-span-3 ml-3 w-max text-end tracking-wide @sm:col-span-1 @sm:ml-auto @sm:mr-1 @sm:mt-2 @lg:col-span-3 @lg:col-start-2 @lg:mx-3 @lg:mt-0 @xl:order-none @xl:col-span-1">
						<Trans id={company.timeSpan.id} />
					</div>

					<ul className="col-span-3 mt-6 @lg:col-span-2 @lg:col-start-2">
						{company.summary.map((summaryElement) => (
							<ListItem key={summaryElement.id}>
								<Trans id={summaryElement.id} />
							</ListItem>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
};

export default CompanyHistory;
