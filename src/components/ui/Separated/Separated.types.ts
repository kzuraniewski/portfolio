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
