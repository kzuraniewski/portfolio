import { HTMLAttributes } from 'react';

import { Polygon, PolygonVariant } from '@/components/ui';
import cn from '@/lib/cn';
import tw from '@/lib/tw';

export type SubSectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;

	/**
	 * @default 'filled'
	 */
	variant?: PolygonVariant | 'flat';
};

export const SubSection = ({
	title,
	variant = 'filled',
	className,
	children,
	...props
}: SubSectionProps) => {
	const content = (
		<>
			<Title>
				<TitlePrefix>{'>'}</TitlePrefix> {title}
			</Title>

			{children}
		</>
	);

	return (
		<div
			className={cn(
				'mt-14',
				{ 'text-on-secondary': variant === 'filled' },
				className,
			)}
			{...props}
		>
			{variant === 'flat' ? (
				<FlatBody>{content}</FlatBody>
			) : (
				<PolygonBody
					variant={variant}
					getPoints={(width, height) => [
						[0, 7],
						[width, 0],
						[width - 5, height],
						[0, height - 5],
					]}
				>
					{content}
				</PolygonBody>
			)}
		</div>
	);
};

const FlatBody = tw.div`
	p-7

	md:p-10
`;

const PolygonBody = tw(Polygon)`
	w-auto
	p-7

	md:p-10
`;

const Title = tw.h3`
	mb-14
	text-center
	font-display
	text-xl
	font-bold
	uppercase
`;

const TitlePrefix = tw.span`
	text-accent
`;

// FEATURE: wider stroke on outlined section, api adjust in Polygon needed
