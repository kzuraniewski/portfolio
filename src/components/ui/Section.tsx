import React, { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

import Divider from '@/components/ui/Divider';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
};

const Section = forwardRef<HTMLDivElement, SectionProps>(
	({ title, className, children, ...props }, ref) => {
		return (
			<section
				ref={ref}
				className={cn('my-16 scroll-mt-32 xl:my-24', className)}
				{...props}
			>
				<div className="container">
					<div className="mb-16 flex items-center gap-8">
						<h2 className="relative w-max font-display text-3xl font-bold uppercase">
							<span className="text-accent">#</span> {title}
						</h2>

						<Divider className="mr-10 flex-grow" />
					</div>

					{children}
				</div>
			</section>
		);
	},
);
Section.displayName = 'Section';

export default Section;
