import { Divider } from '@/components/Divider';
import cn from 'classnames';
import { HTMLAttributes, forwardRef } from 'react';

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
				<div className="flex items-center gap-8 mb-16">
					<h2 className="relative text-3xl font-bold uppercase w-max font-display">
						<span className="text-accent">#</span> {title}
					</h2>

					<Divider className="flex-grow mr-10" />
				</div>

				{children}
			</section>
		);
	}
);

export type SubSectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
};

export const SubSection = forwardRef<HTMLDivElement, SubSectionProps>(
	({ title, className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn('my-20', className)} {...props}>
				<h3 className="px-3 font-bold text-center uppercase mb-14 font-display">
					<span className="text-accent">{'>'}</span> {title}
				</h3>

				{children}
			</div>
		);
	}
);
