import React from 'react';

import { IndexSelector } from './Separated.types';

export const defaultIndexSelector: IndexSelector = (index, childrenArray) =>
	index < childrenArray.length - 1;

export const joinChildren = (
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
