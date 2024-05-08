import React from 'react';
import { Trans } from '@lingui/react';

import Polygon from '@/components/ui/Polygon';
import { companies } from '@/lib/data';

export const CompanyHistory = () => {
	return (
		<ul className="@container flex flex-col gap-16">
			{companies.map((company) => (
				<li
					key={company.name}
					className="grid-rows-[repeat(4, fit-content)] grid grid-cols-3 text-sm"
				>
					<div className="@lg:col-span-1 @lg:mr-5 @lg:w-44 @lg:shrink-0 col-span-3 mb-7 text-base">
						<h3 className="@lg:text-start text-center font-display font-bold uppercase">
							{company.name}
						</h3>
					</div>

					<Polygon
						getPoints={(width, height) => [
							[0, 5],
							[width, 0],
							[width - 5, height - 1],
							[3, height],
						]}
						className="@sm:col-span-2 @lg:col-span-2 @lg:ml-0 @xl:col-span-1 col-span-3 mb-3 h-fit w-fit p-3"
					>
						<ul>
							{company.positions.map((position) => (
								<li
									key={company.name + position}
									className="w-max font-display font-bold uppercase text-accent"
								>
									{position}
								</li>
							))}
						</ul>
					</Polygon>

					<div className="@sm:col-span-1 @sm:ml-auto @sm:mr-1 @sm:mt-2 @lg:mx-3 @lg:mt-0 @lg:col-span-3 @lg:col-start-2 @xl:col-span-1 @xl:order-none col-span-3 ml-3 w-max text-end tracking-wide">
						<Trans id={company.timeSpan.id} />
					</div>

					<div className="@lg:col-span-2 @lg:col-start-2 col-span-3 mt-6">
						<ul>
							{company.summary.map((summaryElement) => (
								<li
									key={summaryElement.id}
									className="relative -left-2 mb-1 marker:text-accent marker:content-['-']"
								>
									<span className="relative left-2">
										<Trans id={summaryElement.id} />
									</span>
								</li>
							))}
						</ul>
					</div>
				</li>
			))}
		</ul>
	);
};
