import React, { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

import { Divider } from '@/components/ui/Divider';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
	({ title, className, children, ...props }, ref) => {
		return (
			<section
				ref={ref}
				className={cn('my-24 scroll-mt-32', className)}
				{...props}
			>
				<div className="mb-16 flex items-center gap-8">
					<h2 className="relative w-max font-display text-3xl font-bold uppercase">
						<span className="text-accent">#</span> {title}
					</h2>

					<Divider className="mr-10 flex-grow" />
				</div>

				{children}
			</section>
		);
	},
);
Section.displayName = 'Section';

export type SubSectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
};

export const SubSection = forwardRef<HTMLDivElement, SubSectionProps>(
	({ title, className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn('mt-28', className)} {...props}>
				<h3 className="mb-14 px-3 text-center font-display text-xl font-bold uppercase">
					<span className="text-accent">{'>'}</span> {title}
				</h3>

				{children}
			</div>
		);
	},
);
SubSection.displayName = 'SubSection';
