import { HTMLAttributes, useRef } from 'react';

import { Divider } from '@/components/ui';
import tw from '@/lib/tw';
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
	children,
	...props
}: SectionProps) => {
	const rootRef = useRef<HTMLDivElement>(null!);

	useIntersectionObserver(rootRef, (isIntersecting) => {
		if (isIntersecting) onViewportEnter?.();
		else onViewportExit?.();
	});

	return (
		<Root ref={rootRef} {...props}>
			<Content>
				<Header>
					<Title>
						<TitlePrefix>#</TitlePrefix> {title}
					</Title>

					<Strip />
				</Header>

				{children}
			</Content>
		</Root>
	);
};

const Root = tw.section`
	my-16
	scroll-mt-32

	xl:my-24
`;

const Content = tw.div`
	container
`;

const Header = tw.div`
	mb-16
	flex
	items-center
	gap-8
`;

const Title = tw.h2`
	w-max
	relative
	font-display
	text-3xl
	font-bold
	uppercase
`;

const TitlePrefix = tw.span`
	text-accent
`;

const Strip = tw(Divider)`
	mr-10
	flex-grow
`;
