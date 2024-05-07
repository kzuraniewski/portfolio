import React from 'react';
import { Trans } from '@lingui/react';

import Polygon from '@/components/ui/Polygon';
import { companies } from '@/lib/data';

export const CompanyHistory = () => {
	return (
		<ul className="flex flex-col gap-16">
			{companies.map((company) => (
				<li key={company.name} className="flex gap-5">
					<div className="w-44 shrink-0">
						<h3 className="font-display font-bold uppercase">
							{company.name}
						</h3>
					</div>

					<div className="text-sm">
						<div className="flex justify-between">
							<Polygon
								getPoints={(width, height) => [
									[0, 5],
									[width, 0],
									[width - 5, height - 1],
									[3, height],
								]}
								className="mb-3 h-fit w-fit p-3"
							>
								<ul>
									{company.positions.map((position) => (
										<li
											key={company.name + position}
											className="font-display font-bold uppercase text-accent"
										>
											{position}
										</li>
									))}
								</ul>
							</Polygon>

							<div className="mr-3 mt-2 tracking-wide">
								<Trans id={company.timeSpan.id} />
							</div>
						</div>

						<div className="mt-4">
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
					</div>
				</li>
			))}
		</ul>
	);
};
