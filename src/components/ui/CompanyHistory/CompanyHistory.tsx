import { Trans } from '@lingui/react';

import { ListItem } from '@/components/ui';
import { companies } from '@/lib/data';

import {
	CompanyInfo,
	CompanyList,
	PositionList,
	SummaryList,
	TimeSpan,
	Title,
} from './CompanyHistory.styles';

const CompanyHistory = () => {
	return (
		<CompanyList>
			{companies.map((company) => (
				<CompanyInfo key={company.name}>
					<Title>{company.name}</Title>

					<PositionList positions={company.positions} />

					<TimeSpan>
						<Trans id={company.timeSpan.id} />
					</TimeSpan>

					<SummaryList>
						{company.summary.map((summaryElement) => (
							<ListItem key={summaryElement.id}>
								<Trans id={summaryElement.id} />
							</ListItem>
						))}
					</SummaryList>
				</CompanyInfo>
			))}
		</CompanyList>
	);
};

export default CompanyHistory;
