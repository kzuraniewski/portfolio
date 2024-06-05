import { HTMLAttributes } from 'react';

import tw from '@/lib/tw';

export type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = ({ children, ...props }: ListItemProps) => {
	return (
		<Root {...props}>
			<Text>{children}</Text>
		</Root>
	);
};

const Root = tw.li`
	relative
	mb-1
	-left-2

	marker:content-['-']
	marker:text-accent
`;

const Text = tw.span`
	relative
	left-2
`;
