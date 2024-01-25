import cn from 'classnames';
import { HTMLAttributes } from 'react';
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
				<h2 className="relative text-3xl font-bold uppercase w-max">
					<span className="text-accent">#</span> {title}
				</h2>

				<Divider className="flex-grow mr-10" />
			</div>

			{children}
		</section>
	);
};
