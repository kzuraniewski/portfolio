import cn from 'classnames';
import { HTMLAttributes, forwardRef } from 'react';
import { Divider } from './Divider';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
};

export const Section = ({
	title,
	className,
	children,
	...props
}: SectionProps) => {
	return (
		<section className={cn('pt-24', className)} {...props}>
			<div className="flex items-center gap-8 mb-16">
				<h2 className="relative text-3xl font-bold uppercase w-max font-display">
					<span className="text-accent">#</span> {title}
				</h2>

				<Divider className="flex-grow mr-10" />
			</div>

			{children}
		</section>
	);
};

export type SubSectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
};

export const SubSection = forwardRef<HTMLDivElement, SubSectionProps>(
	({ title, children, ...props }, ref) => {
		return (
			<div ref={ref} {...props}>
				<h3 className="px-3 font-bold text-center uppercase mb-14 font-display">
					<span className="text-accent">{'>'}</span> {title}
				</h3>

				{children}
			</div>
		);
	}
);
