import React, { HTMLAttributes } from 'react';

import Polygon, { PolygonVariant } from '@/components/ui/Polygon';
import cn from '@/lib/cn';

export type SubSectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;

	/**
	 * @default 'filled'
	 */
	variant?: PolygonVariant | 'flat';
};

const SubSection = ({
	title,
	variant = 'filled',
	className,
	children,
	...props
}: SubSectionProps) => {
	const content = (
		<>
			<h3 className="mb-14 text-center font-display text-xl font-bold uppercase">
				<span className="text-accent">{'>'}</span> {title}
			</h3>

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
				<div className="p-7 md:p-10">{content}</div>
			) : (
				<Polygon
					variant={variant}
					getPoints={(width, height) => [
						[0, 7],
						[width, 0],
						[width - 5, height],
						[0, height - 5],
					]}
					className="w-auto p-7 md:p-10"
				>
					{content}
				</Polygon>
			)}
		</div>
	);
};

// FEATURE: wider stroke on outlined section, api adjust in Polygon needed

export default SubSection;
