import React, { forwardRef, HTMLAttributes } from 'react';

export type ListDirection = 'row' | 'column';

export type IndexSelector = (
	index: number,
	childrenArray: ReturnType<typeof React.Children.toArray>,
) => boolean;

export type SeparatedProps = HTMLAttributes<HTMLElement> & {
	separator: React.ReactElement;
	as?: keyof JSX.IntrinsicElements;
	/**
	 * Decides whether to put a separator after a child of given index.
	 * Useful for grids. By default, omits the last index
	 */
	indexSelector?: IndexSelector;
};

const defaultIndexSelector: IndexSelector = (index, childrenArray) =>
	index < childrenArray.length - 1;

// TODO: Generic ref type

export const Separated = forwardRef<HTMLElement, SeparatedProps>(
	(
		{
			separator,
			as = 'div',
			indexSelector = defaultIndexSelector,
			className,
			children,
			...props
		},
		ref,
	) => {
		return React.createElement(
			as,
			{ ref, className, ...props },
			separator
				? joinChildren(children, separator, indexSelector)
				: children,
		);
	},
);
Separated.displayName = 'Separated';

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