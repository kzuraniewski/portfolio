import { Divider } from '@/components/Divider';
import { Separated } from '@/components/Separated';
import cn from '@/lib/cn';
import { companies } from '@/lib/data';
import { useState } from 'react';

export const CompanyHistory = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className="flex w-2/3 gap-20 mx-auto">
			<Separated
				as="ul"
				separator={<Divider />}
				className="flex flex-col tracking-wide w-fit"
			>
				{companies.map(({ timeSpan, name }, index) => (
					<li
						key={`company-${index}`}
						onClick={() => setSelectedIndex(index)}
					>
						<button
							className={cn(
								'w-full px-3 py-2 text-sm transition-colors rounded-sm text-start hover:bg-secondary',
								{ 'bg-secondary': selectedIndex === index }
							)}
						>
							<span className="inline-block mr-2 text-accent">
								{timeSpan}
							</span>{' '}
							{name}
						</button>
					</li>
				))}
			</Separated>

			<div>{companies[selectedIndex].description}</div>
		</div>
	);
};
