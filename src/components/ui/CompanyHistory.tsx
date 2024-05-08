import React from 'react';
import { Trans } from '@lingui/react';

import Polygon from '@/components/ui/Polygon';
import { companies } from '@/lib/data';

export const CompanyHistory = () => {
	return (
		<ul className="flex flex-col gap-16">
			{companies.map((company) => (
				<li
					key={company.name}
					className="grid-rows-[repeat(4, fit-content)] md:gap-x- grid grid-cols-3 text-sm"
				>
					<div className="col-span-3 mb-7 text-base md:col-span-1 md:mr-5 md:w-44 md:shrink-0">
						<h3 className="text-center font-display font-bold uppercase md:text-start">
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
						className="col-span-3 mb-3 h-fit w-fit p-3 sm:col-span-2 md:col-span-1 md:ml-0"
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

					<div className="col-span-3 ml-3 w-max text-end tracking-wide sm:col-span-1 sm:ml-auto sm:mr-1 sm:mt-2 md:mx-3">
						<Trans id={company.timeSpan.id} />
					</div>

					<div className="col-span-3 mt-6 md:col-span-2 md:col-start-2">
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
