import { HTMLAttributes, useRef } from 'react';
import cn from 'classnames';

import { Divider } from '@/components/ui';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
	onViewportEnter?: () => void;
	onViewportExit?: () => void;
};

export const Section = ({
	title,
	onViewportEnter,
	onViewportExit,
	className,
	children,
	...props
}: SectionProps) => {
	const rootRef = useRef<HTMLDivElement>(null!);

	useIntersectionObserver(rootRef, (isIntersecting) => {
		if (isIntersecting) onViewportEnter?.();
		else onViewportExit?.();
	});

	return (
		<section
			ref={rootRef}
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
};
