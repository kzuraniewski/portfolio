import React, { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

import Container from '@/components/ui/Container';
import Divider from '@/components/ui/Divider';
import Polygon, { PolygonVariant } from '@/components/ui/Polygon';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
	({ title, className, children, ...props }, ref) => {
		return (
			<section
				ref={ref}
				className={cn('my-16 xl:my-24 scroll-mt-32', className)}
				{...props}
			>
				<Container>
					<div className="mb-16 flex items-center gap-8">
						<h2 className="relative w-max font-display text-3xl font-bold uppercase">
							<span className="text-accent">#</span> {title}
						</h2>

						<Divider className="mr-10 flex-grow" />
					</div>

					{children}
				</Container>
			</section>
		);
	},
);
Section.displayName = 'Section';

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
			<h3 className="mb-14 px-3 text-center font-display text-xl font-bold uppercase">
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
				<div className="p-10">{content}</div>
			) : (
				<Polygon
					variant={variant}
					padding={40}
					getPoints={(width, height) => [
						[0, 7],
						[width, 0],
						[width - 5, height],
						[0, height - 5],
					]}
					className="w-auto"
				>
					{content}
				</Polygon>
			)}
		</div>
	);
};

// FEATURE: wider stroke on outlined section, api adjust in Polygon needed
