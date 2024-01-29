import React, { HTMLAttributes, forwardRef } from 'react';

export type ListDirection = 'row' | 'column';

export type SeparatedProps = HTMLAttributes<HTMLElement> & {
	separator: React.ReactElement;
	as?: keyof JSX.IntrinsicElements;
};

// TODO: Generic ref type

export const Separated = forwardRef<HTMLElement, SeparatedProps>(
	({ separator, as = 'div', className, children, ...props }, ref) => {
		return React.createElement(
			as,
			{ ref, className, ...props },
			separator ? joinChildren(children, separator) : children
		);
	}
);

const joinChildren = (
	children: React.ReactNode,
	separator: React.ReactElement
) => {
	const childrenArray = React.Children.toArray(children).filter(Boolean);

	return childrenArray.reduce<React.ReactNode[]>((output, child, index) => {
		output.push(child);

		if (index < childrenArray.length - 1) {
			output.push(
				React.cloneElement(separator, { key: `separator-${index}` })
			);
		}

		return output;
	}, []);
};
