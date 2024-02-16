import React from 'react';
import { PolymorphicProps } from '@/types';

export type ListDirection = 'row' | 'column';

export type IndexSelector = (
	index: number,
	childrenArray: ReturnType<typeof React.Children.toArray>,
) => boolean;

export type SeparatedProps<RootElement extends React.ElementType> =
	PolymorphicProps<
		{
			separator: React.ReactElement;
			/**
			 * Decides whether to put a separator after a child of given index.
			 * Useful for grids. By default, omits the last index
			 */
			indexSelector?: IndexSelector;
		},
		RootElement
	>;

const defaultIndexSelector: IndexSelector = (index, childrenArray) =>
	index < childrenArray.length - 1;

export const Separated = <RootElement extends React.ElementType = 'div'>({
	separator,
	as,
	indexSelector = defaultIndexSelector,
	children,
	...props
}: SeparatedProps<RootElement>) => {
	const RootElement = as ?? 'div';

	return (
		<RootElement {...props}>
			{separator
				? joinChildren(children, separator, indexSelector)
				: children}
		</RootElement>
	);
};

const joinChildren = (
	children: React.ReactNode,
	separator: React.ReactElement,
	indexSelector: IndexSelector,
) => {
	const childrenArray = React.Children.toArray(children).filter(Boolean);

	return childrenArray.reduce<React.ReactNode[]>((output, child, index) => {
		output.push(child);

		if (indexSelector(index, childrenArray)) {
			output.push(
				React.cloneElement(separator, { key: `separator-${index}` }),
			);
		}

		return output;
	}, []);
};
