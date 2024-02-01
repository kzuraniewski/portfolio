import PolygonBackground from '@/components/PolygonBackground';
import { companies } from '@/lib/data';

export const CompanyHistory = () => {
	return (
		<ul className="flex flex-col gap-16">
			{companies.map((company, index) => (
				<li key={`company-${index}`} className="flex gap-5">
					<div className="w-1/3 shrink-0">
						<h3 className="font-bold uppercase font-display">
							{company.name}
						</h3>
					</div>

					<div className="text-sm">
						<div className="flex justify-between">
							<PolygonBackground
								padding={[10.2]}
								className="mb-3 h-fit w-fit"
								getPoints={(width, height) => [
									[0, 5],
									[width, 0],
									[width - 5, height - 1],
									[3, height],
								]}
							>
								<ul>
									{company.positions.map(
										(position, index) => (
											<li
												key={`position-${index}`}
												className="font-bold uppercase text-accent font-display"
											>
												{position}
											</li>
										)
									)}
								</ul>
							</PolygonBackground>

							<div className="mt-2 mr-3 tracking-wide">
								{company.timeSpan}
							</div>
						</div>

						<div className="mt-4">
							<ul>
								{company.summary.map((summaryElement) => (
									<li className="relative mb-1 -left-2 marker:content-['-'] marker:text-accent">
										<span className="relative left-2">
											{summaryElement}
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
